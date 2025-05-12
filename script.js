// script.js

// Select the menu and buttons
const menu = document.getElementById('nav');
const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');

// Function to show the menu
openMenuButton.addEventListener('click', () => {
    menu.style.display = 'block';
});

// Function to hide the menu
closeMenuButton.addEventListener('click', () => {
    menu.style.display = 'none';
});