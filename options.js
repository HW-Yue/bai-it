"use strict";
(function () {
  const app = document.getElementById("app");
  if (!app) return;

  function send(type, payload = {}) {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ type, ...payload }, (r) => {
        if (chrome.runtime.lastError) resolve(null);
        else resolve(r);
      });
    });
  }

  function toast(text) {
    const el = document.createElement("div");
    el.className = "vocab-toast";
    el.textContent = text;
    el.style.cssText =
      "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.85);color:#fff;padding:10px 20px;border-radius:8px;font-size:13px;z-index:9999;animation:fadeIn 0.2s ease";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }

  function render() {
    const wrap = document.createElement("div");
    wrap.className = "vocab-options";
    wrap.style.cssText = "padding:24px;max-width:640px;margin:0 auto;position:relative;z-index:1";

    const title = document.createElement("h1");
    title.className = "section-title";
    title.style.cssText = "font-size:18px;margin-bottom:20px;color:#fafafa";
    title.textContent = "词库管理";
    wrap.appendChild(title);

    const createRow = document.createElement("div");
    createRow.className = "glass";
    createRow.style.cssText = "padding:16px;margin-bottom:16px";
    const createLabel = document.createElement("label");
    createLabel.textContent = "创建新词库 ";
    createLabel.style.marginRight = "8px";
    const createInput = document.createElement("input");
    createInput.placeholder = "词库名称";
    createInput.style.cssText = "padding:8px 12px;border-radius:6px;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.2);color:#fff;width:200px;margin-right:8px";
    const createBtn = document.createElement("button");
    createBtn.textContent = "创建";
    createBtn.style.cssText = "padding:8px 16px;border-radius:6px;border:none;background:#ef4444;color:#fff;cursor:pointer";
    createBtn.onclick = async () => {
      const name = createInput.value.trim() || "未命名词库";
      const r = await send("createVocabLib", { name });
      if (r && r.id) {
        createInput.value = "";
        toast("已创建词库：" + r.name);
        render();
      }
    };
    createRow.appendChild(createLabel);
    createRow.appendChild(createInput);
    createRow.appendChild(createBtn);
    wrap.appendChild(createRow);

    const importRow = document.createElement("div");
    importRow.className = "glass";
    importRow.style.cssText = "padding:16px;margin-bottom:16px";
    const importBtn = document.createElement("button");
    importBtn.textContent = "导入词库 (JSON 文件)";
    importBtn.style.cssText = "padding:8px 16px;border-radius:6px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:#fca5a5;cursor:pointer";
    const importInput = document.createElement("input");
    importInput.type = "file";
    importInput.accept = ".json,application/json";
    importInput.style.display = "none";
    importInput.onchange = async (e) => {
      const f = e.target.files?.[0];
      if (!f) return;
      const text = await f.text();
      const r = await send("importVocabLib", { jsonString: text, autoLoad: true });
      e.target.value = "";
      if (r && r.ok) {
        toast("已导入：" + (r.name || "词库"));
        render();
      } else {
        toast(r?.error || "导入失败");
      }
    };
    importBtn.onclick = () => importInput.click();
    importRow.appendChild(importBtn);
    wrap.appendChild(importRow);

    const libListPromise = send("getVocabLibs");
    const loadedPromise = send("getVocabLoadedIds");

    Promise.all([libListPromise, loadedPromise]).then(([libRes, loadedRes]) => {
      const libs = (libRes && libRes.libs) || [];
      const loadedIds = (loadedRes && loadedRes.loadedIds) || [];

      const loadSection = document.createElement("div");
      loadSection.className = "glass";
      loadSection.style.cssText = "padding:16px;margin-bottom:16px";
      const loadTitle = document.createElement("div");
      loadTitle.style.cssText = "margin-bottom:12px;font-weight:600;color:rgba(255,255,255,0.9)";
      loadTitle.textContent = "选择要加载的词库（勾选后参与标注）";
      loadSection.appendChild(loadTitle);
      libs.forEach((lib) => {
        const label = document.createElement("label");
        label.style.cssText = "display:flex;align-items:center;gap:8px;margin-bottom:6px;cursor:pointer";
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = loadedIds.includes(lib.id);
        cb.dataset.libId = lib.id;
        const span = document.createElement("span");
        span.textContent = lib.name + " (" + lib.id.slice(0, 8) + ")";
        label.appendChild(cb);
        label.appendChild(span);
        loadSection.appendChild(label);
      });
      const saveLoadBtn = document.createElement("button");
      saveLoadBtn.textContent = "保存加载设置";
      saveLoadBtn.style.cssText = "margin-top:12px;padding:8px 16px;border-radius:6px;border:none;background:#ef4444;color:#fff;cursor:pointer";
      saveLoadBtn.onclick = async () => {
        const ids = [...loadSection.querySelectorAll("input[type=checkbox]:checked")].map((c) => c.dataset.libId);
        await send("setLoadedLibs", { loadedIds: ids });
        toast("已保存");
      };
      loadSection.appendChild(saveLoadBtn);
      wrap.appendChild(loadSection);

      const addSection = document.createElement("div");
      addSection.className = "glass";
      addSection.style.cssText = "padding:16px;margin-bottom:16px";
      const addTitle = document.createElement("div");
      addTitle.style.cssText = "margin-bottom:12px;font-weight:600;color:rgba(255,255,255,0.9)";
      addTitle.textContent = "添加新词";
      addSection.appendChild(addTitle);
      const selectLib = document.createElement("select");
      selectLib.style.cssText = "padding:8px 12px;border-radius:6px;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.2);color:#fff;margin-right:8px;margin-bottom:8px";
      libs.forEach((lib) => {
        const opt = document.createElement("option");
        opt.value = lib.id;
        opt.textContent = lib.name;
        selectLib.appendChild(opt);
      });
      const wordInput = document.createElement("input");
      wordInput.placeholder = "单词";
      wordInput.style.cssText = "padding:8px 12px;border-radius:6px;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.2);color:#fff;width:140px;margin-right:8px;margin-bottom:8px";
      const defInput = document.createElement("input");
      defInput.placeholder = "解释";
      defInput.style.cssText = "padding:8px 12px;border-radius:6px;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.2);color:#fff;flex:1;min-width:180px;margin-right:8px;margin-bottom:8px";
      const variantsInput = document.createElement("input");
      variantsInput.placeholder = "词形变体（多个用逗号分隔，如 deadlocks, deadlocked）";
      variantsInput.style.cssText = "padding:8px 12px;border-radius:6px;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.2);color:#fff;width:100%;margin-bottom:8px;margin-top:4px";
      const addWordBtn = document.createElement("button");
      addWordBtn.textContent = "添加";
      addWordBtn.style.cssText = "padding:8px 16px;border-radius:6px;border:none;background:#ef4444;color:#fff;cursor:pointer";
      addWordBtn.onclick = async () => {
        const libId = selectLib.value;
        const word = wordInput.value.trim();
        const definition = defInput.value.trim();
        const variantsStr = variantsInput.value.trim();
        if (!libId || !word) {
          toast("请选择词库并输入单词");
          return;
        }
        const dataRes = await send("getVocabLibData", { libId });
        const data = dataRes?.ok ? dataRes.data : null;
        const has = data && data.levels && data.levels[word.toLowerCase()];
        if (has) {
          if (!confirm("该词库中已有此词，是否覆盖？")) return;
        }
        const r = await send("addWordToVocabLib", { libId, word, definition });
        if (!r || !r.ok) {
          toast(r?.error || "添加失败");
          return;
        }
        const variants = variantsStr ? variantsStr.replace(/\uFF0C/g, ",").split(",").map((s) => s.trim()).filter(Boolean) : [];
        for (const v of variants) {
          if (v.toLowerCase() === word.toLowerCase()) continue;
          await send("addWordToVocabLib", { libId, word: v, definition: "", variantOf: word });
        }
        wordInput.value = "";
        defInput.value = "";
        variantsInput.value = "";
        if (r.synced) toast("已同步至磁盘");
        else toast(variants.length ? "已添加单词及变体" : "已添加");
      };
      const addRow = document.createElement("div");
      addRow.style.display = "flex";
      addRow.style.flexWrap = "wrap";
      addRow.style.alignItems = "center";
      addRow.appendChild(selectLib);
      addRow.appendChild(wordInput);
      addRow.appendChild(defInput);
      addRow.appendChild(addWordBtn);
      addSection.appendChild(addRow);
      const variantsRow = document.createElement("div");
      variantsRow.style.width = "100%";
      const variantsLabel = document.createElement("label");
      variantsLabel.style.cssText = "display:block;font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:4px";
      variantsLabel.textContent = "词形变体（可选）";
      variantsRow.appendChild(variantsLabel);
      variantsRow.appendChild(variantsInput);
      addSection.appendChild(variantsRow);
      wrap.appendChild(addSection);

      const exportSection = document.createElement("div");
      exportSection.className = "glass";
      exportSection.style.cssText = "padding:16px;margin-bottom:16px";
      const exportTitle = document.createElement("div");
      exportTitle.style.cssText = "margin-bottom:12px;font-weight:600;color:rgba(255,255,255,0.9)";
      exportTitle.textContent = "导出词库";
      exportSection.appendChild(exportTitle);
      const exportSelect = document.createElement("select");
      exportSelect.style.cssText = "padding:8px 12px;border-radius:6px;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.2);color:#fff;margin-right:8px";
      libs.forEach((lib) => {
        const opt = document.createElement("option");
        opt.value = lib.id;
        opt.textContent = lib.name;
        exportSelect.appendChild(opt);
      });
      const exportBtn = document.createElement("button");
      exportBtn.textContent = "导出为 JSON";
      exportBtn.style.cssText = "padding:8px 16px;border-radius:6px;border:none;background:#ef4444;color:#fff;cursor:pointer";
      exportBtn.onclick = async () => {
        const libId = exportSelect.value;
        const r = await send("exportVocabLib", { libId });
        if (r && r.ok && r.json) {
          const a = document.createElement("a");
          a.href = "data:application/json;charset=utf-8," + encodeURIComponent(r.json);
          a.download = (libs.find((l) => l.id === libId)?.name || "词库") + ".json";
          a.click();
          toast("已导出");
        } else {
          toast("导出失败");
        }
      };
      exportSection.appendChild(exportSelect);
      exportSection.appendChild(exportBtn);
      wrap.appendChild(exportSection);
    });

    app.textContent = "";
    app.appendChild(wrap);
  }

  render();
})();
