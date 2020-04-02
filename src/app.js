require("dotenv").config();
const cron = require("node-cron");
const express = require("express");
const webScraping = require("./utils/webScraping");
// const sendDailyReport = require("./emails/emailSender");
const sendNotification = require("./emails/sendNotificaton");

const url = "http://www.novalima.mg.gov.br/portal-transparencia/editais";
const buscas = ["edital concorrencia", "edital tomada"];
var editais = [];

const mailToList = ["renatoafporto@gmail.com"];

app = express();

app.get("/", (req, res) => {
  res.send("Server is up!");
});

// TODO! Set scheduler to once a day at 07:30
cron.schedule("30 7 * * 1-5", async () => {
  editais = await webScraping(url, buscas, editais);
  if (editais.length > 0) {
    sendNotification(editais);
    // sendDailyReport(mailToList.toString(), editais).catch(console.log);
    // console.log(editais);
  }
});

app.listen(process.env.PORT);
