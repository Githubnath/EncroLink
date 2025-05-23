const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendVerificationEmail = async (to, token) => {
  const url = `${process.env.CLIENT_URL}/verify/${token}`;
  const mailOptions = {
    from: `"EncroLink" <${process.env.EMAIL_USERNAME}>`,
    to,
    subject: 'Verify Your Email',
    html: `<p>Click <a href="${url}">here</a> to verify your account.</p>`,
  };
  await transporter.sendMail(mailOptions);
};

