console.log('This site is built using Hugo!');

import initMobileNavbar from './initMobileNavbar.js';

// Use an async function to handle asynchronous initialization
async function initApp() {
  try {
    // Initialize other independent features in parallel
    await Promise.all([
      initMobileNavbar()
    ]);

    console.log('All modules initialized successfully');
  } catch (error) {
    console.error('Error occurred during initialization:', error);
    // Add error handling logic here, such as displaying an error message to the user
  }
}

document.addEventListener('DOMContentLoaded', initApp);
