// background.js

// Escucha eventos cuando se hace clic en el icono de la extensión
chrome.action.onClicked.addListener((tab) => {
    if (tab.id) {
      // Inyecta el script en la pestaña actual
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
      });
    }
  });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("alo");
  if (message.action === "linkedinLoaded") {
    // Automatically open the extension popup
    chrome.action.openPopup();
  }
});
  
  