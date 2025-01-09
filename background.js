// Listen for messages from content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "showNotification") {
    // Create a Chrome notification
    chrome.notifications.create({
      type: "basic",
      iconUrl: "logo.png",
      title: "LinkedIn Reminder",
      message: "Don't forget to open the extension for LinkedIn enhancements!"
    });
  }
});
