const {Router} = require('express');
const {createUser, login, me} = require('./users.controller');
const {authenticate} = require('./../middleware/authenticate');


const router = new Router();

router.route('/users').post(createUser);
router.route('/users/login').post(login);

router.route('/users/me').all(authenticate).post(me);

module.exports = router;