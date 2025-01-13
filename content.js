// Create and inject the custom "big title" into the page
if (document.title.indexOf("LinkedIn") != -1) {
  // Create the big title element
  console.log("Content script loaded and running on LinkedIn.");
  const bigTitle = document.createElement("h1");
  bigTitle.innerHTML = "Hello.<br>Iago!";
  
  console.log("JAAAAAAAAAAAMON");
  bigTitle.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px; /* Move to the right side of the page */
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

  // Remove the big title after 15 seconds
  setTimeout(() => {
    bigTitle.remove();
  }, 15000);
}
