const express = require('express');
const fs = require('fs');
const route = express.Router();
const {
  createTour,
  deleteById,
  getAllTours,
  getTourById,
  updateTourById,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require('../controllers/tourController');
const { protect } = require('../controllers/authController');
route.route('/top-5-cheap').get(aliasTopTours, getAllTours);

route.route('/tour-stats').get(getTourStats);
route.route('/monthly-plan/:year').get(getMonthlyPlan);

route.route('/:id').get(getTourById).patch(updateTourById).delete(deleteById);

route.route('/').get(protect, getAllTours).post(createTour);

module.exports = route;
