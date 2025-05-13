var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
    document.addEventListener("click", outsideClickListener); // Attach listener
}

function closemenu() {
    sidemenu.style.right = "-200px";
    document.removeEventListener("click", outsideClickListener); // Remove listener
}

function outsideClickListener(event) {
    // If the click is NOT inside the menu OR the menu button
    if (!sidemenu.contains(event.target) && !event.target.matches('.menu-icon')) {
        closemenu();
    }
}
