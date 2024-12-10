// Elements
const exitButton = document.querySelector('.exit-button');
const panels = document.getElementsByClassName('panel');


// Handle Events
exitButton.addEventListener('click', closePopup);


function closePopup() {
    window.close();
}