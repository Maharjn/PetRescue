const sequelize = require("../config/connection");
const {faker} = require('@faker-js/faker');
const User = require("../models/User");
const ShelterPet = require("../models/ShelterPet");


async function seedUsers(number = 10){

  const models = [];

  const admin = await User.create({
    email: 'maha@test.com',
    firstname: "maha",
    lastname:"testing",
    password: "heythere123",
  });

  models.push(admin);
  // seed user
  for (let index = 0; index < number; index++) {
    
    const created = await User.create({
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname:faker.name.lastName(),
      password: "123456789",
    });

    models.push(created);
  }

  return models;
}

async function seedShelterPets(number = 10) {

  const models = [];

  // seed user
  for (let index = 0; index < number; index++) {

    const created = await ShelterPet.create({
     
      pettype: faker.animal.type(),
      postcode: faker.address.zipCodeByState("WA"),
      petname:faker.name.firstName(),
      petdescription:faker.lorem.sentence(),
      petbreed:faker.lorem.word(),

    });

    models.push(created);
  }

  return models;
}

async function seed(){
  

  const users = await seedUsers();
  const shelterPets = await seedShelterPets();


}


sequelize.sync({force: true})
  .then(seed)
  .then(() => process.exit(0));






