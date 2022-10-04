const daily = document.getElementById('.daily-reward');
const messages = document.getElementById('.moment');
const now = document.getElementById('.now');
const dayReward = document.getElementById('.today-reward');
const moment = require('moment');
const randomNum = require('random-number');
const schedule = require('node-schedule');

// function to make time show up in div

let current = moment().format('dddd, h:mm a');
now.textContent(current);



  // determines daily reward, does a put method to update score
const addDaily = async () => {
  const response = await fetch(`http://localhost:3001/api/game/score`, {
    method: "PUT",
  });
  const data = await response.json();

  starsEL.innerHTML = `Stars: ${data.stars}`;
};


let reward = {
  min: 100,
  max: 2000000,
  interger: true
};



// function to check if todays reward has been claimed

if (!todaysReward) {
  return `Today's reward has not been claimed!`
} else {
  return `Today's reward has been claimed!`
};

// claim reward button // should only work if above statement 
d
var data = 'hi'
dayReward.innerHTML += 'Hi'

// timer that only allows it every 24 hours at 12pm
// if statement, if 

// to check how long its been since last reward being gotten
d
var startdate = moment();
startdate = startdate.subtract(1, "days");
startdate = startdate.format("DD-MM-YYYY");

addEventListener('click', addDaily);