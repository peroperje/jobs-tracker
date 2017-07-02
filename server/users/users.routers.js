const {Router} = require('express');
const {createUser,login} = require('./users.controller');


const router = new Router();

router.route('/users').post(createUser);
router.route('/users/login').post(login);

module.exports = router;