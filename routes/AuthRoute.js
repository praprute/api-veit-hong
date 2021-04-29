const express = require('express');
const router = express.Router();

const { register,signin,signout } = require('../controller/authController');
// const { userSignupValidator } = require('../validator/index');

router.post('/signup', register);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;