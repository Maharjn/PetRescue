const router = require('express').Router();

const auth = require('./web/auth');
const homeRoutes = require('./html-routes.js');
router.use(auth);
router.use('/', homeRoutes);

module.exports = router;
