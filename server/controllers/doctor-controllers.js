const Doctor = require('../db/models/doctor-schema');
const genPassword = require('generate-password');
const nodemailer = require('nodemailer');

module.exports.signupDoctor = async (req, res) => {
  const body = req.body;
  const doctor = await Doctor.findOne({ email: body.email });
  if (doctor) {
    return res.status(403).json({ message: 'Email already exist' });
  }
  const docPassword = genPassword.generate({
    length: 10,
    numbers: true,
  });
  const imageLink = `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`;
  console.log(imageLink);
  console.log(docPassword);

  const response = await Doctor.create({
    ...body,
    image: imageLink,
    password: docPassword,
  });

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'programlearn8@gmail.com',
      pass: 'nrer yufs odkj vmxs',
    },
  });

  let mailOptions = {
    from: 'programlearn8@gmail.com',
    to: body.email,
    subject: 'Login creds for DocBooking App',
    text: `your email id : ${body.email} and password : ${docPassword} `,
  };

  transporter.sendMail(mailOptions, error => {
    if (error) {
      return res.status(404).json({ message: error });
    } else return res.status(200).json({ message: 'Mail send' });
  });

  //   res.status(201).json({ message: 'signed up' });s
};
