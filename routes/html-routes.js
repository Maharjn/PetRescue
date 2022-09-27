const sequelize = require('../config/connection');
const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.session.loggedIn) {
        res.redirect('/members');
        return;
    }
    res.render("login");
  });

 module.exports = router;