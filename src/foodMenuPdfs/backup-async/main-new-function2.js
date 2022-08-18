//liceum 28 nm food

if (document.querySelector('.js-food-menu-high') && document.querySelector('.js-food-menu-low')) {

  const delay = ms => {
    return new Promise (r => setTimeout(() => r (), ms))
  }

  async function getAsyncPdfFile(NAME_PDF_FILE) {
    console.log('fetch started....')
    const URL_FOR_FETCH = `https://www.liceum28.nnov.ru/wp-includes/ms-files.php?file=menu-${NAME_PDF_FILE}.pdf`;
    try {
      await delay(300)
      const response = await fetch(URL_FOR_FETCH)
      if (NAME_PDF_FILE === 9) {
        createNewFileMenu(NAME_PDF_FILE,1);
      } else {
        createNewFileMenu(NAME_PDF_FILE,2);
      }
      // console.log('response=',response)
    } catch (e) {
      // console.error('erros ',e)
    } finally {
    }
  }

  // const firstHead= document.querySelector('head').innerHTML;
  // const textDisableCache = `<meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
  // <meta http-equiv="pragma" content="no-cache" />
  // <meta http-equiv="expires" content="0" />`
  // document.querySelector('head').innerHTML=`${firstHead} ${textDisableCache}`;

  const arrayMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

  const arrayDaysNoFoodLowSchool = ['04092021', '11092021', '18092021', '25092021', '02102021', '09102021', '16102021', '23102021', '30102021', '06112021', '13112021', '20112021', '27112021', '04122021', '11122021', '18122021', '25122021', '15012022', '22012022', '29012022', '05022022', '12022022', '19022022', '26022022', '12032022', '19032022', '26032022', '02042022', '09042022', '16042022', '23042022', '30042022', '07052022', '21052022', '28052022'];

  const arrayDaysNoFoodHighSchool = ['05092021', '12092021', '19092021', '26092021', '03102021', '10102021', '17102021', '24102021', '31102021', '07112021', '14112021', '21112021', '28112021', '05122021', '12122021', '19122021', '26122021', '01012022', '02012022', '03012022', '04012022', '05012022', '06012022', '07012022', '08012022', '09012022', '16012022', '2312022', '30012022', '06022022', '13022022', '20022022', '27022022', '06032022', '13032022', '20032022', '27032022', '03042022', '10042022', '17042022', '24042022', '01052022', '08052022', '15052022', '22052022', '29052022', '30052022'];

  const spoilerForMenuFilesHigh = document.querySelector('.js-food-menu-high');
  const spoilerForMenuFilesLow = document.querySelector('.js-food-menu-low');

  const returnRightYear = () => {
    const nowYeardate = new Date();
    if ( nowYeardate.getMonth() >= 8 ) {
      return nowYeardate.getFullYear();
    }
    if ( nowYeardate.getMonth() < 8 ) {
      return nowYeardate.getFullYear()-1;
    }
  }


  document.querySelector('.js-food-menu-high summary').textContent = `Школьное меню 5-11 классы c 01.09.${returnRightYear()} по ${new Date().toLocaleDateString()}`;

  document.querySelector('.js-food-menu-low summary').textContent = `Школьное меню 1-4 классы  c 01.09.${returnRightYear()} по ${new Date().toLocaleDateString()}`;

  document.querySelector('.js-menu-food-one').remove();
  document.querySelector('.js-menu-food-two').remove();
  // spoilerForMenuFilesHigh.innerHTML = "";

  const createNewFileMenu = (urlFile) => {
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
      menuFileLink.textContent = 'Школьное питание 1-4 класс' //menu009032022.pdf началка
      menuFileLinkDescription.textContent = `Файл Adobe PDF, ~160 Кбайт. Дата размещения: ${parseInt(urlFile.slice(1, 3), 10)} ${arrayMonths[parseInt(urlFile.slice(3, 5), 10) - 1]} ${urlFile.slice(urlFile.length - 4, urlFile.length)}`
    } else {
      menuFileLink.textContent = 'Школьное питание 5-11 класс' //menu09032022.pdf среднее звено
      menuFileLinkDescription.textContent = `Файл Adobe PDF, ~160 Кбайт. Дата размещения: ${parseInt(urlFile.slice(0, 2), 10)} ${arrayMonths[parseInt(urlFile.slice(2, 4), 10) - 1]} ${urlFile.slice(urlFile.length - 4, urlFile.length)}`
    }

    menuFileContent.appendChild(menuFileLink);
    menuFileContent.appendChild(menuFileLinkDescription);
    newMenuFileItemLink.appendChild(menuFileContent)

    if (  urlFile.length === 9 ) {
      spoilerForMenuFilesLow.appendChild(newMenuFileItemLink)
    } else  {
      spoilerForMenuFilesHigh.appendChild(newMenuFileItemLink);
    }

  }

  const returnDate = (year,month,day) => {
    return new Date(year, month, day, 0, 0, 0, 0);
  }

  let end = 0;
  let start = 0;

  const currentDate = new Date();

  if ( currentDate.getMonth() >= 8 ) {
    end = returnDate(currentDate.getFullYear()+1,7,1);
    start = returnDate(currentDate.getFullYear(),9,1);
  } else {
    end = returnDate(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDay()+7) ;
    start = returnDate(currentDate.getFullYear()-1,8,1);
  }

  // const end = new Date('07/01/2022');
  // const start = new Date('09/01/2021');  //september 1 2021
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

    if (arrayDaysNoFoodHighSchool.indexOf(nowDate) === -1) {
      getAsyncPdfFile(nowDate)
    }

    if ((arrayDaysNoFoodLowSchool.indexOf(`${nowDate}`) === -1 && arrayDaysNoFoodHighSchool.indexOf(nowDate) === -1)) {
      getAsyncPdfFile(`0${nowDate}`)
    }
    await delay(200)
    let newDate = loop.setDate(loop.getDate() - 1);
    loop = new Date(newDate)
  }
}
