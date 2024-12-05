import { Reminder } from './scripts/classes.js'
import { PriorityQueue } from './scripts/interest.js'

// Constants
const storageKey = ['mindrData']

// Screens
const mainScreen = document.getElementById('main')
const manageScreen = document.getElementById('manage')
const linksScreen = document.getElementById('links')

// Popup Elements
const manageButton = document.getElementById('manageButton')
const linksButton = document.getElementById('linksButton')
const placeholders = document.getElementsByClassName('placeholder')
const reminderContainer = document.querySelector('.content')
const manageBackButton = document.getElementById('manageBackButton')
const linksBackButton = document.getElementById('linksBackButton')

// Dynamic Variables
let userData;

main()


// Main function
function main() {
    // Handle dynamic data rendering
    chrome.storage.local.get(storageKey, retrieveUserData)

    if (userData) {
        // pass
    } else {
        for (let placeholder of placeholders) {
            placeholder.style.display = 'block'
        }
    }

    // Handle screen switching
    manageButton.addEventListener('click', () => (switchScreen(mainScreen, manageScreen)))
    linksButton.addEventListener('click', () => (switchScreen(mainScreen, linksScreen)))
    manageBackButton.addEventListener('click', () => (switchScreen(manageScreen, mainScreen)))
    linksBackButton.addEventListener('click', () => (switchScreen(linksScreen, mainScreen)))
}

// Helper functions
function switchScreen(from, to) {
    from.style.display = 'none'
    to.style.display = 'block'
}

function addUserData() {
    // pass
}

function renderUserData(timestamp, label) {
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
    userData = data;
}

function saveUserData() {
    chrome.storage.local.set({storageKey : userData}, () => {
        // pass
    })
}
