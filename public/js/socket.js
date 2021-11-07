const socket = io()

const inputMessage = document.getElementById('message')
const chat = document.querySelector('.chat')
const sendButton = document.getElementById('sendMessage')

sendButton.addEventListener('click', e => {
    socket.emit('chat:message', {
        message: inputMessage.value
    })
    inputMessage.value = ''
})

socket.on('chat:message', message => {
    chat.innerHTML += `
                <div class="content-text">
                    <div class="text-message">
                        <p class="text-message"> ${message} </p>
                    </div>
                </div>
    `
})