const URL_FILE_ID = `09032022`;
const URL = `https://liceum28.nnov.ru/files/menu-${URL_FILE_ID}.pdf`;
// const URL = "http://www.liceum28.nnov.ru/wp-includes/ms-files.php?file=menu-09032022.pdf";
console.log(`DATA_GET_URL = ${URL}`);


fetch(URL)
  .then(res => res.ok ? res : Promise.reject(res))
  .then(data => console.log('+', data))
  .catch(() => console.log('some error'));

// const getData = () => {
//   fetch(URL)
//     .then((response) => {
//       if (response.status >= 200 && response.status < 300) {
//         return true
//       } else {
//         let error = new Error(response.statusText);
//         error.response = response;
//         throw error;
//       }
//     })
//     // .then((response) => {
//     //   if (response.ok) {
//     //     console.log(`file exist`);
//     //   } else {
//     //     console.log('Не удалось найти файл с питанием');
//     //   }
//     // })
//     .catch((e) => {
//       return false;
//       console.log('error: ' + e.message);
//       console.log(e.response);
//     })
// };

// console.log(getData(URL));
