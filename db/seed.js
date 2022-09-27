const sequelize = require("../config/connection");
const {faker} = require('@faker-js/faker');
const User = require("../models/User");


async function seedUsers(number = 10){

  const models = [];

  const admin = await User.create({
    email: 'maha@test.com',
    name: "mahafortesting",
    password: "maha1234",
  });

  models.push(admin);
  // seed user
  for (let index = 0; index < number; index++) {
    
    const created = await User.create({
      email: faker.internet.email(),
      name: faker.name.fullName(),
      password: "123456789",
    });

    models.push(created);
  }

  return models;
}

async function seed(){
  

  const users = await seedUsers();


}


sequelize.sync({force: true})
  .then(seed)
  .then(() => process.exit(0));






