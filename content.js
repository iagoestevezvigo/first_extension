
  // Button to look for the referals is clicked. TODO: SHOULD BE MOVED TO ANOTHER FILE
  function search_referals() {
    console.log("Button clicked! Hello from the new function.");
  }
// Create and inject the custom "big title" into the page
if (document.title.startsWith("Amazon") != -1) {
  // Log to the console
  console.log("Content script loaded and running on LinkedIn.");
  
  // Create a container for the text and button
  const container = document.createElement("div");
  container.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 20px;
    border-radius: 10px;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-family: Arial, sans-serif;
    font-weight: bold;
  `;

  // Create the big title element
  const bigTitle = document.createElement("h1");
  bigTitle.innerHTML = "Hello.<br>Iago!";
  bigTitle.style.cssText = `
    margin: 0;
    color: rgb(0, 0, 255);
    font-size: 36px;
  `;

  // Create the button
  const button = document.createElement("button");
  button.innerText = "Click Me!";
  button.style.cssText = `
    margin-top: 10px;
    color: white;
    background-color: blue;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  `;

  // Attach the function to the button's click event
  button.addEventListener("click", search_referals);

  // Add the title and button to the container
  container.appendChild(bigTitle);
  container.appendChild(button);

  // Add the container to the page
  document.body.appendChild(container);

  // Remove the container after 15 seconds
  setTimeout(() => {
    container.remove();
  }, 15000);
}
