const URL = './teachers.json';
const getData = (onSuccess) => {
  fetch(URL)
    .then((response) => response.json())
    .then((teacherList) => {
      onSuccess(teacherList);
    });
};

// async function getData(teacherList) {
//   console.log('Starting getData...')
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
  if ( numberYear <= 0 ) {
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

  if (new Date().getYear() - thisTime.getYear() <= 0 ) {
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
  postsListElement.innerHTML = `
  <tr><th style="vertical-align: middle; text-align: center;">№</th>
    <th style="vertical-align: middle; text-align: center;">ФИО</th>
    <th style="vertical-align: middle; text-align: center;">Занимаемая должность (должности)</th>
    <th style="vertical-align: middle; text-align: center;">Уровень образования</th>
    <th style="vertical-align: middle; text-align: center;">Квалификация</th>
    <th style="vertical-align: middle; text-align: center;">Наименование направления подготовки и (или) специальности;</th>
    <th style="vertical-align: middle; text-align: center;">Ученая степень (при наличии);</th>
    <th style="vertical-align: middle; text-align: center;">Ученое звание (при наличии);</th>
    <th style="vertical-align: middle; text-align: center;">Повышение квалификации и (или) профессиональная переподготовка (при наличии)</th>
    <th style="vertical-align: middle; text-align: center;">Общий стаж работы</th>
    <th style="vertical-align: middle; text-align: center;">Стаж работы по специальности</th>
    <th style="vertical-align: middle; text-align: center;">Преподаваемые учебные предметы, курсы, дисциплины (модули)</th>
  </tr>`;
  let nowNumberOfFio = 0;
  // const postsTemplate = document.querySelector('#teacher');
  const postFragment = document.createDocumentFragment();

  renderPosts.forEach((post) => {
    if ( (post.classNOO === levelEducation || post.classSOO === levelEducation || post.classOOO === levelEducation) && post.show === "true" ) {
      const cardTeacher = document.createElement('tr');
      cardTeacher.classList.add('fz18');

      const cardTeacherNumber = document.createElement('td');
      cardTeacherNumber.innerHTML = `${++nowNumberOfFio}`;
      cardTeacher.appendChild(cardTeacherNumber);

      const cardTeacherFIO = document.createElement('td');
      cardTeacherFIO.innerHTML = `${post.fio} `;
      cardTeacher.appendChild(cardTeacherFIO);

{/* <strong>Занимаемая должность:</strong>  */}
      const cardTeacherDolzhnost = document.createElement('td');
      cardTeacherDolzhnost.innerHTML = `${post.dolzhnost} `;
      cardTeacherDolzhnost.classList.add('ta-c')
      cardTeacher.appendChild(cardTeacherDolzhnost);

{/* <strong>Уровень образование:</strong>  */}

      const cardTeacherLevelStudy = document.createElement('td');
      cardTeacherLevelStudy.innerHTML = `${post.levelStudy} `;
      cardTeacherLevelStudy.classList.add('ta-c')
      cardTeacher.appendChild(cardTeacherLevelStudy);
{/* <strong>Квалификация:</strong>  */}

      if (post.qualification !== '' && post.qualification !== undefined) {
        const cardTeacherQualification = document.createElement('td');
        cardTeacherQualification.classList.add('ta-c')
        cardTeacherQualification.innerHTML = 'Нет Квалификация';
        if (post.qualification === "" || post.qualification == undefined) {
          cardTeacherQualification.innerHTML = `${post.qualification}`;
        }
        cardTeacher.appendChild(cardTeacherQualification);
      }
{/* <strong>Наименование направления подготовки и (или) специальности:</strong> */}
      if (post.directionStudy !== '' && post.directionStudy !== undefined) {
        const cardTeacherDirectionStudy = document.createElement('td');
        cardTeacherDirectionStudy.classList.add('ta-c');
        cardTeacherDirectionStudy.innerHTML = ` ${post.directionStudy}`;
        cardTeacher.appendChild(cardTeacherDirectionStudy);
      }
{/* <strong>Ученая степень:</strong>  */}
      if (post.academicDegree === '' || post.academicDegree !== undefined) {
        const cardTeacherAcademicDegree = document.createElement('td');
        cardTeacherAcademicDegree.classList.add('ta-c');
      //  cardTeacherAcademicDegree.innerHTML = `${post.academicDegree} Нет `;
        cardTeacherAcademicDegree.innerHTML = `Нет`;
        cardTeacher.appendChild(cardTeacherAcademicDegree);
      }
        // <strong>Ученое звание:</strong>
      if (post.academicTitle === '' || post.academicTitle !== undefined) {
        const cardTeacherAcademicTitle = document.createElement('td');
        cardTeacherAcademicTitle.classList.add('ta-c');
        // cardTeacherAcademicTitle.innerHTML = `${post.academicTitle} Нет`;
        cardTeacherAcademicTitle.innerHTML = `Нет`;

        cardTeacher.appendChild(cardTeacherAcademicTitle);
      }

//<strong>Повышение квалификации:</strong>
      if (post.upQualification === '' || post.upQualification !== undefined) {
        const cardTeacherupQualification = document.createElement('td');
        cardTeacherupQualification.innerHTML = ` ${post.upQualification} Нет `;
        cardTeacher.appendChild(cardTeacherupQualification);
      }
      //<strong>Общий стаж работы:</strong>
      const cardTeacherworkExperienceInYear = document.createElement('td');
      cardTeacherworkExperienceInYear.innerHTML = `${setTimeWordYear(new Date().getFullYear() - post.workExperienceInYearStart)}`;
      cardTeacherworkExperienceInYear.classList.add('ta-c')
      cardTeacher.appendChild(cardTeacherworkExperienceInYear);

      // <strong>Стаж работы по специальности:</strong>
      const cardTeacherworkAsTeacherInYear = document.createElement('td');
      cardTeacherworkAsTeacherInYear.innerHTML = ` ${setTimeWordYear(new Date().getFullYear() - post.workAsTeacherInYearStart)}`;
      cardTeacherworkAsTeacherInYear.classList.add('ta-c')
      cardTeacher.appendChild(cardTeacherworkAsTeacherInYear);

      //expirience teacher with month
      // const cardTeacherworkExperienceInYearWithMonths = document.createElement('td');
      // cardTeacherworkExperienceInYearWithMonths.innerHTML = `<strong>Общий стаж работы:</strong> ${checkSummerTimeWithMonths(post.workExperienceInYearStart)}`;
      // cardTeacher.appendChild(cardTeacherworkExperienceInYearWithMonths);

      // const cardTeacherworkAsTeacherInYearWithMonths = document.createElement('td');
      // cardTeacherworkAsTeacherInYearWithMonths.innerHTML = `<strong>Стаж работы по специальности:</strong> ${checkSummerTimeWithMonths(post.workAsTeacherInYearStart)}`;
      // cardTeacher.appendChild(cardTeacherworkAsTeacherInYearWithMonths);

{/* <strong>Преподоваемые учебные предметы:</strong> */}
      const cardTeacherSubjectsTaught = document.createElement('td');
      cardTeacherSubjectsTaught.innerHTML = ` ${post.subjectsTaught}`;
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

getData((listArray) => {
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
