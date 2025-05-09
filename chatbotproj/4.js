document.addEventListener("DOMContentLoaded", function() {
    const messagesDiv = document.getElementById("messages");
    const userInput = document.getElementById("user-input");

    const botResponses = {
        "hello": "Hello! How can I assist you today?",
        "hi": "Hi there! What can I do for you?",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "bye": "Goodbye! Have a nice day!",
        "i love you": "thats great to hear,but i dont!",
        " iam abhi" : " hi abhi, iam steven",
        "default": "Sorry, I didn't understand that. Can you ask something else?"
    };

    // Function to handle sending the message
    function sendMessage() {
        let userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "user");
            userInput.value = "";

            setTimeout(() => {
                botReply(userMessage);
            }, 500);
        }
    }

    // Function to display the user's message
    function addMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.innerHTML = `<div class="message-text">${text}</div>`;
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;  // Scroll to the bottom
    }

    // Function to generate a bot response
    function botReply(userMessage) {
        let response = botResponses["default"];
        userMessage = userMessage.toLowerCase();
        if (botResponses[userMessage]) {
            response = botResponses[userMessage];
        }

        addMessage(response, "bot");
    }

    // Event listener for enter key press
    userInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});
