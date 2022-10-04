const chat = document.querySelector('.chat-main');
const messagesEl = document.querySelector('.chat-messages');
const messageInput = document.querySelector('#msg');
const messageBtn = document.querySelector('.messageBtn');

// Loads all messages on intial page load
const messageinitialLoad = async () => {
  const response = await fetch(`http://localhost:3001/api/game/message`, {
    method: "GET",
  });
  const data = await response.json();

  console.log(data);
  
  for (let i = 0; i < data.length;  i ++) {
  let list = document.createElement("ul");
  list.innerHTML = `${data[i].user?.name}: ${data[i].message}`;
  messagesEl.appendChild(list);
  }

  messagesEl.scrollTop = messagesEl.scrollHeight;
};

// Adds a message to the database
const postMessage = async () => {
  const message = messageInput.value;
  
  console.log(message);

  const response = await fetch(`http://localhost:3001/api/game/message`, {
    method: "POST",
    body: JSON.stringify({ message }),
    headers: { 'Content-Type': 'application/json'},
  });

  if (response.ok) {
    const data = response.json();
    console.log(data);
  } else {
    console.log('Something went wrong');
  }
}

messageBtn.addEventListener('click', postMessage);

messageinitialLoad();