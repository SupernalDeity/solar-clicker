const User = require('./User');
const Score = require('./Score');

Score.belongsTo(User,{ 
  foreignKey: 'user_id'
});

User.hasOne(Score, {
  foreignKey: 'user_id'
});

module.exports = { User, Score, };
