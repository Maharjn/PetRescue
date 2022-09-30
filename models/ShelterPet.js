const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ShelterPet extends Model {
}

ShelterPet.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      pettype: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      petname:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    petdescription:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    petbreed:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    postcode:{
        type:DataTypes.STRING,
        allowNull:false,
    },
 
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'shelterpet',
  
  }
  );

module.exports = ShelterPet;