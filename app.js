const axios = require("axios");
const cheerio = require("cheerio");
const fillArray = require("./utils/fillArray");

const url = "http://www.novalima.mg.gov.br/portal-transparencia/editais";
const buscas = ["edital concorrencia", "edital tomada"];
var editais = [];

const webScraping = async () => {
  for (const busca of buscas) {
    await axios
      .get(url, {
        params: {
          busca: busca
        }
      })
      .then(response => {
        editais = editais.concat(fillArray(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }
  console.log(editais);
};

webScraping();
