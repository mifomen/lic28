const URL_FILE_ID = `05032022`;
const URL = `https://liceum28.nnov.ru/files/menu-${URL_FILE_ID}.pdf`;

const getFileData = (URL) => {
  fetch(URL)
    // .then(res => res.ok ? true : false)
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((data) => {
      console.log("+", data);
    })
    .catch((e) => console.log(`some error ${e.message}`));
};

console.log(getFileData(URL));

async function getUsers(names) {
  let jobs = [];
  for (let name of names) {
    let job = fetch(URL).then(
      (successResponse) => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.blob();
        }
      },
      (failResponse) => {
        return null;
      }
    );
    jobs.push(names);
  }
  let results = await Promise.all(jobs);
  // console.log(jobs);
  return results;
}
const arrayMonths = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']

// console.log(getUsers(URL));
const start = new Date('09/02/2021');
console.log(start)
const end = new Date();

let i = 0;
let loop = new Date(start);
while(loop <= end){
 i+=1;

 let nowDate
if (loop.getDate() < 10) {
  nowDate = `0${loop.getDate()}${loop.getMonth()+1}${loop.getFullYear()}`;
} else {
  nowDate = `${loop.getDate()}${loop.getMonth()+1}${loop.getFullYear()}`;
}

const pathFile = `menu-${nowDate}.pdf`;
const pathFileLowSchool = `menu-0${nowDate}.pdf`;
console.log(`${pathFile}`)



   let newDate = loop.setDate(loop.getDate() + 1);
   loop = new Date(newDate);
}

const spoilerForMenuFiles = document.querySelector('.js-food-menu');
console.log(spoilerForMenuFiles);

const createNewFileMenu = () => {
  const newMenuFileItemLink = document.createElement('div')
  newMenuFileItemLink.className='document__list';

  const iconFile = document.createElement('img');
  iconFile.src="https://www.liceum28.nnov.ru/files/pdf-icon.gif";
  iconFile.width='52';
  iconFile.alt='picture';
  newMenuFileItemLink.appendChild(iconFile)

  const menuFileContent = document.createElement('div');
  menuFileContent.style.cssText = "color: #000;";
  menuFileContent.className='document__content';

  const menuFileLink = document.createElement('a');
  menuFileLink.target="_blank";
  menuFileLink.className = "document__lead";
  menuFileLink.href="https://liceum28.nnov.ru/files/menu-11032022.pdf";
  menuFileLink.rel="noopener";
  menuFileLink.textContent = 'Школьнок питание 5-11 класс'
  menuFileContent.appendChild(menuFileLink);

  const menuFileLinkDescription = document.createElement('p');
  menuFileLinkDescription.className = "document__description";
  menuFileLinkDescription.style.cssText="font-size: 14px; font-weight: 500;";
  menuFileLinkDescription.textContent = `Файл Adobe PDF, ~160 Кбайт. Дата размещения: 11 марта 2022`
  menuFileContent.appendChild(menuFileLinkDescription);
  newMenuFileItemLink.appendChild(menuFileContent)

  spoilerForMenuFiles.appendChild(newMenuFileItemLink)
}


// const allUrlsHigh = getUsers(pathFile);
// const allUrlsLow = getUsers(pathFileLowSchool)

console.log(allUrlsHigh);
createNewFileMenu(); createNewFileMenu();
