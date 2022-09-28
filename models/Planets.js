const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Planets extends Model { }

Planets.init(
  {
    mercury: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    venus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    earth: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jupiter: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    saturn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    uranus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    neptune: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pluto: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

module.exports = Planets;


