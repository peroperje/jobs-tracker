/**
 * Created by petar on 5/21/17.
 */
const {User} = require('../users/user.model');
const authenticate = (req, res, next) => {
  const token = req.header('x-auth');

  User.findByToken(token)
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('There is no user'));
      }
      req.cUser = user;
      req.token = token;
      next();
    })
    .catch((e) => {
      res.status(401).send(e.message);
    });
};

module.exports = {authenticate};
