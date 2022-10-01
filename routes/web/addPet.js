const Pet = require('../../models/Pet');
const ShelterPet = require('../../models/ShelterPet');


const router = require('express').Router();


router.get('/addPet', (req, res) => {


    res.render("addPet", {loggedIn: req.session.loggedIn});
  
  });

  router.get('/shelter', (req, res) => {


    res.render("shelterPet", {loggedIn: req.session.loggedIn});
  
  });

  
router.post('/addPet', async (req, res) => {
    try {
      console.log("inside addPet");
        const petData = await Pet.create({
            name: req.body.name,
            pettype:req.body.pettype,
            description: req.body.description,
            breed: req.body.breed,
            address: req.body.address,
            postcode:req.body.postcode,
            email:req.body.email
        });
    
        req.session.save(() => {
          req.session.user_id = petData.id;
             
          //res.status(200).json(userData);
          res.redirect('/profile');
        });
      } catch (err) {
        res.status(400).json(err);
      }
    });

      router.get('/privateOwner', async (req, res) => {


        const pets = await Pet.findAll();
      
        const results = pets.map((pet) => pet.get({plain: true}));
      
        res.render('privateOwner', {
          pets: results,
          loggedIn: req.session.loggedIn
        });
      
      });

    router.get('/shelterPet', async(req, res) => {

       const shelterPets = await ShelterPet.findAll({
                where: {
                    postcode: req.query.postcode,
                    pettype:  req.query.pettype
                }
            });
        console.log("Inside shelterPet")
        console.log("shelterPets "+shelterPets)
        const results = shelterPets.map((shelterpet) => shelterpet.get({plain: true}));
      
        res.render('populateShelterPet', {
          shelterPets: results,
          loggedIn: req.session.loggedIn
        });
    });

    module.exports = router;
  