const {ObjectId} = require('mongodb');

const mongoose = require('./../db/mongoose');
const {User} = require('./user.model');

const createUser = (req, res) => {
    //res.send(req.body)
  const user = new User(req.body);
  user.save()
    .then(user => user.genereateAuthToken())
    .then(token => {
      res.header('x-auth', token).send(user);
    })
    .catch(err => res.status(400).send(err));
};

const login = (req,res)=>{
  const body = {email,password} = req.body ;
  User.findByCredentials(body.email,body.password)
    .then((user) => {
      return user.genereateAuthToken()
        .then((token) => {
          res.header('x-auth',token).send(user);
        })
    })
    .catch((err) => {
      res.status(400).send(err.message);
    })
};

module.exports = {
  createUser,
  login
};
