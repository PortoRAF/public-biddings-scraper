const cheerio = require("cheerio");
const compareDate = require("./compareDate");

const fillArray = data => {
  const $ = cheerio.load(data);
  let entries = [];
  $(".file-description").each(function(i) {
    var entryDate = $(".file-date", $(this).parent())
      .text()
      .trim();
    if (compareDate(entryDate)) {
      entries[i] = {
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
  return entries;
};

module.exports = fillArray;
