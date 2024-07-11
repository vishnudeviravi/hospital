const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/hospDB')
  .then(() => {
    console.log('DB connected');
  })
  .catch(() => {
    console.log('error');
  });

module.exports = mongoose;
