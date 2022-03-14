
if (document.querySelector('.js-food-menu-high') && document.querySelector('.js-food-menu-low')) {

  const arrayMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

  const arrayDaysNoFoodLowSchool = ['04092021', '11092021', '18092021', '25092021', '02102021', '09102021', '16102021', '23102021', '30102021', '06112021', '13112021', '20112021', '27112021', '04122021', '11122021', '18122021', '25122021', '15012022', '22012022', '29012022', '05022022', '12022022', '19022022', '26022022', '12032022', '19032022', '26032022', '02042022', '09042022', '16042022', '23042022', '30042022', '07052022', '21052022', '28052022'];

  const arrayDaysNoFoodHighSchool = ['05092021', '12092021', '19092021', '26092021', '03102021', '10102021', '17102021', '24102021', '31102021', '07112021', '14112021', '21112021', '28112021', '05122021', '12122021', '19122021', '26122021', '01012022', '02012022', '03012022', '04012022', '05012022', '06012022', '07012022', '08012022', '09012022', '16012022', '2312022', '30012022', '06022022', '13022022', '20022022', '27022022', '06032022', '13032022', '20032022', '27032022', '03042022', '10042022', '17042022', '24042022', '01052022', '08052022', '15052022', '22052022', '29052022', '30052022'];

  const spoilerForMenuFilesHigh = document.querySelector('.js-food-menu-high');
  const spoilerForMenuFilesLow = document.querySelector('.js-food-menu-low');

  document.querySelector('.js-food-menu-high summary').textContent = `Школьное меню 5-11 классы c 03.09.2021 по ${new Date().toLocaleDateString()}`;

  document.querySelector('.js-food-menu-low summary').textContent = `Школьное меню 1-4 классы  c 03.09.2021 по ${new Date().toLocaleDateString()}`;

  document.querySelector('.js-menu-food-one').remove();
  document.querySelector('.js-menu-food-two').remove();
  // spoilerForMenuFilesHigh.innerHTML = "";

  const createNewFileMenu = (urlFile, levelEducation) => {
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

    if (parseInt(levelEducation) === 1) {
      spoilerForMenuFilesHigh.appendChild(newMenuFileItemLink);
    } else {
      if (parseInt(levelEducation) === 2) {
        spoilerForMenuFilesLow.appendChild(newMenuFileItemLink)
      }
    }
  }


  // console.log(typeof(spoilerForMenuFilesLow.getAttribute('data-food-start')));
  // console.log(spoilerForMenuFilesLow.getAttribute('data-food-end'));

  const end = new Date('06/01/2022');
  const start = new Date(`'09/01/2021'`);  //september 2 2021

  // const end = new Date(`${spoilerForMenuFilesLow.getAttribute('data-food-end')}`);
  // const start = new Date(`${spoilerForMenuFilesLow.getAttribute('data-food-start')}`);  //september 2 2021

  let loop = new Date(end);     // today

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

    const pathFile = `menu-${nowDate}.pdf`;
    const pathFileLowSchool = `menu-0${nowDate}.pdf`;

    if (arrayDaysNoFoodHighSchool.indexOf(nowDate) === -1) {
      const pathFullHighSchool = `https://www.liceum28.nnov.ru/wp-includes/ms-files.php?file=menu-${nowDate}.pdf`;

      fetch(pathFullHighSchool, {
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache' // *default, no-cache, reload, force-cache, only-if-cached
      }).then(
        (successResponse) => {
          if (successResponse.status != 200) {
            return null;
          } else {
            createNewFileMenu(nowDate, 1);
            return successResponse.formData();
          }
        },
        (failResponse) => {
          return null;
        }
      )
    }

    if ((arrayDaysNoFoodLowSchool.indexOf(`${nowDate}`) === -1 && arrayDaysNoFoodHighSchool.indexOf(nowDate) === -1)) {
      const pathFullLowSchool = `https://www.liceum28.nnov.ru/wp-includes/ms-files.php?file=menu-0${nowDate}.pdf`;

      fetch(pathFullLowSchool).then(
        (successResponse) => {
          if (successResponse.status != 200) {
            return null;
          } else {
            createNewFileMenu(`0${nowDate}`, 2);
            return successResponse.formData();
          }
        },
        (failResponse) => {
          return null;
        }
      )
    }

    let newDate = loop.setDate(loop.getDate() - 1);
    loop = new Date(newDate);
  }
}
