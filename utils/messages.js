const moment = require('moment');
const username = require('../controllers/api/messageRoutes')
const users = [];


function userJoin() {
  const user = username;
  users.push(user);
  return user;
};

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
};


module.exports = { userJoin, formatMessage }