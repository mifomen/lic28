const URL = './teachers.json';
const geliata = (onSuccess) => {
  fetch(URL)
    .then((response) => response.json())
    .then((teacherList) => {
      onSuccess(teacherList);
    });
};

// async function geliata(teacherList) {
//   console.log('Starting geliata...')
//   try {
//     const response = await fetch(URL);
//     const teacherList = await response.json();
//     console.log(`data=${data}`);
//     return teacherList;
//   }
//   catch(errors) {
//     console.log(`errors=${errors}`);
//   }
// fetch(URL)
//   .then(() => response.json())
//   .then((teacherList) => {
//     onSuccess(teacherList);
//   });
// };

const sortByFIO = (a, b) => {
  if ( a.fio < b.fio ) {
    return -1;
  }
  if ( a.fio > b.fio ) {
    return 1;
  }
  return 0;
};

const setTimeWordYear = (numberYear) => {
  const ageLastNumber = numberYear % 10;
  // console.log(`numberYear %100 = ${numberYear %100}; ageLastNumber=${ageLastNumber}; numberYear=${numberYear}`)
  if ( numberYear <= 1 ) {
    return 'молодой специалист';
  }
  if ( ageLastNumber === 0 || ageLastNumber >= 5 && ageLastNumber <= 9 ) {
    return `${numberYear} лет`;
  }
  if ( numberYear >= 10 && numberYear <= 15 ) {
    return `${numberYear} лет`;
  }
  if ( ageLastNumber >= 2 && ageLastNumber <= 4 ) {
    return `${numberYear} года`; // Года || лет
  }
  if ( numberYear % 100 > 10 && numberYear % 100 < 15 ) {
    return `${numberYear} лет`;
  }
  if ( ageLastNumber === 1 ) {
    return `${numberYear} год`;
  }
};

const setTimeWordMonths = (numberMonth) => {
  if ( numberMonth === 1 ) {
    return `${numberMonth} месяц`;
  }
  if ( numberMonth >=2 &&  numberMonth <= 4) {
    return `${numberMonth} месяца`;
  }
  return `${numberMonth} месяцев`;
};

const checkSummerTimeWithMonths = (thisTimeString) => {
  const thisTime = new Date(`08-30-${thisTimeString}`);

  if (new Date().getYear() - thisTime.getYear() <= 1 ) {
    return 'молодой специалист';
  }

  const allMonths = ( new Date().getYear() * 12 + new Date().getMonth() + 1 ) - ( thisTime.getYear() * 12 + thisTime.getMonth() + 1 );

  const calcYears = Math.trunc ( allMonths / 12 );
  const calcMonth = Math.trunc ( allMonths % 12 );

  // console.log(`allMonths=${allMonths} calcYears=${calcYears} calcMonth=${calcMonth}`); //eslint-disable-line

  if ( calcYears <= 0 ) {
    return `${setTimeWordMonths(calcMonth)}`;
  }

  if (calcMonth === 0 || new Date().getMonth() === 7 || new Date().getMonth() === 8 || new Date().getMonth() === 9 ) {
    return `${setTimeWordYear(calcYears)}`;
  }
  return `${setTimeWordYear(calcYears)} и ${setTimeWordMonths(calcMonth)} `;
};

// const teacherTime = '1992'; //mm/dd/yyyy

// console.log(`resault = ${checkSummerTimeWithMonths(teacherTime)}`); //eslint-disable-line


