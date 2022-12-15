
// span with nowtime on all page
if (document.querySelector('.js-now-time')) {
  const allSpansWithNowTime = document.querySelectorAll('.js-now-time');
  for (const allSpanWithNowTime of allSpansWithNowTime) {
    allSpanWithNowTime.textContent = `${new Date().toLocaleDateString()}`;
  }
}

//food menu PDF
if (document.querySelector('.js-food-menu-high') && document.querySelector('.js-food-menu-low')) {
  //eslint-disable-next-line
  const daysLags = (dateOne, dateTwo) => {
    if (
      Math.round(Math.ceil(new Date(`${dateTwo}`).getTime() - new Date(`${dateOne}`).getTime()) /(1000 * 3600 * 24)) >= 0) {
      return true;
    }
    return false;
    // console.log(daysLag);
  };

  // const firstHead= document.querySelector('head').innerHTML;
  // const textDisableCache = `<meta http-equiv='cache-control' content='no-cache, no-store, must-revalidate' />
  // <meta http-equiv='pragma' content='no-cache' />
  // <meta http-equiv='expires' content='0' />`
  // document.querySelector('head').innerHTML=`${firstHead} ${textDisableCache}`;

  const arrayMonths = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];

  const spoilerForMenuFilesHigh = document.querySelector('.js-food-menu-high');
  const spoilerForMenuFilesLow = document.querySelector('.js-food-menu-low');

  spoilerForMenuFilesHigh.innerHTML = '';
  spoilerForMenuFilesLow.innerHTML = '';

  spoilerForMenuFilesLow.innerHTML = `<summary style='max-width: 550px'>Школьное меню 1-4 классы c 03.09.2021 по ${new Date().toLocaleDateString()}</summary>`;
  spoilerForMenuFilesHigh.innerHTML = `<summary style='max-width: 550px'>Школьное меню 5-11 классы c 03.09.2021 по ${new Date().toLocaleDateString()}</summary>`;

  // document.querySelector('.js-menu-food-one').remove();
  // document.querySelector('.js-menu-food-two').remove();
  // spoilerForMenuFilesHigh.innerHTML = '';

  const createNewFileMenu = (urlFile, levelEducation) => {
    const newMenuFileItemLink = document.createElement('div');
    newMenuFileItemLink.className = 'document__list';

    const iconFile = document.createElement('img');
    iconFile.src = 'https://www.liceum28.nnov.ru/files/xlsx-icon.gif';
    iconFile.width = '52';
    iconFile.alt = 'picture';
    newMenuFileItemLink.appendChild(iconFile);

    const menuFileContent = document.createElement('div');
    menuFileContent.style.cssText = 'color: #000;';
    menuFileContent.className = 'document__content';

    const menuFileLink = document.createElement('a');
    menuFileLink.target = '_blank';
    menuFileLink.className = 'document__lead';
    // https://www.liceum28.nnov.ru/food/2022-12-02-sm.xlsx
    menuFileLink.href = `https://liceum28.nnov.ru/food/${urlFile}.xlsx`;
    menuFileLink.rel = 'noopener';

    const menuFileLinkDescription = document.createElement('p');
    menuFileLinkDescription.className = 'document__description';
    menuFileLinkDescription.style.cssText = 'font-size: 14px; font-weight: 500;';

    if (levelEducation===2) {
      menuFileLink.textContent = 'Школьное питание 1-4 класс'; //menu009032022.pdf началка
      menuFileLinkDescription.textContent = `Файл XLS , ~16 Кбайт. Дата размещения:   ${parseInt(urlFile.slice(urlFile.length-5,urlFile.length-3),10)} ${arrayMonths[parseInt(urlFile.slice(5,7), 10)-1]} ${parseInt(urlFile.slice(0,4),10)}`;
      // console.log('arrayMonths[parseInt(urlFile.slice(5, 7), 10) ',parseInt(urlFile.slice(1, 5), 10))
    }

    if (levelEducation===1) {
      menuFileLink.textContent = 'Школьное питание 5-11 класс'; //menu009032022.pdf началка
      menuFileLinkDescription.textContent = `Файл XLS , ~16 Кбайт. Дата размещения:   ${parseInt(urlFile.slice(urlFile.length-5,urlFile.length-3),10)} ${arrayMonths[parseInt(urlFile.slice(5,7), 10)-1]} ${parseInt(urlFile.slice(0,4),10)}`;
      console.log('arrayMonths[parseInt(urlFile.slice(5, 7), 10) ',parseInt(urlFile.slice(1, 5), 10))
    }
    console.log("urlFile ",urlFile)

    menuFileContent.appendChild(menuFileLink);
    menuFileContent.appendChild(menuFileLinkDescription);
    newMenuFileItemLink.appendChild(menuFileContent);

    if (parseInt(levelEducation, 10) === 1) {
      spoilerForMenuFilesHigh.appendChild(newMenuFileItemLink);
    } else {
      if (parseInt(levelEducation, 10) === 2) {
        spoilerForMenuFilesLow.appendChild(newMenuFileItemLink);
      }
    }
  };

  // let lastWorkDay = new Date(); // const lastWorkDay = new Date('06-01-2022');
  // lastWorkDay.setDate(lastWorkDay.getDate() + 1); //add 1 day to today
  // const start = new Date(`${spoilerForMenuFilesLow.('data-food-start')}`);  //september 2 2021
  // const finalDayOfWork = new Date(`${spoilerForMenuFilesLow.getAttribute('data-food-end')}`);

  // if (finalDayOfWork - lastWorkDay < 0) { //es
  //   lastWorkDay = new Date(finalDayOfWork);
  // }

  // let loop = new Date(lastWorkDay);     // today

  // while (loop >= start) {
    let end;
    let start;
    start = new Date('09-01-2022');
    end = new Date('01-01-2023');
    // if (spoilerForMenuFilesLow.hasAttribute('data-food-start')) {
    //   start = new Date(spoilerForMenuFilesLow.dataset.foodStart);
    // } else {

    // }

    // if (spoilerForMenuFilesLow.hasAttribute('data-food-end')) {
    //   end = new Date(spoilerForMenuFilesLow.dataset.foodEnd)
    // } else {


    // }
    // start = new Date('05-15-2022'); //september 1 2021
    // end = new Date('06-01-2022');
  let loop = new Date(end); // today


  while (loop >= start) {
    // console.log(`loop = ${loop}`)
    let nowDate;
    let templateDate;
    let templateMonth;

    // console.log(`year = ${loop.getYear()}`)
     if (loop.getDate() < 10) {
       templateDate = `0${loop.getDate()}`
     }
     else {
       templateDate = loop.getDate();
     }

     if (loop.getMonth() < 10) {
       templateMonth= `0${loop.getMonth()}`;
     }
     else {
      templateMonth= `${loop.getMonth()}`
     }
     nowDate = `${loop.getFullYear()}-${templateMonth}-${templateDate}`;


    const settingsOfFetch = {
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache',
    };
    console.log("loop=",loop.getDay())
    if (loop.getDay() != 6 ) {
      // const pathFullHighSchool = `https://www.liceum28.nnov.ru/wp-includes/ms-files.php?file=menu-${nowDate}.pdf`;
      const pathFullHighSchool = `https://www.liceum28.nnov.ru/food/${nowDate}-ss.xlsx`;
      // console.log('pathFullHighSchool ',pathFullHighSchool)
      fetch(pathFullHighSchool, settingsOfFetch).then(
        (successResponse) => {
          if (successResponse.status !== 200) {
            return null;
          } else {
            createNewFileMenu(`${nowDate}-ss`, 1);
            return successResponse.formData();
          }
        }, //eslint-disable-next-line
        (failResponse) => {
          return null;
        },
      );
    }

    if ( loop.getDay() != 6 || loop.getDay() != 5 ) {
      // const pathFullLowSchool = `https://www.liceum28.nnov.ru/wp-includes/ms-files.php?file=menu-0${nowDate}.pdf`;
      const pathFullLowSchool = `https://www.liceum28.nnov.ru/food/${nowDate}-sm.xlsx`;
      fetch(pathFullLowSchool, settingsOfFetch).then(
        (successResponse) => {
          if (successResponse.status !== 200) {
            return null;
          } else {
            createNewFileMenu(`${nowDate}-sm`, 2);
            return successResponse.formData();
          }
        }, //eslint-disable-next-line
        (failResponse) => {
          null;
        },
      );
    }

    const newDate = loop.setDate(loop.getDate() - 1);
    loop = new Date(newDate);
    // console.log("loop ",loop)
  }
}
