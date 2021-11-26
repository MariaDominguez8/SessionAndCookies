const express = require('express');
const router = express.Router();
const {processRegister,user,reset} = require('../controllers/userController');
const registerValidation = require('../validations/registerValidation');

router.post('/',registerValidation,processRegister);
router.get('/users',user);
router.get('/users/reset',reset);

module.exports = router;