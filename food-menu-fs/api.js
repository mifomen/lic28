const arrayMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

const spoilerForMenuFiles = document.querySelector('.js-food-menu');
// console.log(spoilerForMenuFiles);

// spoilerForMenuFiles.innerHTML = '<summary style="max-width: 450px">Школьное меню c 03.09.2021 по настоящее время</summary>';

spoilerForMenuFiles.innerHTML = "";
const createNewFileMenu = (urlFile) => {
  console.log('work')
  const newMenuFileItemLink = document.createElement('div')
  newMenuFileItemLink.className = 'document__list';

  const iconFile = document.createElement('img');
  iconFile.src = "https://www.liceum28.nnov.ru/files/pdf-icon.gif";
  iconFile.width = '52';
  iconFile.alt = 'picture';
  newMenuFileItemLink.appendChild(iconFile)

  const menuFileContent = document.createElement('div');
  menuFileContent.style.cssText = "color: #000;";
  menuFileContent.className = 'document__content';

  const menuFileLink = document.createElement('a');
  menuFileLink.target = "_blank";
  menuFileLink.className = "document__lead";
  menuFileLink.href = `https://liceum28.nnov.ru/files/menu-${urlFile}.pdf`;
  menuFileLink.rel = "noopener";

  const menuFileLinkDescription = document.createElement('p');
  menuFileLinkDescription.className = "document__description";
  menuFileLinkDescription.style.cssText = "font-size: 14px; font-weight: 500;";

  if (urlFile.length === 9) {
    menuFileLink.textContent = 'Школьнок питание 1-4 класс' //menu009032022.pdf началка
    menuFileLinkDescription.textContent = `Файл Adobe PDF, ~160 Кбайт. Дата размещения: ${parseInt(urlFile.slice(1, 3), 10)} ${arrayMonths[parseInt(urlFile.slice(3, 5), 10) - 1]} ${urlFile.slice(urlFile.length - 4, urlFile.length)}`
  } else {
    menuFileLink.textContent = 'Школьнок питание 5-11 класс' //menu09032022.pdf среднее звено
    menuFileLinkDescription.textContent = `Файл Adobe PDF, ~160 Кбайт. Дата размещения: ${parseInt(urlFile.slice(0, 2), 10)} ${arrayMonths[parseInt(urlFile.slice(2, 4), 10) - 1]} ${urlFile.slice(urlFile.length - 4, urlFile.length)}`
  }

  menuFileContent.appendChild(menuFileLink);
  menuFileContent.appendChild(menuFileLinkDescription);
  newMenuFileItemLink.appendChild(menuFileContent)

  spoilerForMenuFiles.appendChild(newMenuFileItemLink)
}

async function getUsers(names) {
  let jobs = [];
  const pathFull = `https://www.liceum28.nnov.ru/wp-includes/ms-files.php?file=menu-${names}.pdf`;

  for (let name of names) {
    let job = fetch(pathFull).then(
      (successResponse) => {
        if (successResponse.status != 200) {
          return null;
        } else {
          createNewFileMenu(name);
          return successResponse.formData();
        }
      },
      (failResponse) => {
        return null;
      }
    );
    jobs.push(name);
  }
  let results = await Promise.all(jobs);
  // console.log(results);
  return results;
}



const end = new Date();
const start = new Date('09/02/2021');//september 2 2021

// console.log(start + end)
let loop = new Date(end);  // today

while (loop >= start) {

  let nowDate;
  if (loop.getDate() < 10 && loop.getMonth() > 9) {
    nowDate = `0${loop.getDate()}${loop.getMonth() + 1}${loop.getFullYear()}`;

  } else {
    if (loop.getDate() < 10 && loop.getMonth() < 10) {
      nowDate = `0${loop.getDate()}0${loop.getMonth() + 1}${loop.getFullYear()}`;
    } else {
      if (loop.getMonth() < 10 && loop.getDate() > 9) {
        nowDate = `${loop.getDate()}0${loop.getMonth() + 1}${loop.getFullYear()}`;

      } else {
        nowDate = `${loop.getDate()}${loop.getMonth() + 1}${loop.getFullYear()}`;
      }
    }
  }
  // console.log(`loop.getMonth()=${loop.getMonth()}`)



  const pathFile = `menu-${nowDate}.pdf`;
  const pathFileLowSchool = `menu-0${nowDate}.pdf`;
  // console.log(`${pathFile}`) перебираем все файлы по этмоу пути
  // console.log(`nowDate=${nowDate}`)

  const pathFullHighSchool = `https://www.liceum28.nnov.ru/wp-includes/ms-files.php?file=menu-${nowDate}.pdf`;
  const pathFullLowSchool = `https://www.liceum28.nnov.ru/wp-includes/ms-files.php?file=menu-0${nowDate}.pdf`;

  fetch(pathFullHighSchool).then(
    (successResponse) => {
      if (successResponse.status != 200) {
        return null;
      } else {
        createNewFileMenu(nowDate);
        return successResponse.formData();
      }
    },
    (failResponse) => {
      return null;
    }
  )


  fetch(pathFullLowSchool).then(
    (successResponse) => {
      if (successResponse.status != 200) {
        return null;
      } else {
        createNewFileMenu(`0${nowDate}`);
        return successResponse.formData();
      }
    },
    (failResponse) => {
      return null;
    }
  )
  // console.log(`nowDate=${nowDate}`);

  let newDate = loop.setDate(loop.getDate() - 1);
  // console.log(`newDate=${loop.getDate()}`)
  loop = new Date(newDate);
}
