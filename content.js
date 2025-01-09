// Notify the background script when LinkedIn is loaded
chrome.runtime.sendMessage({ action: "linkedinLoaded" });
document.addEventListener("DOMContentLoaded", () => {
    // Change all h1 elements to "Hello, World!"
    const headers = document.querySelectorAll("h1");
    headers.forEach(header => {
      header.textContent = "Hello, World!";
    });
  
    // Example: Add a new paragraph
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This paragraph was added by the Chrome extension.";
    document.body.appendChild(newParagraph);
  });
  