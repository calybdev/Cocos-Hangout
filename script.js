let loggedInUser = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic authentication, replace with secure authentication mechanism in a real application
    if (username === 'user' && password === 'password') {
        loggedInUser = username;
        document.getElementById('loggedInUsername').innerText = loggedInUser;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('chatContainer').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== '') {
        const chatMessages = document.getElementById('chatMessages');
        const newMessage = document.createElement('div');
        newMessage.innerText = `${loggedInUser}: ${message}`;
        chatMessages.appendChild(newMessage);

        // Clear the input field after sending a message
        messageInput.value = '';
    }
}

function logout() {
    loggedInUser = null;
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('chatContainer').style.display = 'none';
}
