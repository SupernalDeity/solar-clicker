const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Score extends Model { }

Score.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    stars: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    accumulation: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    clicks: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    mercury: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      cost: 15,
    },
    mercury_cost: {
      type: DataTypes.INTEGER,
      defaultValue: 15,
    },
    venus: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    venus_cost: {
      type: DataTypes.INTEGER,
      defaultValue: 200,
    },
    earth: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    earth_cost: {
      type: DataTypes.INTEGER,
      defaultValue: 900,
    },
    mars: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    mars_cost: {
      type: DataTypes.INTEGER,
      defaultValue: 2000,
    },
    jupiter: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jupiter_cost: {
      type: DataTypes.INTEGER,
      defaultValue: 5000,
    },
    saturn: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    saturn_cost: {
      type: DataTypes.INTEGER,
      defaultValue: 15000,
    },
    uranus: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    uranus_cost: {
      type: DataTypes.INTEGER,
      defaultValue: 40000,
    },
    neptune: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    neptune_cost: {
      type: DataTypes.INTEGER,
      defaultValue: 90000,
    },
    pluto: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    pluto_cost: {
      type: DataTypes.INTEGER,
      defaultValue: 250000,
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
    modelName: 'score',
  }
);

module.exports = Score;
