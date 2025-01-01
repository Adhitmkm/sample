const { signup, login, updateUser, deleteUser, getUserProfile } = require('../Controller/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);
router.put('/updateUser', ensureAuthenticated, updateUser);
router.delete('/deleteUser', ensureAuthenticated, deleteUser);
router.get('/profile', ensureAuthenticated, getUserProfile);

module.exports = router;





















// const { signup, login } = require('../Controller/AuthController');
// const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');


// const router = require('express').Router();

// router.post('/login', loginValidation,login);
// router.post('/signup', signupValidation,signup);

// module.exports = router;