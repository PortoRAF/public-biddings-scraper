const axios = require("axios");
const processData = require("./processData");
const sendNotification = require("../emails/sendNotificaton");

const url = "http://www.novalima.mg.gov.br/portal-transparencia/editais";

const searchItems = ["edital concorrencia", "edital tomada"];

const mailToList = ["renatoafporto@gmail.com"];

const webScraping = async (url, searchItems) => {
  var biddings = [];
  for (const item of searchItems) {
    await axios
      .get(url, {
        params: {
          busca: item,
        },
      })
      .then((response) => {
        biddings = biddings.concat(processData(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // if (biddings.length > 0) {}
  sendNotification(biddings, mailToList.toString());
};

webScraping(url, searchItems);
