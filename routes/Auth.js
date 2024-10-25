const express = require('express')
const router = express.Router()
const passport =require("passport");
const {register, login, logout , getUser, isAuthenticated} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', passport.authenticate('local'), login);
router.get('/logout', logout);
router.get('/current', passport.authenticate('jwt', {session: false}), getUser);
router.get('/profile', isAuthenticated, (req,res) =>{
    res.send(req.user);
});
module.exports = router;