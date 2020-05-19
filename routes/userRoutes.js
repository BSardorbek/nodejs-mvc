const express = require('express');
const route = express.Router();
const {
  updateUserById,
  getUserById,
  getAllUsers,
  deleteUserById,
  createUsers,
} = require('../controllers/userController');

const { signup, login } = require('../controllers/authController');

route.post('/signup', signup);
route.post('/login', login);

route
  .route('/:id')
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

route.route('/').get(getAllUsers).post(createUsers);

module.exports = route;
