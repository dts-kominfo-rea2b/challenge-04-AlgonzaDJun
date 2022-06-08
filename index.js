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

  if (index == null ) {
    let dateFix = [];

    for (const date of array) {
      const epochNotString = Date.parse(date);
      const epoch = epochNotString.toString();
      dateFix.push(epoch);
    }

    return dateFix.join("-");

  } else {
    // return `${array}[${index}]`
    const epochNotString = Date.parse(`${array[index]}`);
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
