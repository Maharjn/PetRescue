const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {
}

Pet.init(
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
    address:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    postcode:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            len: [4],
          },
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'pet',
  
  }
  );

module.exports = Pet;