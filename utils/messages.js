const moment = require('moment');
const User = require('../models/User')
const users = [];

// const username = User.findOne({where: {name: req.body.name}});

function userJoin() {
  const user = User.findOne({where: {name: req.body.name}})
  users.push(user);
  return user;
};

function formatMessage(username, text) {
  return {
    username, 
    text,
    time: moment().format('h:mm a')
  };
}

module.exports = { userJoin, formatMessage }