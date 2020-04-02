"use strict";
require("dotenv").config();
const Email = require("email-templates");
const nodemailer = require("nodemailer");

let mailToList = "renatoafporto@gmail.com";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

let mailOptions = {
  from: "renatoafporto@gmail.com",
  to: mailToList,
  cc: "renatoafporto@gmail.com",
  subject: "Licitação publicada",
  text: "Plaintext support",
  html: `<!doctype html>
  <html ⚡4email>
    <head>
      <meta charset="utf-8>
    </head>
    <body>
      <table border="1" cellpadding="10" cellspacing="2" width="600px">
        <tr>
          <th>Publicação</th>
          <th>Data</th>
          <th>Download</th>
        </tr>
        <tr>
          <td>
            Dados dados dados dados dados dados dados dados dados dados dados dados
            dados dados dados
          </td>
          <td>24/01/2010</td>
          <td>
            <a href="http://www.asdlaksdjalsdjalsdjlasdjdaskljdaslkjd">Download</a>
          </td>
        </tr>
      </table>
    </body>
  </html>`
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) return console.log(err);

  console.log("Email sent!!!");
});

// module.exports = sendDailyReport;
