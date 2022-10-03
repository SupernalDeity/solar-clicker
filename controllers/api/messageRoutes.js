const router = require('express').Router();
const { User } = require('../../models');
// const socket = require('socket.io');

const socket = io();

router.get('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
const username = User.findOne({where: {name: req.body.name}});

const chat = document.getElementById('.chat-main');
const messages = document.getElementById('.chat-messages');

// socket.emit('join', (username));

socket.on('message', (message) => {
  outputMessage(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

chat.addEventListener('submit', (event) => {
  event.preventDefault();
  let message = event.target.elements.message.value;
  message = message.trim();
  if (!message) { return false; }

  socket.emit('message', message);
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

module.exports = router;