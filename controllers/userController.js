const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const APIFutures = require('../utils/apiFutures');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    msg: 'All users',
    results: users.length,
    data: {
      users,
    },
  });
};

exports.getUserById = (req, res) => {
  res.status(500).json({
    status: 'error',
    msg: 'This rout is not yet defined',
  });
};

exports.createUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    msg: 'This rout is not yet defined',
  });
};

exports.updateUserById = (req, res) => {
  res.status(500).json({
    status: 'error',
    msg: 'This rout is not yet defined',
  });
};

exports.deleteUserById = (req, res) => {
  res.status(500).json({
    status: 'error',
    msg: 'This rout is not yet defined',
  });
};
