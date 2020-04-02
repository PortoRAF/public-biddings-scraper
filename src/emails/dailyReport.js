"use strict";
const GMAIL_USERNAME = "";
const GMAIL_PASSWORD = "";

const nodemailer = require("nodemailer");

const sendDailyReport = async (email, text) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.googlemail.com",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USERNAME,
      pass: GMAIL_PASSWORD
    }
  });

  let info = await transporter.sendMail({
    from: '"Renato Porto" <renatoafporto@gmail.com>',
    to: email,
    subject: "Editais publicados",
    text: "Hello world"
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = sendDailyReport;
