const User = require('./User');
const Score = require('./Score');
const Message = require('./message');

Score.belongsTo(User,{ 
  foreignKey: 'user_id'
});

User.hasOne(Score, {
  foreignKey: 'user_id'
});

Message.belongsTo(User,{ 
  foreignKey: 'user_id'
});

User.hasMany(Message, {
  foreignKey: 'user_id'
});

module.exports = { User, Score, Message };
