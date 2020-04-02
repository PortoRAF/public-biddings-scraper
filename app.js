const axios = require("axios");
const cheerio = require("cheerio");
const fillArray = require("./utils/fillArray");

const url = "http://www.novalima.mg.gov.br/portal-transparencia/editais";
var editais = [];

axios
  .get(url, {
    params: {
      busca: "edital concorrencia"
    }
  })
  .then(response => {
    editais = editais.concat(fillArray(response.data));
  })
  .catch(error => {
    console.log(error);
  });

axios
  .get(url, {
    params: {
      busca: "edital tomada"
    }
  })
  .then(response => {
    editais = editais.concat(fillArray(response.data));
  })
  .catch(error => {
    console.log(error);
  });

// console.log(editais);
