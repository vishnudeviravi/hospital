const express = require('express');

const departmentRoutes = require('./department-routes');
const doctorRoutes = require('./doctor-routes');

const router = express.Router();

router.use('/department', departmentRoutes);
router.use('/doctor', doctorRoutes);

module.exports = router;
