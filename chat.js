document.addEventListener('DOMContentLoaded', () => {
    const mensaje = document.getElementById('messageInput');
    const Boton = document.getElementById('enviar');
    const chatBody = document.querySelector('.chat-body');


    function saveMessage(message) {
        let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push(message);
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }


    function loadMessages() {
        let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        chatBody.innerHTML = '';
        messages.forEach((message) => {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message outgoing';
            messageDiv.innerHTML = `<p>${message}</p>`;
            chatBody.appendChild(messageDiv);
        });
    }


    loadMessages();

  
    Boton.addEventListener('click', () => {
        const messageText = mensaje.value.trim();

        if (messageText !== '') {
       
            saveMessage(messageText);

            loadMessages();

            messageInput.value = '';
        }
    });
});
