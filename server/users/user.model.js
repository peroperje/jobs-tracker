const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');


const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  firstName: {
    type: String,
    required: true,
    minlength: 3
  },
  surName: {
    type: String,
    required: true,
    minlength: 3
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email', 'firstName', 'surName']);
};
UserSchema.methods.genereateAuthToken = function () {
  const user = this;
  const access = 'auth';
  const token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET);

  user.tokens.push({access, token});
  return user.save()
    .then(() => token)
    .catch((err) => err);
};

UserSchema.methods.removeToken = function (token) {
  const user = this;
  return user.update({
    $pull: {
      tokens: {token}
    }
  });
};

UserSchema.statics.findByToken = function (token) {
  const User = this;
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return Promise.reject(e.message);
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': decoded.access
  })
    .then((user) => user)
    .catch((e) => e);

};

UserSchema.statics.findByCredentials = function (email, password) {
  const User = this;
  return User.findOne({email}).then((user) => {
    if (!user) {
      return Promise.reject(new Error('Can not find user with email'));
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (err) {
          reject(err);
        }
        if (res) {
          return resolve(user);
        }
        return reject(new Error('email or password not mach.'));
        

      });
    });

  });
};

UserSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = {User};
