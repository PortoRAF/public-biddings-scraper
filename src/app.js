const cron = require("node-cron");
const express = require("express");
const webScraping = require("./utils/webScraping");
const sendDailyReport = require("./emails/dailyReport");

const url = "http://www.novalima.mg.gov.br/portal-transparencia/editais";
const buscas = ["edital concorrencia", "edital tomada"];
const mailTo = ["renatoporto.dev@gmail.com"];
var editais = [];

app = express();

app.get("/", (req, res) => {
  res.send("Server is up!");
});

cron.schedule("* * * * 1-5", async () => {
  editais = await webScraping(url, buscas, editais);
  if (editais.length > 0) {
    sendDailyReport(mailTo[0], editais).catch(console.log);
    console.log(editais);
  }
});

app.listen(1313);
