// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (array, index) => {
  if (index == null) {
    let dateArray = [];
    let dateFix = [];

    for (let date of array) {
      let epochNotString = Date.parse(date);
      epochNotString /= 1000;
      dateArray.push(epochNotString);
    }

    let sortParseDate = dateArray.sort((a, b) => a - b);

    for (const date of sortParseDate) {
      const epoch = date.toString();
      dateFix.push(epoch);
    }
    return dateFix.join("-");
  } else {
    let epochNotString = Date.parse(`${array[index]}`);
    epochNotString /= 1000;
    const epoch = epochNotString.toString();
    return epoch;
  }
};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
