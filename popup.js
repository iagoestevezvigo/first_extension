document.getElementById('modify-html').addEventListener('click', function () {
  // Correctly update the button text
  this.textContent = "Clicked!";
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      const currentTabUrl = tabs[0].url;
      console.log('Current Tab URL:', currentTabUrl);
      let textElement = document.getElementById('dynamic-text');
      
      // Update the text of the element
      if (textElement) {
        textElement.textContent = `Link: ${currentTabUrl}`;
      }


    } else {
      console.error('No active tab found!');
    }
  });
  
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        // Locate the element and change its text in the target tab's context
        let targetElement = document.querySelector("#ember797 > h1"); // Adjust selector as needed
        if (targetElement) {
          targetElement.textContent = "This is the new text!";
          console.log("Text updated successfully");
        } else {
          alert("No element with the specified ID found!");
        }
      }
    });
  });
});
