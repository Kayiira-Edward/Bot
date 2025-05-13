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


// const chatBtn = document.getElementById("chat-button");
//   const chatPopup = document.getElementById("chat-popup");
//   const closeBtn = document.getElementById("close-chat");

//   chatBtn.addEventListener("click", function(e) {
//     e.preventDefault();
//     chatPopup.style.display = "flex";
//   });

//   closeBtn.addEventListener("click", function() {
//     chatPopup.style.display = "none";
//   });


//   document.addEventListener("click", function(event) {
//     if (!chatPopup.contains(event.target) && !chatBtn.contains(event.target)) {
//       chatPopup.style.display = "none";
//     }
//   });
const chatBox = document.getElementById("chat-box");
chatBox.style.backgroundColor = "#ffff";

function appendMessage(sender, message, buttons = []) {
  const msg = document.createElement("div");
  msg.classList.add(sender);
  msg.classList.add("message");

  const text = document.createElement("div");
  text.textContent = message;
  msg.appendChild(text);

  if (buttons.length > 0) {
    const btnWrapper = document.createElement("div");
    btnWrapper.classList.add("button-wrapper");

    buttons.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option.label;
      btn.onclick = () => handleButtonClick(option.value);
      btnWrapper.appendChild(btn);
    });

    msg.appendChild(btnWrapper);
  }

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function clearButtons() {
  const wrappers = document.querySelectorAll(".button-wrapper");
  wrappers.forEach(wrapper => wrapper.remove());
}

let stage = 0;

function handleButtonClick(value) {
  appendMessage("user", value);
  clearButtons();

  if (stage === 0 && value.toLowerCase() === "hi") {
    appendMessage("bot", "Hi there! How can I assist you?", [
      { label: "Transaction", value: "1" },
      { label: "Account Info", value: "2" },
      { label: "Talk to Agent", value: "3" }
    ]);
    stage = 1;

  } else if (stage === 1) {
    if (value === "1") {
      appendMessage("bot", "You chose Transaction. What do you want to do?", [
        { label: "Send Money", value: "1" },
        { label: "Check Balance", value: "2" }
      ]);
      stage = 2;

    } else if (value === "2") {
      appendMessage("bot", "You chose Account Info. Here's your balance: UGX 50,000", [
        { label: "Start Over", value: "hi" }
      ]);

    } else if (value === "3") {
      appendMessage("bot", "Lily is connecting you to an agent... Please wait.");
      setTimeout(() => {
        appendMessage("bot", "You are now connected to an agent. Opening WhatsApp...");

        setTimeout(() => {
          const phone = "256746838046";
          const message = encodeURIComponent("Hello, I selected Option 3 and need to talk to an agent.");
          const waLink = `https://wa.me/${phone}?text=${message}`;
          window.open(waLink, "_blank");
        }, 1000);
      }, 3000);
      stage = 0;

    } else {
      appendMessage("bot", "You chose Transaction. What do you want to do?", [
        { label: "Send Money", value: "1" },
        { label: "Check Balance", value: "2" }
      ]);
      stage = 2;

    }

  } else if (stage === 2) {
    if (value === "1") {
      appendMessage("bot", "Enter the amount to send:", [
        { label: "UGX 10,000", value: "10000" },
        { label: "UGX 20,000", value: "20000" },
        { label: "UGX 50,000", value: "50000" }
      ]);
      stage = 3;

    } else if (value === "2") {
      appendMessage("bot", "Your current balance is UGX 50,000", [
        { label: "Start Over", value: "hi" }
      ]);
    }

  } else if (stage === 3) {
    appendMessage("bot", `You are sending UGX ${value}. Transaction complete. Thanks for using LilyBot.`, [
      { label: "Start Over", value: "hi" }
    ]);
    stage = 0;
  }
}

// Initial greeting
appendMessage("bot", "Say Hi to start", [
  { label: "Hi", value: "hi" }
]);

// -------

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

  
  