import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = __dirname.replace(/[/\\]tests$/, "");

function loadFile(relPath) {
  const abs = path.join(projectRoot, relPath);
  return fs.readFileSync(abs, "utf8");
}

async function main() {
  const html = loadFile("tests/fixtures/english-page.html");

  const dom = new JSDOM(html, {
    url: "https://example.com/docs/intro",
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true,
  });

  const { window } = dom;
  const { document } = window;

  global.window = window;
  global.document = document;
  global.Node = window.Node;

  // jsdom 里没有原生 IntersectionObserver，打一个最小 stub
  if (!("IntersectionObserver" in window)) {
    class FakeIntersectionObserver {
      constructor(callback) {
        this._callback = callback;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    window.IntersectionObserver = FakeIntersectionObserver;
    global.IntersectionObserver = FakeIntersectionObserver;
  }

  // Minimal chrome API stub used by content.js
  window.chrome = {
    runtime: {
      sendMessage(message, cb) {
        let response = {};
        switch (message.type) {
          case "getConfig":
            response = {
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
            break;
          case "checkActive":
            response = { active: true };
            break;
          case "QUERY_WORD":
          case "QUERY_WORDS":
            response = [];
            break;
          default:
            response = {};
        }
        if (typeof cb === "function") cb(response);
      },
      onMessage: {
        addListener() {},
      },
    },
    storage: {
      sync: {
        get(defaults) {
          return Promise.resolve(defaults);
        },
        set() {
          return Promise.resolve();
        },
      },
      local: {
        get(defaults) {
          return Promise.resolve(defaults);
        },
        set() {
          return Promise.resolve();
        },
      },
      session: {
        get(defaults) {
          return Promise.resolve(defaults);
        },
        set() {
          return Promise.resolve();
        },
      },
      onChanged: {
        addListener() {},
      },
    },
  };

  const contentScript = loadFile("src/content.js");
  window.eval(contentScript);

  // 等待初始化逻辑跑完
  await new Promise((resolve) => setTimeout(resolve, 50));

  if (!window.__baiitTestHooks || typeof window.__baiitTestHooks.runInitialScan !== "function") {
    console.error("Test hooks not found on window.__baiitTestHooks");
    process.exit(1);
  }

  await window.__baiitTestHooks.runInitialScan();

  const docRoot = document.querySelector(".theme-doc-markdown");
  if (!docRoot) {
    console.error("theme-doc-markdown not found in english-page.html");
    process.exit(1);
  }

  const listItems = Array.from(
    docRoot.querySelectorAll("ul li")
  );

  const processed = listItems.filter((li) => {
    return (
      li.classList.contains("enlearn-trigger-wrap") ||
      li.classList.contains("enlearn-original-hidden") ||
      li.querySelector(".enlearn-trigger") ||
      li.nextElementSibling?.classList?.contains("enlearn-chunked")
    );
  });

  const withWords = listItems.filter((li) => li.querySelector(".enlearn-word"));

  if (processed.length === 0) {
    console.error(
      "No list items in .theme-doc-markdown were recognized by content.js (no trigger/hidden/chunked state)."
    );
    process.exit(1);
  }

  if (withWords.length === 0) {
    console.error(
      "No list items in .theme-doc-markdown have word recognition (.enlearn-word). Focus is on 识别单词."
    );
    process.exit(1);
  }

  console.log(
    `OK: ${processed.length} list items recognized, ${withWords.length} with word annotation (.enlearn-word).`
  );
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

