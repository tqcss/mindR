// Elements
const backButton = document.getElementById('back-button');
const exitButton = document.getElementById('exit-button');
const panels = document.getElementsByClassName('panel');
const mainPanel = document.getElementById('main-panel');
const managePanel = document.getElementById('manage-panel');
const bookmarkPanel = document.getElementById('bookmark-panel');


// Dynamic Variables
let currentPanel = mainPanel;


// Main function
main();

function main() {
    currentPanel.style.display = 'block';
    updateHeader();
}


// Handle Events
exitButton.addEventListener('click', () => window.close());


// Helper functions
function updateHeader() {
    if (currentPanel != mainPanel) {
        backButton.style.display = 'block';
    }
}
