// Function to send a message to the background script
function search_referals() {
  console.log("Button clicked! Hello from the new function.");

  chrome.runtime.sendMessage(
    {
      action: "setAmazonCookie",
      data: {
        url: "https://www.amazon.es/",
        name: "amzn_assoc_tag",
        value: "IAGO-TAG",
        domain: ".amazon.es",
        path: "/"
      }
    },
    (response) => {
      if (response && response.success) {
        console.log("Cookie updated successfully:", response.cookie);
      } else {
        console.error("Failed to update cookie:", response?.error);
      }
    }
  );
}
// Create and inject the custom "big title" into the page
if (document.title.startsWith("Amazon") != -1) {
  // Log to the console
  console.log("Content script loaded and running on LinkedIn.");
  
  // Create a container for the text, GIF, and button
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
    display: flex;
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center align items horizontally */
    gap: 10px; /* Add spacing between items */
  `;

  // Create the big title element
  const bigTitle = document.createElement("h1");
  bigTitle.innerHTML = "We have a discount<br>for you!";
  bigTitle.style.cssText = `
    margin: 0;
    color: rgb(0, 0, 255);
    font-size: 16px;
  `;

  // Create the GIF element
  const gif = document.createElement("img");
  gif.src = "https://i.pinimg.com/originals/a4/2b/fd/a42bfd8ba75298024fa602be270b68b4.gif"; // Replace with your GIF URL
  gif.alt = "Animated GIF";
  gif.style.cssText = `
    width: 100px; /* Adjust the size as needed */
    height: auto;
  `;

  // Create the button
  const button = document.createElement("button");
  button.innerText = "Click Me!";
  button.style.cssText = `
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

  // Add the title, GIF, and button to the container in the desired order
  container.appendChild(bigTitle);
  container.appendChild(gif); // Add the GIF below the title
  container.appendChild(button); // Add the button below the GIF

  // Add the container to the page
  document.body.appendChild(container);

  // Remove the container after 15 seconds
  setTimeout(() => {
    container.remove();
  }, 15000);
}
