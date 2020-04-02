const cheerio = require("cheerio");
const compareDate = require("./compareDate");

const fillArray = data => {
  const $ = cheerio.load(data);
  let entries = [];
  let index = 0;
  $(".file-description").each(function() {
    var entryDate = $(".file-date", $(this).parent())
      .text()
      .trim();
    if (compareDate(entryDate)) {
      entries[index] = {
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
      index++;
    }
  });
  return entries;
};

module.exports = fillArray;
