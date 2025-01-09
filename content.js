// Notify the background script to show a notification
chrome.runtime.sendMessage({ action: "showNotification" });
