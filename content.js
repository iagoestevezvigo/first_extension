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
  bigTitle.innerHTML = "We have a discount<br>for you!";
  bigTitle.style.cssText = `
    margin: 0;
    color: rgb(0, 0, 255);
    font-size: 12px;
  `;

   // Create the GIF element
   const gif = document.createElement("img");
   gif.src = "https://i.pinimg.com/originals/a6/39/2f/a6392f519c8e01fa9c44fe25b171038e.gif"; // Replace with your GIF URL
   gif.alt = "Animated GIF";
   gif.style.cssText = `
     width: 100px; /* Adjust the size as needed */
     height: auto;
     margin: 10px 0;
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
