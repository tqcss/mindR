// Constants
const storageKey = ['mindrData']

// Screens
const mainScreen = document.getElementById('main')
const manageScreen = document.getElementById('manage')
const linksScreen = document.getElementById('links')

// Popup Elements
const manageButton = document.getElementById('manageButton')
const linksButton = document.getElementById('linksButton')
const placeholder = document.getElementById('placeholder')
const reminderContainer = document.querySelector('.content')

let userData = chrome.storage.local.get(storageKey, retrieveUserData)


// Handle dynamic data rendering
if (userData) {
    // pass
} else {
    placeholder.style.display = 'block'
}

// Handle screen switching
manageButton.addEventListener('click', () => (switchScreen(mainScreen, manageScreen)))
linksButton.addEventListener('click', () => (switchScreen(mainScreen, linksScreen)))


// Helper functions
function switchScreen(from, to) {
    from.style.display = 'none'
    to.style.display = 'block'
}

function renderUserData() {
    // pass
}

function addUserData(timestamp, label) {
    let reminderCard = document.createElement('li')
    let reminderTimestamp = document.createElement('div')
    let reminderLabel = document.createElement('div')

    reminderTimestamp.textContent = timestamp
    reminderTimestamp.classList.add('timestamp')

    reminderLabel.textContent = label
    reminderLabel.classList.add('reminder')

    reminderContainer.appendChild(reminderCard)
    reminderCard.appendChild(reminderTimestamp)
    reminderCard.appendChild(reminderLabel)
}

function retrieveUserData(data) {
    return data
}

function saveUserData() {
    chrome.storage.local.set(storageKey, userData)
}

function addUserData() {

}