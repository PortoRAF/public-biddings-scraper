const cron = require("node-cron");
const express = require("express");
const path = require("path");
const webScraping = require("./utils/webScraping");
const sendNotification = require("./emails/sendNotificaton");

const url = "http://www.novalima.mg.gov.br/portal-transparencia/editais";
const buscas = ["edital concorrencia", "edital tomada"];

var editais = [];

const mailToList = ["renatoafporto@gmail.com"];

const publicDirectoryPath = path.join(__dirname, "../public");

app = express();

app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.send("Server is up!");
});

cron.schedule(
  "0 * * * 1-5",
  async () => {
    editais = await webScraping(url, buscas, editais);
    if (editais.length > 0) {
      sendNotification(editais, mailToList.toString());
      // console.log(editais);
    }
  },
  {
    scheduled: true,
    timezone: "America/Sao_Paulo",
  }
);

app.listen(process.env.PORT);
