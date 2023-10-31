document.getElementById('toggleExtension').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const tab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: toggleExtension,
      });
    });
  });
  
  function toggleExtension() {
    // Implement the logic to enable or disable your AI model
    // You may need to communicate with your AI model hosted elsewhere
    // and modify the webpage accordingly.
  }
