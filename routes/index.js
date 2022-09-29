const router = require('express').Router();

const auth = require('./web/auth');
const addPet = require('./web/addPet');

router.use(auth);
router.use(addPet);

module.exports = router;

