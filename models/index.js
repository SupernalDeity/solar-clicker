const User = require('./User');
const Score = require('./Score');
const Universe = require('./Universe');

Score.belongsTo(User,{ 
  foreignKey: 'user_id'
});

Universe.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasOne(Universe, {
  foreignKey: 'user_id'
});

User.hasOne(Score, {
  foreignKey: 'user_id'
});

module.exports = { User, Score, Universe };
