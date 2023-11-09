// content.js
// Capture video data from the page and send it to the background script.
// content.js

// Function to capture video data
function captureVideoData() {
    const videoElements = document.getElementsByTagName('video');
  
    const videoData = [];
  
    // Iterate through all video elements on the page
    for (const videoElement of videoElements) {
      // Check if the video element is visible and playing
      if (isVideoVisible(videoElement) && !videoElement.paused) {
        // Capture a frame or extract relevant data from the video
        const videoFrame = captureVideoFrame(videoElement);
  
        // Add the video frame to the data
        videoData.push({
          src: videoElement.src,
          frame: videoFrame,
        });
      }
    }
  
    return videoData;
  }
  
  // Function to check if a video element is visible
  function isVideoVisible(videoElement) {
    const rect = videoElement.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Function to capture a frame from a video element
  function captureVideoFrame(videoElement) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const frameDataUrl = canvas.toDataURL('image/jpeg');
    return frameDataUrl;
  }
  
  // Send the captured video data to the background script
  chrome.runtime.sendMessage({ action: 'captureVideoData', videoData: captureVideoData() });