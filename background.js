chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "setAmazonCookie") {
      const { url, name, value, domain, path } = message.data;
  
      // Log the parameters for debugging
      console.log("Received request to set cookie with parameters:", {
        url,
        name,
        value,
        domain,
        path,
      });
  
      // Validate inputs
      if (!url || !name || !value || !domain || !path) {
        console.error("Invalid parameters for setting cookie:", message.data);
        sendResponse({ success: false, error: "Invalid cookie parameters" });
        return;
      }
  
      chrome.cookies.set(
        {
          url,
          name,
          value,
          domain,
          path,
          secure: true,
          httpOnly: false,
          sameSite: lax,  // Ensure 'Lax' is valid or use 'no_restriction'
          expirationDate: Math.floor(Date.now() / 1000) + 3600, // 1 hour from now
        },
        (cookie) => {
          if (chrome.runtime.lastError) {
            console.error("Error setting cookie:", chrome.runtime.lastError.message);
            sendResponse({ success: false, error: chrome.runtime.lastError.message });
          } else if (!cookie) {
            console.error("Failed to set cookie. No cookie object returned.");
            sendResponse({ success: false, error: "No cookie object returned" });
          } else {
            console.log("Cookie updated successfully:", cookie);
            sendResponse({ success: true, cookie });
          }
        }
      );
  
      return true; // Indicates the response will be sent asynchronously
    }
  });
  