const nodemailer = require("nodemailer");
const postmarkTransport = require("nodemailer-postmark-transport");

const sendNotification = (entries, mailToList) => {
  const transport = nodemailer.createTransport(
    postmarkTransport({
      auth: {
        apiKey: process.env.POSTMARK_API_TOKEN
      }
    })
  );

  let mail = {
    from: "contato@bebeldocecozinha.com.br",
    to: mailToList,
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
