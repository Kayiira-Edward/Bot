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


const chatBtn = document.getElementById("chat-button");
  const chatPopup = document.getElementById("chat-popup");
  const closeBtn = document.getElementById("close-chat");

  chatBtn.addEventListener("click", function(e) {
    e.preventDefault();
    chatPopup.style.display = "flex";
  });

  closeBtn.addEventListener("click", function() {
    chatPopup.style.display = "none";
  });

  // Hide chat when clicking outside
  document.addEventListener("click", function(event) {
    if (!chatPopup.contains(event.target) && !chatBtn.contains(event.target)) {
      chatPopup.style.display = "none";
    }
  });