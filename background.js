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
  