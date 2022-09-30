const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Universe extends Model { }

Universe.init(
  {
    mercury: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    venus: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    earth: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    mars: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jupiter: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    saturn: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    uranus: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    neptune: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    pluto: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'user',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'universe',
  }
);

module.exports = Universe;


