// Listen for messages from your popup.js or content scripts
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleExtension") {
    // Handle the logic for enabling or disabling your AI model here
    // You can communicate with your AI service and modify the behavior accordingly.
    const isExtensionEnabled = request.isEnabled; // You might pass this information from your popup.js

    // Example: Store the enabled/disabled status in Chrome's local storage
    chrome.storage.local.set({ "extensionEnabled": isExtensionEnabled }, function () {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      }
    });
  }
});

// Optionally, you can retrieve the extension's state from local storage
chrome.storage.local.get(["extensionEnabled"], function (result) {
  const isExtensionEnabled = result.extensionEnabled;
  // Implement logic here to set the extension's state based on the value retrieved
});
