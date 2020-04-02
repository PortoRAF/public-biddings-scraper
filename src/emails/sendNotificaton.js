require("dotenv").config({ path: "../.env" });
const nodemailer = require("nodemailer");
const postmarkTransport = require("nodemailer-postmark-transport");

const sendNotification = entries => {
  const transport = nodemailer.createTransport(
    postmarkTransport({
      auth: {
        apiKey: "eee4dde0-5e80-43e8-8670-3147b4640b86"
      }
    })
  );

  let mail = {
    from: "contato@bebeldocecozinha.com.br",
    to: "contato@bebeldocecozinha.com.br",
    templateAlias: "notification",
    templateModel: {
      notification_details: entries
    }
  };

  transport.sendMail(mail, (err, info) => {
    if (err) {
      return console.log(err);
    }
    // console.log(info);
  });
};

module.exports = sendNotification;
