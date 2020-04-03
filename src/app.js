const cron = require("node-cron");
const express = require("express");
const path = require("path");
const webScraping = require("./utils/webScraping");
const sendNotification = require("./emails/sendNotificaton");

const url = "http://www.novalima.mg.gov.br/portal-transparencia/editais";
const buscas = ["edital concorrencia", "edital tomada"];
var editais = [];

const mailToList = [
  "renatoafporto@gmail.com",
  "construtorapalmeiras@yahoo.com.br",
];

app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

cron.schedule("0 19 * * 1-5", async () => {
  editais = await webScraping(url, buscas, editais);
  if (editais.length > 0) {
    sendNotification(editais, mailToList.toString());
    // console.log(editais);
  }
});

app.listen(process.env.PORT);
