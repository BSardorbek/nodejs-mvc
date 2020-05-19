const User = require('./../models/userModel');
const util = require('util');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res, next) => {
  const newUser = await User.create(req.body);
  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    next(new AppError('email and password !', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  const correct = user.correctPassword(password, user.password);

  if (!user || !correct) {
    return next(new AppError('Incorrect email or password', 401));
  }

  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token,
  });
};

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('test')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('token mavjud emas', 401));
  }
  const decode = await util.promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );
  console.log(decode);

  next();
};
