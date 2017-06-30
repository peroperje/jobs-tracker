const {Router} = require('express');
const {createUser} = require('./users.controller');


const router = new Router();

router.route('/users').post(createUser);

module.exports = router;