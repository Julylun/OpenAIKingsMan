import * as API from './api.js'

const sendMessage = () => {
    API.receiveMessage(document.getElementById('content-input').value);
    document.getElementById('content-input').value = '';
}

document.getElementById('content-input').addEventListener('keyup', (event) => {
    if(event.key == 'Enter'){
        sendMessage();
    }
    // console.log(event.key)
})

document.getElementById('send-button').addEventListener('click', () => {
    sendMessage();
})

document.getElementsByClassName('turn-back').item(0).getElementsByTagName('img').item(0).addEventListener('click', () => {
    window.history.back();
})