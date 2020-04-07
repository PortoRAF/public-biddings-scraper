const checkWasYesterday = (date) => {
  var inputArr = date.split("/");
  var inputDate = new Date(inputArr[2] + "/" + inputArr[1] + "/" + inputArr[0]);
  var yesterdayDate = yesterday(new Date());

  return inputDate.setHours(0, 0, 0, 0) == yesterdayDate.setHours(0, 0, 0, 0);
};

const yesterday = (date) => {
  const dt = new Date(date);
  if (dt.getDay() === 1) {
    dt.setDate(dt.getDate() - 3).toString();
    return dt;
  }
  dt.setDate(dt.getDate() - 1).toString();
  return dt;
};

module.exports = checkWasYesterday;
