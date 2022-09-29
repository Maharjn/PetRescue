const User = require('../../models/User');

const router = require('express').Router();

// contain the auth routes


// login page
router.get('/', (req, res) => {


  res.render("login" , {loggedIn: req.session.loggedIn})

});

router.get('/signup', (req, res) => {


  res.render("signup");

});

router.get('/profile', (req, res) => {


  res.render("members" , {loggedIn: req.session.loggedIn})

});

// post login (for user to login)
router.post('/', async (req, res) => {

  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).render('login', {
        error: "Email is invalid. Please try again"
      })
        
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .render('login', {
          error: "password is invalid. Please try again"
        });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.redirect('/profile');
    });

  } catch (err) {
    res.status(400).render('login', {
      error: "Email or password is invalid. Please try again"
    });
  }


})

// signup page


  
router.post('/signup', async (req, res) => {
  try {
    console.log("First name: "+ req.body.firstname);
    console.log("inside signup")
      const userData = await User.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password
      });
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
  
        //res.status(200).json(userData);
        res.redirect('/profile');
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });



// post (for user to actually signup)

module.exports = router;


