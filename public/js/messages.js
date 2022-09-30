const chat = document.getElementById('.chat-main');
const messages = document.getElementById('.chat-messages');


const { username } = {
  
};

const sock = io();
sock.emit('join', (username));

sock.on('message', (message) => {
  outputMessage(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

chat.addEventListener('submit', (event) => {
  event.preventDefault();
  let message = event.target.elements.message.value;
  message = message.trim();
  if (!message) { return false; }

  sock.emit('message', message);
  event.target.elements.message.value = '';
  event.target.elements.message.focus();
});

const outputMessage = () => {
  const base = document.createElement('div');
  base.classList.add('message');
  const sender = document.createElement('p');
  sender.classList.add('meta');
  sender.innerText = message.username;
  sender.innerHTML += `<span>${message.time}</span>`;
  base.appendChild(sender);
  const msg = document.createElement('p');
  msg.classList.add('text');
  msg.innerText = message.text;
  base.appendChild(msg);
  messages.appendChild(base);
};