const renderPostOfTeachers = (renderPosts, levelEducation) => {
  // levelEducation => 1= HOO 2 = OOO 3 = COO  4 = HOO&OOO 5 = OOO&COO
  const postsListElement = document.querySelector('.parent');
  // postsListElement.innerHTML = `
  // <tr><th style="font-size:18px; vertical-align: middle; text-align: center;">№</th>
  //   <th style="font-size:18px; vertical-align: middle; text-align: center;">ФИО</th>
  //   <th style="font-size:18px; vertical-align: middle; text-align: center;">Занимаемая должность (должности)</th>
  //   <th style="font-size:18px; vertical-align: middle; text-align: center;">Уровень образования</th>
  //   <th style="font-size:18px; vertical-align: middle; text-align: center;">Квалификация</th>
  //   <th style="font-size:18px; vertical-align: middle; text-align: center;">Наименование направления подготовки и (или) специальности</th>
  //   <th style="font-size:18px; vertical-align: middle; text-align: center;">Ученая степень</th>
  //   <th style="font-size:18px; vertical-align: middle; text-align: center;">Ученое звание</th>
  //   <th style="font-size:18px; vertical-align: middle; text-align: center;">Повышение квалификации и (или) профессиональная переподготовка (при наличии)</th>
  //   <th style="font-size:18px; vertical-align: middle; text-align: center;">Общий стаж работы</th>
  //   <th style="font-size:18px; vertical-align: middle; text-align: center;">Стаж работы по специальности</th>
  //   <th style="font-size:18px; vertical-align: middle; text-align: center;">Преподаваемые учебные предметы, курсы, дисциплины (модули)</th>
  // </tr>`;
  postsListElement.innerHTML ='';
  let nowNumberOfFio = 0;
  // const postsTemplate = document.querySelector('#teacher');
  const postFragment = document.createDocumentFragment();

  renderPosts.forEach((post) => {
    if ( (post.classNOO === levelEducation || post.classSOO === levelEducation || post.classOOO === levelEducation|| post.classVNE === levelEducation|| post.classDOP === levelEducation) && post.show === "true" ) {
      const cardTeacher = document.createElement('li');
      cardTeacher.classList.add('fz18');

      // const cardTeacherNumber = document.createElement('li');
      // cardTeacherNumber.innerHTML = `${++nowNumberOfFio}.`;
      // cardTeacher.appendChild(cardTeacherNumber);

      const cardTeacherFIO = document.createElement('span');
      cardTeacherFIO.innerHTML = `${post.fio} <br>`;
      cardTeacher.appendChild(cardTeacherFIO);

{/* <strong>Занимаемая должность:</strong>  */}
      const cardTeacherDolzhnost = document.createElement('span');
      cardTeacherDolzhnost.innerHTML = `<strong>Занимаемая должность (должности):</strong> ${post.dolzhnost};<br>`;
      // cardTeacherDolzhnost.classList.add('ta-c')
      cardTeacher.appendChild(cardTeacherDolzhnost);

{/* <strong>Уровень образование:</strong>  */}

      const cardTeacherLevelStudy = document.createElement('span');
      cardTeacherLevelStudy.innerHTML = `<strong>Уровень образования:</strong> ${post.levelStudy};<br>`;
      // cardTeacherLevelStudy.classList.add('ta-c')
      cardTeacher.appendChild(cardTeacherLevelStudy);
{/* <strong>Квалификация:</strong>  */}

      // if (post.qualification !== '' && post.qualification !== undefined) {
        const cardTeacherQualification = document.createElement('span');
        // cardTeacherQualification.classList.add('ta-c')
        cardTeacherQualification.innerHTML = 'Нет квалификации';
        if (post.qualification !== "" || post.qualification == undefined) {
          cardTeacherQualification.innerHTML = `<strong>Квалификация:</strong> ${post.qualification};<br>`;
        }
        cardTeacher.appendChild(cardTeacherQualification);
      // }
{/* <strong>Наименование направления подготовки и (или) специальности:</strong> */}
    const cardTeacherDirectionStudy = document.createElement('span');
    // cardTeacherDirectionStudy.classList.add('ta-c');
    cardTeacherDirectionStudy.innerHTML = 'Нет';
    if (post.directionStudy !== '' || post.directionStudy !== undefined) {
      cardTeacherDirectionStudy.innerHTML = `<strong>Наименование направления подготовки и (или) специальности:</strong> ${post.directionStudy};<br>`;
    }
    cardTeacher.appendChild(cardTeacherDirectionStudy);
    {/* <strong>Ученая степень:</strong>  */}

    const cardTeacherAcademicDegree = document.createElement('span');
    // cardTeacherAcademicDegree.classList.add('ta-c');
    cardTeacherAcademicDegree.innerHTML = 'Нет';
    if (post.academicDegree !== '' && post.academicDegree !== undefined) {
      cardTeacherAcademicDegree.innerHTML = `<strong>Ученая степень:</strong> ${post.academicDegree};<br>`;
    }
    cardTeacher.appendChild(cardTeacherAcademicDegree);

        // <strong>Ученое звание:</strong>
        const cardTeacherAcademicTitle = document.createElement('span');
        cardTeacherAcademicTitle.innerHTML = `Нет`;
      if (post.academicTitle !== '' && post.academicTitle !== undefined) {
        cardTeacherAcademicTitle.innerHTML = `<strong>Ученое звание:</strong> ${post.academicTitle};<br>`;

        cardTeacher.appendChild(cardTeacherAcademicTitle);
      }

      //<strong>Повышение квалификации:</strong>
      const cardTeacherupQualification = document.createElement('span');
      cardTeacherupQualification.innerHTML = 'Нет';
      if (post.upQualification !== '' && post.upQualification !== undefined) {
        cardTeacherupQualification.innerHTML = `<strong>Повышение квалификации и (или) профессиональная переподготовка:</strong><br>${post.upQualification};<br>`;
      }
      cardTeacher.appendChild(cardTeacherupQualification);

      //<strong>Общий стаж работы:</strong>
      const cardTeacherworkExperienceInYear = document.createElement('span');
      cardTeacherworkExperienceInYear.innerHTML = `<strong>Общий стаж работы:</strong> ${setTimeWordYear(new Date().getFullYear() - post.workExperienceInYearStart)};<br>`;
      // cardTeacherworkExperienceInYear.classList.add('ta-c')
      cardTeacher.appendChild(cardTeacherworkExperienceInYear);

      //
      const cardTeacherworkAsTeacherInYear = document.createElement('span');
      cardTeacherworkAsTeacherInYear.innerHTML = `<strong>Стаж работы по специальности:</strong> ${setTimeWordYear(new Date().getFullYear() - post.workAsTeacherInYearStart)}; <br>`;
      // cardTeacherworkAsTeacherInYear.classList.add('ta-c')
      cardTeacher.appendChild(cardTeacherworkAsTeacherInYear);

      //expirience teacher with month
      // const cardTeacherworkExperienceInYearWithMonths = document.createElement('span');
      // cardTeacherworkExperienceInYearWithMonths.innerHTML = `<strong>Общий стаж работы:</strong> ${checkSummerTimeWithMonths(post.workExperienceInYearStart)}`;
      // cardTeacher.appendChild(cardTeacherworkExperienceInYearWithMonths);

      // const cardTeacherworkAsTeacherInYearWithMonths = document.createElement('span');
      // cardTeacherworkAsTeacherInYearWithMonths.innerHTML = `<strong>Стаж работы по специальности:</strong> ${checkSummerTimeWithMonths(post.workAsTeacherInYearStart)}`;
      // cardTeacher.appendChild(cardTeacherworkAsTeacherInYearWithMonths);

{/* <strong>Преподоваемые учебные предметы:</strong> */}
      const cardTeacherSubjectsTaught = document.createElement('span');
      cardTeacherSubjectsTaught.innerHTML = `<strong>Преподаваемые учебные предметы, курсы, дисциплины (модули):</strong> ${post.subjectsTaught}<br>`;
      cardTeacher.appendChild(cardTeacherSubjectsTaught);

      postFragment.appendChild(cardTeacher);
    }
  });
  postsListElement.appendChild(postFragment);
  // const LEVEL_TEACHER = document.querySelector('.parent').getAttribute('data-teacher');


};

// if (document.querySelector('.js-level-education')) {
//   renderPostOfTeachers(DATA_OF_TEACHERS, parseInt(1, 10));
//   const chooseLevelEducation = document.querySelector('.js-level-education');
//   chooseLevelEducation.addEventListener('change', () => {
//     renderPostOfTeachers(DATA_OF_TEACHERS,parseInt(chooseLevelEducation.value, 10));
//   });
// }

geliata((listArray) => {
  // console.log(listArray);
  // for ( const listArrayItem of listArray) {
  //   listArrayItem.workExperienceInYear = setTimeWordYear(new Date().getFullYear() - listArrayItem.workExperienceInYearStart);

  //   listArrayItem.workAsTeacherInYear = setTimeWordYear(new Date().getFullYear() - listArrayItem.workAsTeacherInYearStart);
  // }
  renderPostOfTeachers(listArray.sort(sortByFIO), parseInt(1, 10));

  const chooseLevelEducation = document.querySelector('.js-level-education');
  chooseLevelEducation.addEventListener('change', () => {
    renderPostOfTeachers(listArray.sort(sortByFIO),parseInt(chooseLevelEducation.value, 10));
  });
});
