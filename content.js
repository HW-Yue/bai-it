"use strict";

(() => {
  try {
    if (typeof window === "undefined" || window !== window.top) return;

    const MARK_ATTR = "data-bai-it-marked";
    const DEFAULT_CONFIG = {
      llm: {
        activeProvider: "gemini",
        providers: {
          gemini: { apiKey: "", model: "gemini-3.1-flash-lite-preview" },
        },
      },
      sensitivity: 3,
      scanThreshold: "medium",
      chunkGranularity: "fine",
      chunkIntensity: 5,
      disabledSites: [],
    };

    const STYLE_TEXT = `
.enlearn-word {
  border-bottom: 1px dotted rgba(37, 99, 235, 0.45);
  cursor: pointer;
}
.enlearn-word:hover {
  border-bottom-color: #2563eb;
}
.enlearn-tooltip-root {
  position: fixed !important;
  inset: 0 !important;
  z-index: 2147483647 !important;
  pointer-events: none !important;
}
.enlearn-tooltip {
  position: fixed !important;
  display: none;
  max-width: min(360px, calc(100vw - 16px));
  background: #1a1a2e;
  color: #e2e8f0;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.5;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  z-index: 2147483647 !important;
  word-break: break-word;
  white-space: normal;
}
.enlearn-trigger-wrap {
  position: relative;
}
.enlearn-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  margin-left: 6px;
  border: none;
  background: transparent;
  color: rgba(37, 99, 235, 0.5);
  cursor: pointer;
  padding: 0;
}
.enlearn-chunked {
  display: block !important;
  margin: 1px 0;
}
.enlearn-original-hidden {
  display: none !important;
}
[${MARK_ATTR}="true"] {
  position: relative;
  z-index: 999 !important;
  user-select: text !important;
}
body.enlearn-paused .enlearn-chunked { display: none !important; }
body.enlearn-paused .enlearn-trigger { display: none !important; }
body.enlearn-paused .enlearn-original-hidden { display: block !important; }
`;

    const BLOCK_TAGS = new Set([
      "DIV",
      "P",
      "LI",
      "BLOCKQUOTE",
      "SECTION",
      "ARTICLE",
      "ASIDE",
      "MAIN",
      "DD",
      "DT",
      "FIGCAPTION",
      "OL",
      "UL",
      "DL",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "PRE",
      "FIGURE",
      "DETAILS",
      "SUMMARY",
      "SPAN",
    ]);

    const SKIP_TAGS = new Set([
      "SCRIPT",
      "STYLE",
      "NOSCRIPT",
      "SVG",
      "CANVAS",
      "VIDEO",
      "AUDIO",
      "IFRAME",
      "OBJECT",
      "EMBED",
      "INPUT",
      "TEXTAREA",
      "SELECT",
      "BUTTON",
      "TABLE",
      "FORM",
      "FIELDSET",
    ]);

    let active = false;
    let paused = false;
    let config = { ...DEFAULT_CONFIG };
    let styleInjected = false;
    let scanTimer = null;
    let tooltipRoot = null;
    let tooltipEl = null;
    let tooltipHideTimer = null;
    const processedElements = new WeakSet();
    const observedRoots = new WeakSet();
    const observers = [];

    function escapeHtml(value) {
      return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function ensureTooltip() {
      if (tooltipRoot && tooltipEl) return;
      tooltipRoot = document.createElement("div");
      tooltipRoot.className = "enlearn-tooltip-root";
      tooltipRoot.setAttribute(MARK_ATTR, "true");
      tooltipEl = document.createElement("div");
      tooltipEl.className = "enlearn-tooltip";
      tooltipRoot.appendChild(tooltipEl);
      document.body.appendChild(tooltipRoot);
    }

    function hideTooltip(immediate = false) {
      if (!tooltipEl) return;
      if (tooltipHideTimer) clearTimeout(tooltipHideTimer);
      if (immediate) {
        tooltipEl.style.display = "none";
        return;
      }
      tooltipHideTimer = setTimeout(() => {
        if (tooltipEl) tooltipEl.style.display = "none";
      }, 120);
    }

    function showTooltipForWord(target) {
      if (!target || !target.classList?.contains("enlearn-word")) return;
      ensureTooltip();
      if (!tooltipEl) return;
      if (tooltipHideTimer) {
        clearTimeout(tooltipHideTimer);
        tooltipHideTimer = null;
      }

      const def = target.getAttribute("data-def") || "暂无释义";
      tooltipEl.textContent = def;
      tooltipEl.style.display = "block";

      const rect = target.getBoundingClientRect();
      const tipRect = tooltipEl.getBoundingClientRect();

      let left = rect.left + rect.width / 2 - tipRect.width / 2;
      let top = rect.top - tipRect.height - 8;
      if (left < 8) left = 8;
      if (left + tipRect.width > window.innerWidth - 8) left = window.innerWidth - 8 - tipRect.width;
      if (top < 8) top = rect.bottom + 8;
      if (top + tipRect.height > window.innerHeight - 8) top = Math.max(8, window.innerHeight - 8 - tipRect.height);

      tooltipEl.style.left = `${Math.round(left)}px`;
      tooltipEl.style.top = `${Math.round(top)}px`;
    }

    function handleWordMouseOver(event) {
      const target = event.target?.closest?.(".enlearn-word");
      if (!target) return;
      showTooltipForWord(target);
    }

    function handleWordMouseOut(event) {
      const fromWord = event.target?.closest?.(".enlearn-word");
      if (!fromWord) return;
      const toEl = event.relatedTarget;
      if (toEl && fromWord.contains(toEl)) return;
      hideTooltip(false);
    }

    function normalizeText(text) {
      return text.replace(/\s+/g, " ").trim();
    }

    function isEnglishLike(text, ratio = 0.5) {
      if (!text || text.length < 3) return false;
      const cleaned = text.replace(/[\s\d\p{P}]/gu, "");
      if (!cleaned) return false;
      const latin = cleaned.replace(/[^a-zA-Z]/g, "").length;
      return latin / cleaned.length >= ratio;
    }

    function sendMessage(payload) {
      return new Promise((resolve) => {
        try {
          chrome.runtime.sendMessage(payload, (resp) => resolve(resp ?? {}));
        } catch {
          resolve({});
        }
      });
    }

    async function getWordInfos(words) {
      if (!words.length) return [];
      const resp = await sendMessage({ type: "QUERY_WORDS", words });
      if (!Array.isArray(resp)) return words.map(() => ({ exists: false, definition: null }));
      return resp;
    }

    async function extractWordInfos(text) {
      const candidates = text.match(/\b[a-zA-Z][a-zA-Z'-]*[a-zA-Z]\b|[a-zA-Z]{3,}\b/g);
      if (!candidates) return [];
      const uniq = [...new Set(candidates.map((w) => w.toLowerCase()))];
      const infos = await getWordInfos(uniq);
      const out = [];
      for (let i = 0; i < uniq.length; i++) {
        const info = infos[i];
        if (info && info.definition) {
          out.push({ word: uniq[i], definition: info.definition });
        }
      }
      return out;
    }

    function isInsideSkippedContainer(node) {
      const el = node.parentElement;
      if (!el) return true;
      if (el.closest(`.${"enlearn-chunked"}, .enlearn-original-hidden, [${MARK_ATTR}="true"]`)) return true;
      if (el.closest("script,style,noscript,iframe,textarea,select,button")) return true;
      if (el.closest("nav,header,footer,aside,form,[role='navigation'],[role='banner'],[role='complementary'],[role='grid'],[role='table'],[role='listbox']")) return true;
      if (SKIP_TAGS.has(el.tagName)) return true;
      return false;
    }

    function getElementText(element) {
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
            if (isInsideSkippedContainer(node)) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );
      let out = "";
      let current;
      while ((current = walker.nextNode())) {
        out += current.textContent + " ";
      }
      return normalizeText(out);
    }

    function shouldSkipElement(element) {
      if (!element) return true;
      if (processedElements.has(element)) return true;
      if (element.classList?.contains("enlearn-original-hidden")) return true;
      if (element.classList?.contains("enlearn-trigger-wrap")) return true;
      if (element.nextElementSibling?.classList?.contains("enlearn-chunked")) return true;
      if (element.closest(".enlearn-original-hidden, .enlearn-chunked")) return true;
      return false;
    }

    function shouldChunk(text) {
      const words = text.split(/\s+/).filter(Boolean).length;
      return words >= 18;
    }

    function markWordsInRoot(root, wordInfos) {
      if (!wordInfos.length) return;
      const map = new Map(wordInfos.map((w) => [w.word.toLowerCase(), w.definition]));
      const escapedWords = wordInfos.map((w) => w.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      const regex = new RegExp(`\\b(${escapedWords.join("|")})\\b`, "gi");

      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
            if (isInsideSkippedContainer(node)) return NodeFilter.FILTER_REJECT;
            if (node.parentElement?.closest('a[href^="http"]')) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );

      const textNodes = [];
      let node;
      while ((node = walker.nextNode())) textNodes.push(node);

      for (let i = textNodes.length - 1; i >= 0; i--) {
        const textNode = textNodes[i];
        const text = textNode.textContent || "";
        const matches = [];
        regex.lastIndex = 0;
        let m;
        while ((m = regex.exec(text))) {
          matches.push({ index: m.index, length: m[0].length, word: m[0] });
        }
        if (!matches.length) continue;

        let current = textNode;
        for (let j = matches.length - 1; j >= 0; j--) {
          const item = matches[j];
          current.splitText(item.index + item.length);
          const hit = current.splitText(item.index);
          const span = document.createElement("span");
          span.className = "enlearn-word";
          span.setAttribute(MARK_ATTR, "true");
          span.setAttribute("data-word", item.word.toLowerCase());
          span.setAttribute("data-def", escapeHtml(map.get(item.word.toLowerCase()) || ""));
          span.textContent = hit.textContent;
          hit.parentNode?.replaceChild(span, hit);
        }
      }
    }

    function addTrigger(element) {
      if (element.querySelector(":scope > .enlearn-trigger")) return;
      element.classList.add("enlearn-trigger-wrap");
      element.setAttribute("data-enlearn-trigger", "1");
      const trigger = document.createElement("span");
      trigger.className = "enlearn-trigger";
      trigger.innerHTML =
        '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="1" y1="3" x2="13" y2="3"></line><line x1="4" y1="7" x2="13" y2="7"></line><line x1="7" y1="11" x2="13" y2="11"></line></svg>';
      trigger.title = "掰开这句";
      element.appendChild(trigger);
    }

    async function processElement(element) {
      if (shouldSkipElement(element)) return;
      const text = getElementText(element);
      if (text.length <= 2 || !isEnglishLike(text)) return;

      const wordInfos = await extractWordInfos(text);
      if (!wordInfos.length) return;

      if (shouldChunk(text)) {
        const clone = element.cloneNode(true);
        markWordsInRoot(clone, wordInfos);
        clone.classList.add("enlearn-chunked");
        clone.setAttribute(MARK_ATTR, "true");
        clone.setAttribute("data-original", text);
        const style = window.getComputedStyle(element);
        clone.style.fontSize = style.fontSize;
        clone.style.fontFamily = style.fontFamily;
        clone.style.lineHeight = style.lineHeight;
        clone.style.color = style.color;
        clone.style.letterSpacing = style.letterSpacing;
        clone.style.wordSpacing = style.wordSpacing;

        element.classList.add("enlearn-original-hidden");
        element.style.setProperty("display", "none", "important");
        element.parentNode?.insertBefore(clone, element.nextSibling);
      } else {
        markWordsInRoot(element, wordInfos);
        addTrigger(element);
      }

      processedElements.add(element);
      sendMessage({
        type: "saveSentence",
        text,
        source_url: window.location.href,
        source_hostname: window.location.hostname,
        manual: false,
        new_words: wordInfos.map((w) => w.word),
      }).catch(() => {});
    }

    function findCandidateAncestor(textNode, rootBoundary) {
      let el = textNode.parentElement;
      while (el && el !== rootBoundary && el !== document.body && !BLOCK_TAGS.has(el.tagName)) {
        el = el.parentElement;
      }
      if (!el || !BLOCK_TAGS.has(el.tagName)) return null;
      return el;
    }

    function collectRoots() {
      const roots = [];
      const seen = new WeakSet();
      function visit(root) {
        if (!root || seen.has(root)) return;
        seen.add(root);
        roots.push(root);
        const queryRoot =
          root instanceof Document ? root.documentElement : root;
        if (!queryRoot || !queryRoot.querySelectorAll) return;
        const all = queryRoot.querySelectorAll("*");
        for (const el of all) {
          if (el.shadowRoot) visit(el.shadowRoot);
        }
      }
      visit(document);
      return roots;
    }

    function collectCandidatesFromRoot(root) {
      const result = new Set();
      const boundary = root instanceof Document ? root.body : root;
      if (!boundary) return result;

      const walker = document.createTreeWalker(
        boundary,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
            if (isInsideSkippedContainer(node)) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );

      let node;
      while ((node = walker.nextNode())) {
        const host = findCandidateAncestor(node, boundary);
        if (host) result.add(host);
      }
      return result;
    }

    function collectPriorityCandidates() {
      const out = new Set();
      const selectors = [
        "#main h1, #main h2, #main h3, #main h4, #main h5, #main h6",
        ".markdown h1, .markdown h2, .markdown h3, .markdown li, .markdown p",
        ".theme-doc-markdown h1, .theme-doc-markdown h2, .theme-doc-markdown h3, .theme-doc-markdown li, .theme-doc-markdown p",
        "#content h2, #content h3, #content span[data-as='p'], #content ul li, #content ol li",
        ".mdx-content span[data-as='p'], .mdx-content ul li, .mdx-content ol li",
      ];
      for (const sel of selectors) {
        for (const el of document.querySelectorAll(sel)) out.add(el);
      }
      return out;
    }

    async function runInitialScan() {
      if (!active || paused) return;

      const candidates = new Set();
      for (const root of collectRoots()) {
        for (const el of collectCandidatesFromRoot(root)) candidates.add(el);
      }
      for (const el of collectPriorityCandidates()) candidates.add(el);

      for (const el of candidates) {
        await processElement(el);
      }
    }

    function disconnectObservers() {
      while (observers.length) {
        const ob = observers.pop();
        try {
          ob.disconnect();
        } catch {}
      }
    }

    function scheduleScan(delay = 250) {
      if (!active || paused) return;
      if (scanTimer) clearTimeout(scanTimer);
      scanTimer = setTimeout(() => {
        scanTimer = null;
        runInitialScan().catch(() => {});
      }, delay);
    }

    function observeRoot(root) {
      if (!root || observedRoots.has(root)) return;
      const target = root instanceof Document ? root.body : root;
      if (!target) return;

      const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          for (const n of m.addedNodes) {
            if (n.nodeType === Node.ELEMENT_NODE && n.shadowRoot) {
              observeRoot(n.shadowRoot);
            }
          }
        }
        scheduleScan(300);
      });

      observer.observe(target, { childList: true, subtree: true, characterData: true });
      observers.push(observer);
      observedRoots.add(root);
    }

    function startObserving() {
      disconnectObservers();
      for (const root of collectRoots()) observeRoot(root);
    }

    function cleanupMarkup() {
      document.querySelectorAll(".enlearn-chunked").forEach((el) => el.remove());
      document.querySelectorAll(".enlearn-original-hidden").forEach((el) => {
        el.classList.remove("enlearn-original-hidden");
        el.style.removeProperty("display");
      });
      document.querySelectorAll(".enlearn-trigger").forEach((el) => el.remove());
      document.querySelectorAll("[data-enlearn-trigger]").forEach((el) => {
        el.classList.remove("enlearn-trigger-wrap");
        el.removeAttribute("data-enlearn-trigger");
      });
      document.querySelectorAll(`.enlearn-word[${MARK_ATTR}="true"]`).forEach((span) => {
        const text = document.createTextNode(span.textContent || "");
        span.parentNode?.replaceChild(text, span);
      });
    }

    function ensureStyles() {
      if (styleInjected) return;
      const style = document.createElement("style");
      style.id = "enlearn-styles";
      style.textContent = STYLE_TEXT;
      document.head.appendChild(style);
      styleInjected = true;
    }

    async function activate() {
      if (active) return;
      active = true;
      paused = false;
      ensureStyles();
      ensureTooltip();
      config = { ...DEFAULT_CONFIG, ...(await sendMessage({ type: "getConfig" })) };
      runInitialScan().catch(() => {});
      startObserving();
      try {
        chrome.storage.onChanged.addListener(handleStorageChange);
      } catch {}
    }

    function deactivate() {
      if (!active) return;
      active = false;
      paused = false;
      if (scanTimer) {
        clearTimeout(scanTimer);
        scanTimer = null;
      }
      disconnectObservers();
      cleanupMarkup();
      hideTooltip(true);
      try {
        chrome.storage.onChanged.removeListener(handleStorageChange);
      } catch {}
    }

    function pause() {
      if (!active || paused) return;
      paused = true;
      disconnectObservers();
      document.body.classList.add("enlearn-paused");
    }

    function resume() {
      if (!active || !paused) return;
      paused = false;
      document.body.classList.remove("enlearn-paused");
      runInitialScan().catch(() => {});
      startObserving();
    }

    function handleStorageChange(changes) {
      if (!active) return;
      if (
        changes.scanThreshold ||
        changes.chunkGranularity ||
        changes.chunkIntensity ||
        changes.vocabLevel
      ) {
        cleanupMarkup();
        scheduleScan(50);
      }
    }

    async function init() {
      ensureStyles();
      ensureTooltip();
      document.addEventListener("mouseover", handleWordMouseOver);
      document.addEventListener("mouseout", handleWordMouseOut);
      let isActive = false;
      try {
        const state = await sendMessage({ type: "checkActive" });
        isActive = !!state.active;
      } catch {}
      if (isActive) await activate();

      try {
        chrome.runtime.onMessage.addListener((message) => {
          if (!message || !message.type) return;
          if (message.type === "activate") activate();
          else if (message.type === "deactivate") deactivate();
          else if (message.type === "pause") pause();
          else if (message.type === "resume") resume();
        });
      } catch {}
    }

    if (typeof window !== "undefined") {
      window.__baiitTestHooks = { runInitialScan };
    }

    init();
  } catch (e) {
    console.warn("[掰it]", e);
  }
})();

