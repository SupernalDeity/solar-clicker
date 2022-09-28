const User = require('./User');
const Score = require('./Score');
const Planets = require('./Planets');

Score.belongsTo(User,{ 
  foreignKey: 'user_id'
});

Planets.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Score, Planets };
