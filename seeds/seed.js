const sequelize = require('../config/connection');
const { User, Universe, Score } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (let user of userData) {
    const createdUser = await User.create(user, {
      individualHooks: true,
      returning: true,
    });
    await Universe.create({ user_id: createdUser.id });
    await Score.create({ user_id: createdUser.id });
  }

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
