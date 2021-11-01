const express = require('express');
const router = express.Router();
const userHandler = require('./handler/users')
const verifyToken = require('../middleware/verifyToken')
/* GET users listing. */
router.post('/register', userHandler.register)
router.post('/login', userHandler.login)
router.post('/logout', userHandler.logout)

module.exports = router;
