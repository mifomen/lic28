const URL_FILE_ID = `05032022`;
const URL = `https://liceum28.nnov.ru/files/menu-${URL_FILE_ID}.pdf`;

const getFileData = (URL) => {
fetch(URL)
  // .then(res => res.ok ? true : false)
  .then(res => res.ok ? res : Promise.reject(res))
  .then(data => { console.log('+', data)})
  .catch((e) => console.log(`some error ${e.message}`));
}

console.log(getFileData(URL));


async function getUsers(names) {
  let jobs = [];

  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}

console.log(getUsers(URL));


const nowTime = new Date();

console.log(`текущий день месяца ${nowTime.getDate()})
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