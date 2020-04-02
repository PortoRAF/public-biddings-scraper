const axios = require("axios");
const fillArray = require("./fillArray");

const webScraping = async (url, buscas, editais) => {
  editais = [];
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
  return editais;
};

module.exports = webScraping;
