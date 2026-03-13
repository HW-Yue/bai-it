// floating-ball.js
// 在每个页面右侧中部插入一个使用 Shadow DOM 的悬浮球，
// 点击后展开「添加新词」面板（逻辑复用 options.js 里的接口）。

(() => {
  try {
    if (typeof window === "undefined" || window !== window.top) return;

    const HOST_ID = "__baiit_floating_ball_root__";
    if (document.getElementById(HOST_ID)) return;

    // 与 options.js 一致的消息调用封装
    function send(type, payload = {}) {
      return new Promise((resolve) => {
        chrome.runtime.sendMessage({ type, ...payload }, (res) => {
          if (chrome.runtime.lastError) resolve(null);
          else resolve(res);
        });
      });
    }

    // 创建挂载点 + Shadow DOM
    const host = document.createElement("div");
    host.id = HOST_ID;
    (document.body || document.documentElement).appendChild(host);
    const shadow = host.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      :host {
        all: initial;
      }

      .fb-wrapper {
        position: fixed;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        z-index: 2147483647;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      .fb-ball {
        position: relative;
        width: 32px;
        height: 32px;
        border-radius: 999px;
        background: #f5c6d0;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 12px rgba(200, 120, 140, 0.25);
        cursor: pointer;
        user-select: none;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.5px;
        transition: background 0.18s ease, transform 0.15s ease, box-shadow 0.15s ease;
      }
      .fb-ball .fb-ball-star {
        position: absolute;
        top: 4px;
        left: 5px;
        font-size: 7px;
        opacity: 0.95;
        line-height: 1;
      }
      .fb-ball .fb-ball-char {
        font-size: 13px;
        margin-top: 0;
      }
      .fb-ball:hover {
        background: #f0b4c2;
        transform: translateY(-1px);
        box-shadow: 0 4px 16px rgba(200, 120, 140, 0.35);
      }

      .fb-panel {
        position: absolute;
        top: 50%;
        right: 60px;
        transform: translateY(-50%);
        min-width: 320px;
        max-width: 380px;
        padding: 16px 18px 14px;
        border-radius: 16px;
        background: #020617;
        color: #e5e7eb;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        font-size: 13px;
        line-height: 1.6;
        display: none;
        border: 1px solid rgba(148, 163, 184, 0.2);
      }

      .fb-panel.open {
        display: block;
      }

      .fb-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }

      .fb-title {
        font-size: 14px;
        font-weight: 600;
        color: #f9fafb;
      }

      .fb-subtitle {
        font-size: 11px;
        color: rgba(148, 163, 184, 0.9);
        margin-bottom: 10px;
      }

      .fb-close {
        border: none;
        background: transparent;
        color: rgba(148, 163, 184, 0.9);
        cursor: pointer;
        font-size: 14px;
        padding: 0;
      }

      .fb-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }

      .fb-select,
      .fb-input {
        padding: 7px 10px;
        border-radius: 8px;
        border: 1px solid rgba(148, 163, 184, 0.35);
        background: rgba(15, 23, 42, 0.9);
        color: #e5e7eb;
        font-size: 13px;
        outline: none;
        box-sizing: border-box;
      }

      .fb-select {
        min-width: 120px;
      }

      .fb-input.word {
        width: 110px;
      }

      .fb-input.def {
        flex: 1;
        min-width: 120px;
      }

      .fb-input.variants {
        width: 100%;
        margin-top: 4px;
      }

      .fb-input::placeholder {
        color: rgba(148, 163, 184, 0.7);
      }

      .fb-btn {
        padding: 7px 16px;
        border-radius: 999px;
        border: none;
        background: #ef4444;
        color: #fff;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
        transition: background 0.18s ease, transform 0.1s ease, box-shadow 0.1s ease;
      }

      .fb-btn:hover {
        background: #f97373;
        box-shadow: 0 8px 18px rgba(239, 68, 68, 0.4);
        transform: translateY(-1px);
      }

      .fb-label {
        font-size: 11px;
        color: rgba(148, 163, 184, 0.9);
        display: block;
        margin-bottom: 4px;
      }

      .fb-toast {
        position: fixed;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        background: rgba(15, 23, 42, 0.95);
        color: #f9fafb;
        padding: 8px 14px;
        border-radius: 999px;
        font-size: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        z-index: 2147483647;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease;
      }

      .fb-toast.show {
        opacity: 1;
      }

      @media (prefers-color-scheme: light) {
        .fb-panel {
          background: #ffffff;
          color: #0f172a;
          border-color: rgba(148, 163, 184, 0.3);
        }

        .fb-title {
          color: #0f172a;
        }

        .fb-input,
        .fb-select {
          background: #f8fafc;
          color: #0f172a;
        }
      }
    `;

    const wrapper = document.createElement("div");
    wrapper.className = "fb-wrapper";

    const ball = document.createElement("div");
    ball.className = "fb-ball";
    const ballStar = document.createElement("span");
    ballStar.className = "fb-ball-star";
    ballStar.textContent = "✦";
    const ballChar = document.createElement("span");
    ballChar.className = "fb-ball-char";
    ballChar.textContent = "词";
    ball.appendChild(ballStar);
    ball.appendChild(ballChar);

    const panel = document.createElement("div");
    panel.className = "fb-panel";

    const header = document.createElement("div");
    header.className = "fb-header";
    const title = document.createElement("div");
    title.className = "fb-title";
    title.textContent = "添加新词";
    const closeBtn = document.createElement("button");
    closeBtn.className = "fb-close";
    closeBtn.textContent = "×";
    header.appendChild(title);
    header.appendChild(closeBtn);

    const subtitle = document.createElement("div");
    subtitle.className = "fb-subtitle";
    subtitle.textContent = "直接写入你在 options 里选择的词库。";

    const libSelect = document.createElement("select");
    libSelect.className = "fb-select";

    const wordInput = document.createElement("input");
    wordInput.className = "fb-input word";
    wordInput.placeholder = "单词";

    const defInput = document.createElement("input");
    defInput.className = "fb-input def";
    defInput.placeholder = "解释";

    const variantsLabel = document.createElement("label");
    variantsLabel.className = "fb-label";
    variantsLabel.textContent = "词形变体（可选）";

    const variantsInput = document.createElement("input");
    variantsInput.className = "fb-input variants";
    variantsInput.placeholder = "多个用逗号分隔，如 deadlocks, deadlocked";

    const addBtn = document.createElement("button");
    addBtn.className = "fb-btn";
    addBtn.textContent = "添加";

    const row1 = document.createElement("div");
    row1.className = "fb-row";
    row1.appendChild(libSelect);
    row1.appendChild(wordInput);
    row1.appendChild(defInput);

    const row2 = document.createElement("div");
    row2.className = "fb-row";
    row2.style.flexDirection = "column";
    row2.style.alignItems = "stretch";
    const variantsRowTop = document.createElement("div");
    variantsRowTop.style.width = "100%";
    variantsRowTop.appendChild(variantsLabel);
    variantsRowTop.appendChild(variantsInput);
    row2.appendChild(variantsRowTop);

    const row3 = document.createElement("div");
    row3.className = "fb-row";
    row3.style.justifyContent = "flex-end";
    row3.appendChild(addBtn);

    panel.appendChild(header);
    panel.appendChild(subtitle);
    panel.appendChild(row1);
    panel.appendChild(row2);
    panel.appendChild(row3);

    wrapper.appendChild(ball);
    wrapper.appendChild(panel);

    const toast = document.createElement("div");
    toast.className = "fb-toast";
    toast.textContent = "";

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    shadow.appendChild(toast);

    function showToast(msg) {
      toast.textContent = msg;
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2000);
    }

    async function loadLibs() {
      const res = await send("getVocabLibs");
      const libs = (res && res.libs) || [];
      libSelect.textContent = "";
      libs.forEach((lib) => {
        const opt = document.createElement("option");
        opt.value = lib.id;
        opt.textContent = lib.name;
        libSelect.appendChild(opt);
      });
    }

    async function handleAdd() {
      const libId = libSelect.value;
      const word = wordInput.value.trim();
      const definition = defInput.value.trim();
      const variantsStr = variantsInput.value.trim();

      if (!libId || !word) {
        showToast("请选择词库并输入单词");
        return;
      }

      const dataRes = await send("getVocabLibData", { libId });
      const data = dataRes && dataRes.ok ? dataRes.data : null;
      const has = data && data.levels && data.levels[word.toLowerCase()];
      const addMain = await send("addWordToVocabLib", {
        libId,
        word,
        definition,
      });
      if (!addMain || !addMain.ok) {
        showToast(addMain?.error || "添加失败");
        return;
      }

      const variants = variantsStr
        ? variantsStr
            .replace(/，/g, ",")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        : [];

      for (const v of variants) {
        if (v.toLowerCase() === word.toLowerCase()) continue;
        await send("addWordToVocabLib", {
          libId,
          word: v,
          definition: "",
          variantOf: word,
        });
      }

      wordInput.value = "";
      defInput.value = "";
      variantsInput.value = "";

      if (addMain.synced) {
        showToast("已添加并同步到词库");
      } else if (variants.length) {
        showToast("已添加单词及变体");
      } else if (has) {
        showToast("已覆盖原有单词");
      } else {
        showToast("已添加");
      }
    }

    ball.addEventListener("click", (evt) => {
      evt.stopPropagation();
      const isOpen = panel.classList.contains("open");
      if (!isOpen) {
        loadLibs().catch(() => {});
      }
      panel.classList.toggle("open");
    });

    closeBtn.addEventListener("click", () => {
      panel.classList.remove("open");
    });

    addBtn.addEventListener("click", () => {
      handleAdd().catch(() => {
        showToast("添加失败");
      });
    });

    wordInput.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter") {
        if (evt.isComposing) return; // 中文输入法确认候选时不要提交
        evt.preventDefault();
        handleAdd().catch(() => showToast("添加失败"));
      }
    });

    variantsInput.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter") {
        if (evt.isComposing) return; // 中文输入法确认候选时不要提交
        evt.preventDefault();
        handleAdd().catch(() => showToast("添加失败"));
      }
    });

    // 只有点击在「悬浮球+面板」之外才关闭
    document.addEventListener("click", (evt) => {
      if (!host.contains(evt.target)) {
        panel.classList.remove("open");
      }
    });
  } catch (e) {
    console.warn("[掰it floating ball]", e);
  }
})();

// floating-ball.js
// 在每个页面右侧中部插入一个使用 Shadow DOM 的悬浮球，
// 点击后展开「添加新词」面板（逻辑复用 options.js 里的接口）。

(() => {
  try {
    if (typeof window === "undefined" || window !== window.top) return;

    const HOST_ID = "__baiit_floating_ball_root__";
    if (document.getElementById(HOST_ID)) return;

    // 与 options.js 一致的消息调用封装
    function send(type, payload = {}) {
      return new Promise((resolve) => {
        chrome.runtime.sendMessage({ type, ...payload }, (res) => {
          if (chrome.runtime.lastError) resolve(null);
          else resolve(res);
        });
      });
    }

    // 创建挂载点 + Shadow DOM
    const host = document.createElement("div");
    host.id = HOST_ID;
    (document.body || document.documentElement).appendChild(host);
    const shadow = host.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      :host { all: initial; }

      .fb-wrapper {
        position: fixed;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        z-index: 2147483647;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      .fb-ball {
        position: relative;
        width: 32px;
        height: 32px;
        border-radius: 999px;
        background: #f5c6d0;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 12px rgba(200, 120, 140, 0.25);
        cursor: pointer;
        user-select: none;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.5px;
        transition: background 0.18s ease, transform 0.15s ease, box-shadow 0.15s ease;
      }
      .fb-ball .fb-ball-star {
        position: absolute;
        top: 4px;
        left: 5px;
        font-size: 7px;
        opacity: 0.95;
        line-height: 1;
      }
      .fb-ball .fb-ball-char {
        font-size: 13px;
        margin-top: 0;
      }
      .fb-ball:hover {
        background: #f0b4c2;
        transform: translateY(-1px);
        box-shadow: 0 4px 16px rgba(200, 120, 140, 0.35);
      }

      /* 卡片：磨砂玻璃 + 12px 圆角 + shadow-xl */
      .fb-panel {
        position: absolute;
        top: 50%;
        right: 60px;
        transform: translateY(-50%);
        width: 100%;
        max-width: 400px;
        padding: 18px 20px 16px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        color: #0f172a;
        font-size: 13px;
        line-height: 1.5;
        display: none;
        border: 1px solid rgba(0, 0, 0, 0.06);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
      }
      .fb-panel.open { display: block; }

      .fb-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 14px;
      }
      .fb-title {
        font-size: 15px;
        font-weight: 600;
        color: #0f172a;
      }
      .fb-close {
        border: none;
        background: transparent;
        color: #64748b;
        cursor: pointer;
        font-size: 18px;
        line-height: 1;
        padding: 0 2px;
        transition: color 0.15s;
      }
      .fb-close:hover { color: #0f172a; }

      /* 两栏：词库 1 : 单词 2 */
      .fb-row-first {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 10px;
        margin-bottom: 10px;
      }
      .fb-select, .fb-input, .fb-textarea {
        width: 100%;
        padding: 8px 12px;
        border-radius: 8px;
        border: none;
        background: #f1f5f9;
        color: #0f172a;
        font-size: 13px;
        font-family: inherit;
        outline: none;
        transition: box-shadow 0.15s ease, background 0.15s ease;
      }
      .fb-select:focus, .fb-input:focus, .fb-textarea:focus {
        background: #fff;
        box-shadow: 0 0 0 2px #3b82f6;
      }
      .fb-select { cursor: pointer; }
      .fb-textarea {
        min-height: 72px;
        resize: vertical;
        margin-bottom: 10px;
      }
      .fb-input::placeholder, .fb-textarea::placeholder {
        color: #94a3b8;
      }

      .fb-label {
        display: block;
        font-size: 12px;
        color: #64748b;
        margin-bottom: 4px;
      }
      .fb-hint {
        font-size: 11px;
        color: #94a3b8;
        margin-top: 4px;
      }

      /* 底部：添加按钮 + 快捷键提示 */
      .fb-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 14px;
      }
      .fb-shortcut {
        font-size: 11px;
        color: #94a3b8;
      }
      .fb-btn {
        padding: 8px 18px;
        border-radius: 999px;
        border: none;
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 45%, #0f172a 100%);
        color: #fff;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
      }
      .fb-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 18px rgba(37, 99, 235, 0.4);
      }
      .fb-btn:active { transform: translateY(0); }

      .fb-toast {
        position: fixed;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        background: rgba(15, 23, 42, 0.92);
        color: #f9fafb;
        padding: 8px 14px;
        border-radius: 8px;
        font-size: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 2147483647;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease;
      }
      .fb-toast.show { opacity: 1; }

      /* 暗色页面下保持可读 */
      @media (prefers-color-scheme: dark) {
        .fb-panel {
          background: rgba(30, 41, 59, 0.9);
          border-color: rgba(255, 255, 255, 0.08);
          color: #e2e8f0;
        }
        .fb-select, .fb-input, .fb-textarea {
          background: rgba(15, 23, 42, 0.6);
          color: #e2e8f0;
        }
        .fb-select:focus, .fb-input:focus, .fb-textarea:focus {
          background: rgba(30, 41, 59, 0.95);
          box-shadow: 0 0 0 2px #3b82f6;
        }
        .fb-title { color: #f1f5f9; }
        .fb-close { color: #94a3b8; }
        .fb-close:hover { color: #f1f5f9; }
        .fb-label, .fb-hint { color: #94a3b8; }
      }
    `;

    const wrapper = document.createElement("div");
    wrapper.className = "fb-wrapper";

    const ball = document.createElement("div");
    ball.className = "fb-ball";
    const ballStar = document.createElement("span");
    ballStar.className = "fb-ball-star";
    ballStar.textContent = "✦";
    const ballChar = document.createElement("span");
    ballChar.className = "fb-ball-char";
    ballChar.textContent = "词";
    ball.appendChild(ballStar);
    ball.appendChild(ballChar);

    const panel = document.createElement("div");
    panel.className = "fb-panel";

    const header = document.createElement("div");
    header.className = "fb-header";
    const title = document.createElement("div");
    title.className = "fb-title";
    title.textContent = "添加新词";
    const closeBtn = document.createElement("button");
    closeBtn.className = "fb-close";
    closeBtn.textContent = "×";
    header.appendChild(title);
    header.appendChild(closeBtn);

    const libSelect = document.createElement("select");
    libSelect.className = "fb-select";

    const wordInput = document.createElement("input");
    wordInput.className = "fb-input";
    wordInput.placeholder = "单词";

    const rowFirst = document.createElement("div");
    rowFirst.className = "fb-row-first";
    rowFirst.appendChild(libSelect);
    rowFirst.appendChild(wordInput);

    const defInput = document.createElement("textarea");
    defInput.className = "fb-textarea";
    defInput.placeholder = "解释（支持换行）";

    const variantsLabel = document.createElement("label");
    variantsLabel.className = "fb-label";
    variantsLabel.textContent = "词形变体（可选）";

    const variantsInput = document.createElement("input");
    variantsInput.className = "fb-input";
    variantsInput.placeholder = "多个用逗号分隔";

    const variantsHint = document.createElement("div");
    variantsHint.className = "fb-hint";
    variantsHint.textContent = "如 deadlocks, deadlocked";

    const footer = document.createElement("div");
    footer.className = "fb-footer";
    const shortcutHint = document.createElement("span");
    shortcutHint.className = "fb-shortcut";
    shortcutHint.textContent = "Ctrl + Enter";
    const addBtn = document.createElement("button");
    addBtn.className = "fb-btn";
    addBtn.textContent = "添加";
    footer.appendChild(shortcutHint);
    footer.appendChild(addBtn);

    panel.appendChild(header);
    panel.appendChild(rowFirst);
    panel.appendChild(defInput);
    panel.appendChild(variantsLabel);
    panel.appendChild(variantsInput);
    panel.appendChild(variantsHint);
    panel.appendChild(footer);

    wrapper.appendChild(ball);
    wrapper.appendChild(panel);

    const toast = document.createElement("div");
    toast.className = "fb-toast";
    toast.textContent = "";

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    shadow.appendChild(toast);

    function showToast(msg) {
      toast.textContent = msg;
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2000);
    }

    async function loadLibs() {
      const res = await send("getVocabLibs");
      const libs = (res && res.libs) || [];
      libSelect.textContent = "";
      libs.forEach((lib) => {
        const opt = document.createElement("option");
        opt.value = lib.id;
        opt.textContent = lib.name;
        libSelect.appendChild(opt);
      });
    }

    async function handleAdd() {
      const libId = libSelect.value;
      const word = wordInput.value.trim();
      const definition = defInput.value.trim();
      const variantsStr = variantsInput.value.trim();

      if (!libId || !word) {
        showToast("请选择词库并输入单词");
        return;
      }

      const dataRes = await send("getVocabLibData", { libId });
      const data = dataRes && dataRes.ok ? dataRes.data : null;
      const has = data && data.levels && data.levels[word.toLowerCase()];
      // 简化交互：直接覆盖，无 confirm
      const addMain = await send("addWordToVocabLib", {
        libId,
        word,
        definition,
      });
      if (!addMain || !addMain.ok) {
        showToast(addMain?.error || "添加失败");
        return;
      }

      const variants = variantsStr
        ? variantsStr
            .replace(/，/g, ",")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        : [];

      for (const v of variants) {
        if (v.toLowerCase() === word.toLowerCase()) continue;
        await send("addWordToVocabLib", {
          libId,
          word: v,
          definition: "",
          variantOf: word,
        });
      }

      wordInput.value = "";
      defInput.value = "";
      variantsInput.value = "";

      if (addMain.synced) {
        showToast("已添加并同步到词库");
      } else if (variants.length) {
        showToast("已添加单词及变体");
      } else if (has) {
        showToast("已覆盖原有单词");
      } else {
        showToast("已添加");
      }
    }

    ball.addEventListener("click", (evt) => {
      evt.stopPropagation();
      const isOpen = panel.classList.contains("open");
      if (!isOpen) {
        loadLibs().catch(() => {});
        panel.classList.add("open");
        requestAnimationFrame(() => {
          wordInput.focus();
        });
      } else {
        panel.classList.remove("open");
      }
    });

    closeBtn.addEventListener("click", () => {
      panel.classList.remove("open");
    });

    addBtn.addEventListener("click", () => {
      handleAdd().catch(() => {
        showToast("添加失败");
      });
    });

    wordInput.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter") {
        if (evt.isComposing) return; // 中文输入法确认候选时不要提交
        evt.preventDefault();
        handleAdd().catch(() => showToast("添加失败"));
      }
    });

    variantsInput.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter") {
        if (evt.isComposing) return; // 中文输入法确认候选时不要提交
        evt.preventDefault();
        handleAdd().catch(() => showToast("添加失败"));
      }
    });

    /* Ctrl+Enter 任意焦点下提交；解释框内 Enter 保留换行 */
    panel.addEventListener("keydown", (evt) => {
      if (evt.ctrlKey && evt.key === "Enter") {
        if (evt.isComposing) return; // 中文输入法下不误触提交
        evt.preventDefault();
        handleAdd().catch(() => showToast("添加失败"));
      }
    });

    // 只有点击在「悬浮球+面板」之外才关闭（host 包含整个 Shadow DOM）
    document.addEventListener("click", (evt) => {
      if (!host.contains(evt.target)) {
        panel.classList.remove("open");
      }
    });
  } catch (e) {
    // 静默失败，避免影响宿主页面
    console.warn("[掰it floating ball]", e);
  }
})();

