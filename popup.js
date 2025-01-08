document.getElementById('modify-html').addEventListener('click', () => {
  this.textContent = "Clicked!";
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        // Locate the element and change its text
        let targetElement = document.querySelector("body > div.logged-in.env-production.page-responsive.page-profile.mine > div.application-main > main > div > div > div.Layout-sidebar > div > div > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.js-profile-editable-names.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-name.vcard-fullname.d-block.overflow-hidden"); // Adjust selector as needed
        if (targetElement) {
          targetElement.textContent = "This is the new text!";
          console.log("XDDDDDDDDD")
        } else {
          alert("No element with the specified ID found!");
        }
      }
    });
  });
});
