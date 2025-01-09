// Notify the background script to display a notification
chrome.runtime.sendMessage({ action: "showNotification" });

// Create and inject the custom "popup" message into the page
document.addEventListener("DOMContentLoaded", () => {
  // Create the popup div
  console.log("????");
  const popup = document.createElement("div");
  popup.innerText = "HEY! YOU HAVE AN OFFER HERE!";
  popup.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff9900;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    text-align: center;
    font-weight: bold;
  `;
  document.body.appendChild(popup);

  // Optional: Remove the popup after 10 seconds
  setTimeout(() => {
    popup.remove();
  }, 10000);
});
