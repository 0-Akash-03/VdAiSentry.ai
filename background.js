// background.js

// Import TensorFlow.js library
import * as tf from 'tensorflow';

// Define a function to load the model
async function loadModel() {
  // Replace 'path_to_model' with the actual path to your model files
  const modelPath = chrome.runtime.getURL('path_to_model/model.json');

  try {
    const model = await tf.loadLayersModel(modelPath);
    return model;
  } catch (error) {
    console.error('Failed to load the model:', error);
    return null;
  }
}

// Load the model when the extension starts
let loadedModel;

loadModel()
  .then((model) => {
    if (model) {
      loadedModel = model;
      console.log('Model loaded successfully.');
    }
  })
  .catch((error) => {
    console.error('Model loading error:', error);
  });

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'analyzeUserVideo') {
    // Use 'loadedModel' for video analysis
    // Example: const result = loadedModel.predict(message.videoFile);

    // Send the analysis result back to the content script
    // sendResponse({ result });
  }
});
