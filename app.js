const axios = require("axios");
const cheerio = require("cheerio");
const compareDate = require("./utils/compareDate");

const url = "http://www.novalima.mg.gov.br/portal-transparencia/editais";
var editais = [];

axios
  .get(url, {
    params: {
      busca: "edital concorrencia"
    }
  })
  .then(response => {
    const $ = cheerio.load(response.data);

    $(".file-description").each(function(i) {
      const entryDate = $(".file-date", $(this).parent())
        .text()
        .trim();
      if (compareDate(entryDate)) {
        editais[i] = {
          descricao: $(this)
            .text()
            .trim(),
          dataPubli: $(".file-date", $(this).parent())
            .text()
            .trim(),
          downloadLink: $(".divisor-vertical-left", $(this).parent())
            .children()
            .attr("href")
        };
      }
    });
    console.log(editais);
  })
  .catch(error => {
    console.log(error);
  });
