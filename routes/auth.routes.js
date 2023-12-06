const express = require("express");
const authRoutes = express.Router();
const user = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');
// register
authRoutes.post('/', user.register);
// login
authRoutes.post('/login', user.login);
// all users
authRoutes.get('/', auth, user.all);

module.exports = { authRoutes };