document.getElementById('modify-html').addEventListener('click', () => {
  // Use the Chrome tabs API to execute the script on the active tab
  chrome.tabs.executeScript({
    code: `document.body.style.backgroundColor = "#ADD8E6";` // Change to your desired color
  });
});

  