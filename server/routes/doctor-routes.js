const express = require('express');
const upload = require('../middlewares/upload');
const controller = require('../controllers/doctor-controllers');

const router = express.Router();

router.post('/sign-up', upload.single('image'), controller.signupDoctor);

module.exports = router;
