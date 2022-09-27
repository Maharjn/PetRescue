const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {
}

Pet.init(
  {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    breed:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    location:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    }
  }
  );

module.exports = Pet;