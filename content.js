// Notify the background script to display a notification
chrome.runtime.sendMessage({ action: "showNotification" });

// Create and inject the custom "big title" into the page
document.addEventListener("DOMContentLoaded", () => {
  // Create the big title element
  const bigTitle = document.createElement("h1");
  bigTitle.innerText = "Welcome to LinkedIn!";
  bigTitle.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: rgb(0, 0, 255);
    font-size: 36px;
    font-family: Arial, sans-serif;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 20px;
    border-radius: 10px;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-weight: bold;
  `;

  // Add the big title to the page
  document.body.appendChild(bigTitle);

  // // Optional: Remove the big title after 10 seconds
  // setTimeout(() => {
  //   bigTitle.remove();
  // }, 10000);
});
