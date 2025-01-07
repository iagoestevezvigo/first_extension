document.getElementById("modify-html").addEventListener("click", () => {
    // Inject content script programmatically
    chrome.scripting.executeScript({
      target: { tabId: chrome.tabs.TAB_ID_NONE, allFrames: true },
      files: ["content.js"]
    });
  });
  