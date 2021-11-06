const socket = io()

const inputMessage = document.getElementById('message')
const chat = document.querySelector('.chat')

inputMessage.addEventListener('keypress', e => {
    if (e.key == 'Enter') {
        socket.emit('chat:message', {
            message: inputMessage.value
        })
    }
})

socket.on('chat:message', message => {
    chat.innerHTML += `<p> ${message} </p>`
})