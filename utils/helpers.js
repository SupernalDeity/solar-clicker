module.exports = {
  // Helpers HERE
  getDailyReward
}

const schedule = require('node-schedule');
const randomNum = require('random-number');
const { Score } = require('../controllers/api/scoreRoutes')

// daily reward function
function getDailyReward(event) {
  const rule = new schedule.RecurrenceRule();
  rule.dayOfWeek = [0, new schedule.Range(0, 6)];
  rule.hour = 12;
  rule.minute = 0;

  const options = {
    min: 150,
    max: 200000,
    integer: true
  };

  const reward = schedule.scheduleJob(rule, function () {
    window.alert('You just got your daily reward!');
    console.log('You just got your daily reward!');

    let reward = randomNum(options);
    const score = Score.findOne({ where: { user_id: req.session.user_id }})
    score.push(reward);
  });
};
