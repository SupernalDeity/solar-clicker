import { io } from 'socket.io-client'

const chat = document.getElementById('.chat-main');
const messageInput = document.getElementById('.chat-messages');
const form = document.getElementById('#chat-form');

const socket = io('http://localhost:3000');
const gameSocket = io('http://localhost:3000');
gameSocket.on('connect', () => {
  displayMessage('You connected!')
});

gameSocket.on('receive-message', message => {
  displayMessage(message);
});

gameSocket.addEventListener('submit', event => {
  event.preventDefault();
  const message = messageInput.value;

  if (message === '') return displayMessage(message);
  socket.emit('send-message', message)
  messageInput.value = '';
});

function displayMessage(message) {
  const div = document.createElement('div')
  div.textContent = message;
  document.getElementById('.chat-main').append(div)
};
