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
      allowNull: false,
    },
    accumulation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clicks: {
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

module.exports = Score;