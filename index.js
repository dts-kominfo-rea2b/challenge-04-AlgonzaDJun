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
    // membuat array kosong
    let dateArray = [];

    // looping di dalam array dan parse tanggal
    for (const date of array) {
      const epochNotString = new Date(date).getTime() / 1000;
      epochNotString.toString();
      //memasukkan array yang sudah dibagi 1000 ke array kosong
      dateArray.push(epochNotString);
    }
    // men-short array dari terkecil ke terbesar
    dateArray.sort((a, b) => a - b);
    //mengembalikan string dengan tambahan "-"
    return dateArray.join("-");
  } else {
    //jika parameter kedua tidak null
    const epochNotString = new Date(array[index]).getTime() / 1000;
    // mengubah ke string dan return
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
