const cheerio = require("cheerio");
const checkIsYesterday = require("./checkIsYesterday");

const processData = (data) => {
  const $ = cheerio.load(data);
  let entries = [];
  let index = 0;
  $(".file-description").each(function () {
    var entryDate = $(".file-date", $(this).parent()).text().trim();
    if (checkIsYesterday(entryDate)) {
      entries[index] = {
        description: $(this).text().trim(),
        date: $(".file-date", $(this).parent()).text().trim(),
        downloadLink: $(".divisor-vertical-left", $(this).parent())
          .children()
          .attr("href"),
      };
      index++;
    }
  });
  return entries;
};

module.exports = processData;
