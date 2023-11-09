// popup.js

document.getElementById('analyzeButton').addEventListener('click', () => {
  const videoInput = document.getElementById('videoInput');
  const resultDisplay = document.getElementById('resultDisplay');

  const selectedFile = videoInput.files[0];

  if (selectedFile) {
    // You have the selected video file here (selectedFile).
    // You can choose to send this file for analysis in the background script.
    
    // Example: Send the selected file to the background script
    chrome.runtime.sendMessage({ action: 'analyzeUserVideo', videoFile: selectedFile }, (response) => {
      resultDisplay.textContent = `Analysis Result: ${response.result}`;
    });
  } else {
    resultDisplay.textContent = 'Please select a video file.';
  }
});
