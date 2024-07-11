const Department = require('../db/models/department-schema');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

module.exports.getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.status(200).json(departments);
};

module.exports.postDepartment = async (req, res) => {
  const department = await Department.create({
    name: req.body.name,
    image: `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`,
  });
  res.status(201).json({ message: 'Department added', data: department });
};
