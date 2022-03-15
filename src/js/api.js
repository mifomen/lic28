if (document.querySelector('#cookie__button')) {
  const CookieButton = document.getElementById('cookie__button');
  const CookieDiv = document.querySelector('.cookie');
  CookieButton.addEventListener('click', function () {
    this.disabled = !0;
    CookieDiv.classList.add('vh');
    CookieDiv.style.cssText = 'display: none;', localStorage.CookieMemory = !0;
  });

  const ClearCokieMemory =  () => { delete localStorage.CookieMemory; }; //eslint-disable-line
  const proverka = () => {
    CookieDiv.classList.contains('vh') && void 0 === localStorage.CookieMemory ? (CookieDiv.classList.remove('vh'), CookieDiv.style.cssText = '') : CookieDiv.classList.contains('vh') || localStorage.CookieMemory;
  };
  document.addEventListener('DOMContentLoaded', proverka());
}

if (document.querySelector('.js-row')) {
  const allLink = document.querySelectorAll('.js-row');
  let i = 1;
  const css = 'background: #222; color: #bada55 '; //eslint-disable-line
  for (let link of allLink) {     //eslint-disable-line
    const href1 = link.querySelector('td:last-child a');
    if (href1.href[href1.href.length - 1] === '#') {
      //eslint-disable-next-line
      console.log(`${i}. ${link.querySelector('td').textContent} РП для ${link.querySelector('td:nth-child(2)').textContent} класса`)
      i++;
    }

    const href2 = link.querySelector('td a');
    if (href2.href[href2.href.length - 1] === '#') {
      //eslint-disable-next-line
      console.log(`${i}. ${link.querySelector('td').textContent} 'Аннотация отсутствует'  для ${link.querySelector('td:nth-child(2)').textContent} класса`)
      i++;
    }
  }
}


const DATA_OF_TEACHERS = [
  {
    'fio': 'Белова Наталья Андреевна',
    'classNOO': 1,
    'classSOO': 2,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'педагогическое образование',
    'levelOfStudy': 'ср/проф.',
    'qualification': 'бакалавр',
    'upQualification': '',
    'workExperienceInYear': '<span data-time=\'2012\' class=\'js-time\'>9 лет</span>',
    'workAsTeacherInYear': '<span data-time=\'2017\' class=\'js-time\'>4 лет</span>',
    'subjectsTaught': 'музыка',
    'academicDegree': '',
    'academicTitle': '',

  },
  {
    'fio': 'Булдина Нина Викторовна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'преподавание в начальных классах общеобразовательной школы',
    'levelOfStudy': 'Ср/проф.',
    'qualification': 'учитель начальных классов',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
    'workExperienceInYear': '<span data-time=\'1985\' class=\'js-time\'></span>',
    'workAsTeacherInYear': '<span data-time=\'1985\' class=\'js-time\'></span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Губина Юлия Сергеевна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'педагогическое образование',
    'levelOfStudy': 'высшее',
    'qualification': 'бакалавр',
    'upQualification': '',
    'workExperienceInYear': '<span data-time=\'2017\' class=\'js-time\'>5 лет</span>',
    'workAsTeacherInYear': '<span data-time=\'2017\' class=\'js-time\'>5 лет</span>',
    'subjectsTaught': 'физическая культура',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Жолоб Маргарита Александровна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'русский язык и литература',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель русского языка и литературы',
    'upQualification': '1С: Образование 4.0 Школа, Активные технологии, 2018',
    'workExperienceInYear': '<span data-time=\'1975\' class=\'js-time\'>46 лет</span>',
    'workAsTeacherInYear': '<span data-time=\'1975\' class=\'js-time\'>46 лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Земскова Наталья Александровна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'английский и немецкий язык',
    'levelOfStudy': 'высшее',
    'qualification': 'преподаватель английского и немецого языка',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018',
    'workExperienceInYear': '<span data-time=\'1998\' class=\'js-time\'>22 лет</span>',
    'workAsTeacherInYear': '<span data-time=\'1998\' class=\'js-time\'>22 лет</span>',
    'subjectsTaught': 'английский язык',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Ермилова Наталья Вячеславовна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'фиология',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель французского и английского языка',
    'upQualification': '',
    'workExperienceInYear': '<span data-time=\'2014\' class=\'js-time\'>7 лет</span>',
    'workAsTeacherInYear': '<span data-time=\'2014\' class=\'js-time\'>7 лет</span>',
    'subjectsTaught': 'английский язык',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Кириллова Елена Николаевна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'психология',
    'levelOfStudy': ' ср/спец',
    'qualification': 'психолог. преподаватель психологии',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018',
    'workExperienceInYear': '<span data-time=\'1991\' class=\'js-time\'>31 лет</span>',
    'workAsTeacherInYear': '<span data-time=\'1991\' class=\'js-time\'>31 лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Лазарева Ирина Александровна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'педагогика и психология',
    'levelOfStudy': 'высшее',
    'qualification': 'педагог-психолог',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018',
    'workExperienceInYear': '<span data-time=\'2011\' class=\'js-time\'>10 лет</span>',
    'workAsTeacherInYear': '<span data-time=\'2011\' class=\'js-time\'>10 лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Новикова Ирина Маматхановна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'педагогика и методика начального образования',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель начальных классов',
    'upQualification': 'Методика преподавания ОРКСЭ в начальной школе, МЦДО ООО «Бакалавр-Магистр», 2019',
    'workExperienceInYear': '<span data-time=\'1991\' class=\'js-time\'>30  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'1991\' class=\'js-time\'>30  лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Петрова Татьяна Евгеньевна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'география и экология, профессиональная деятельность в сфере  общего образования',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель, учитель начальных классов',
    'upQualification': '',
    'workExperienceInYear': '<span data-time=\'2010\' class=\'js-time\'>11  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'2014\' class=\'js-time\'>7  лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Овчинникова Светлана Валентиновна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'педагогика методика начального образования',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель начальных классов',
    'upQualification': '1С: Образование 4.0 Школа, Активные технологии, 2018',
    'workExperienceInYear': '<span data-time=\'1990\' class=\'js-time\'>31  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'1993\' class=\'js-time\'>28  лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Реброва Наталья Дмитриевна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'педагогика и методика начального образования',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель начальных классов',
    'upQualification': '1С: Образование 4.0 Школа, Активные технологии, 2018',
    'workExperienceInYear': '<span data-time=\'1989\' class=\'js-time\'>32  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'1989\' class=\'js-time\'>29  лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Соколова Ирина Юрьевна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'педагогика и методика  начального образования',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель начальных классов',
    'upQualification': 'Методика преподавания ОРКСЭ в начальной школе, МЦДО ООО «Бакалавр-Магистр», 2019',
    'workExperienceInYear': '<span data-time=\'1991\' class=\'js-time\'>30  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'1991\' class=\'js-time\'>30  лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Страхова Анна Григорьевна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'педагогика и методика  начального образования',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель начальных классов',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
    'workExperienceInYear': '<span data-time=\'1991\' class=\'js-time\'>30  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'1991\' class=\'js-time\'>30  лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Широкова Евгения Анатольевна ',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'психология',
    'levelOfStudy': 'высшее',
    'qualification': 'психолог. преподаватель психологии',
    'upQualification': '',
    'workExperienceInYear': '<span data-time=\'2005\' class=\'js-time\'>16  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'2016\' class=\'js-time\'>6  лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Красичкова Наталья Анатольевна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': '(дефектологическое) образование',
    'levelOfStudy': 'высшее',
    'qualification': 'магистр',
    'upQualification': '',
    'workExperienceInYear': '<span data-time=\'2002\' class=\'js-time\'>19  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'2002\' class=\'js-time\'>8  лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Белозубова Юлия Андреевна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'психолого-педагогическое образование',
    'levelOfStudy': 'высшее',
    'qualification': 'магистр',
    'upQualification': '',
    'workExperienceInYear': '<span data-time=\'1998\' class=\'js-time\'>23  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'2019\' class=\'js-time\'>2  лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Бочкарева Ирина Федоровна',
    'classNOO': 1,
    'classSOO': 0,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': '',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель начальных классов',
    'upQualification': '',
    'workExperienceInYear': '<span data-time=\'2010\' class=\'js-time\'>11  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'2010\' class=\'js-time\'>11  лет</span>',
    'subjectsTaught': 'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Анурина Ольга Анатольевна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': ' биология',
    'levelOfStudy': 'высшее',
    'qualification': 'биолог',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях введения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018',
    'workExperienceInYear': '<span data-time=\'2005\' class=\'js-time\'>16  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'2005\' class=\'js-time\'>16  лет</span>',
    'subjectsTaught': 'биология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Байданова Светлана Геннадьевна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'английский и немецкий языки',
    'levelOfStudy': 'высшее',
    'qualification': 'преподаватель английского и немецкого языков, учитель средней школы',
    'upQualification': ' 1С: Образование 4.0 Школа, Активные технологии, 2018',
    'workExperienceInYear': '<span data-time=\'2005\' class=\'js-time\'>16  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'2005\' class=\'js-time\'>16  лет</span>',
    'subjectsTaught': 'английский язык',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Демина Ольга Евгеньевна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'стрелково-пушечное, артиллерийское и ракетное оружие.Педагогическое образование: учитель физики образовательной организации в условиях реализации ФГОС',
    'levelOfStudy': 'высшее',
    'qualification': 'инженер преподаватель физики в образовательной организации',
    'upQualification': '',
    'workExperienceInYear': '<span data-time=\'2019\' class=\'js-time\'>3  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'2019\' class=\'js-time\'>3  лет</span>',
    'subjectsTaught': 'физика',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Демина  Марина Юрьевна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'физика и астрономия',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель физики и астрономии',
    'upQualification': 'Методика обучения астрономии и астрофизике на уровне общего и среднего профессионального образования, ННГУ им.Лобачевского, 2018',
    'workExperienceInYear': '<span data-time=\'1990\' class=\'js-time\'>29  лет</span>',
    'workAsTeacherInYear': '<span data-time=\'1990\' class=\'js-time\'>29  лет</span>',
    'subjectsTaught': 'физика, астрономия',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Доманин Александр Анатольевич',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'история',
    'levelOfStudy': 'высшее',
    'qualification': 'историк, учитель истории и обществоведения',
    'upQualification': '«1С: Образование 4.0. Школа», ООО «Активные технологии», 2018',
    'workExperienceInYear': '<span data-time=\'1989\' class=\'js-time\'>32 года</span>',
    'workAsTeacherInYear': '<span data-time=\'1989\' class=\'js-time\'>32 года</span>',
    'subjectsTaught': 'история, обществознание',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Зефирова Софья Анатольевна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'русский язык и литература ',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель русского языка и литературы',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018',
    'workExperienceInYear': '<span data-time=\'1981\' class=\'js-time\'>40 года</span>',
    'workAsTeacherInYear': '<span data-time=\'1982\' class=\'js-time\'>39 года</span>',
    'subjectsTaught': 'история, обществознание',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Зыкина Ирина Анатольевна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'иностранный язык',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель иностранного языка',
    'upQualification': '1С: Образование 4.0 Школа, ООО Активные технологии, 2018',
    'workExperienceInYear': '<span data-time=\'2005\' class=\'js-time\'>16 года</span>',
    'workAsTeacherInYear': '<span data-time=\'2005\' class=\'js-time\'>16 года</span>',
    'subjectsTaught': 'английский язык',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Колесова Елена Владимировна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'русский язык и литература',
    'levelOfStudy': 'высшее',
    'qualification': 'филолог, преподаватель русского языка и литературы',
    'upQualification': '',
    'workExperienceInYear': '<span data-time=\'1990\' class=\'js-time\'>31 года</span>',
    'workAsTeacherInYear': '<span data-time=\'1990\' class=\'js-time\'>31 года</span>',
    'subjectsTaught': 'руский язык, литература, родной русский язык, родная русская литература',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Коченова Ольга Анатольевна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'биология и химия',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель химии и биологии ',
    'upQualification': 'Теория и методика преподавания предметов естественнонаучного цикла в условиях реализации ФГОС, НИРО, 2017',
    'workExperienceInYear': '<span data-time=\'1981\' class=\'js-time\'>40 года</span>',
    'workAsTeacherInYear': '<span data-time=\'1981\' class=\'js-time\'>40 года</span>',
    'subjectsTaught': 'биология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Метелкина Людмила Ивановна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 0,
    'dolzhnost': 'учитель',
    'special': 'физическая  культура спорт',
    'levelOfStudy': 'ср/проф',
    'qualification': 'преподаватель физической культуры спорта',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
    'workExperienceInYear': '<span data-time=\'1973\' class=\'js-time\'>48 года</span>',
    'workAsTeacherInYear': '<span data-time=\'1983\' class=\'js-time\'>38 года</span>',
    'subjectsTaught': 'биология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Мортин Владимир Викторович',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'командная тактическая продовольственного обеспечения педагогическое образование',
    'levelOfStudy': 'высшее',
    'qualification': 'офицер с высшим военноспециальным образованием инженер - экономист учитель физической культуры',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
    'workExperienceInYear': '<span data-time=\'1982\' class=\'js-time\'>39 года</span>',
    'workAsTeacherInYear': '<span data-time=\'2011\' class=\'js-time\'>10 лет</span>',
    'subjectsTaught': 'физическая культура',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Мочалова Екатерина Николаевна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'педагогическое образование',
    'levelOfStudy': 'высшее',
    'qualification': 'бакалавр',
    'upQualification': '«Первая Помощь», ФГРУ «МДЦ Артек», 2018',
    'workExperienceInYear': '<span data-time=\'2018\' class=\'js-time\'>3 года</span>',
    'workAsTeacherInYear': '<span data-time=\'2018\' class=\'js-time\'>3 лет</span>',
    'subjectsTaught': 'ОБЖ',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Муращенкова Марина Сергеевна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'радиофизика',
    'levelOfStudy': 'высшее',
    'qualification': 'магистр ',
    'upQualification': '«Первая Помощь», ФГРУ «МДЦ Артек», 2018',
    'workExperienceInYear': '<span data-time=\'2019\' class=\'js-time\'>3 года</span>',
    'workAsTeacherInYear': '<span data-time=\'2019\' class=\'js-time\'>3 года</span>',
    'subjectsTaught': 'математика, алгебра, геометрия',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Новожилов Антон Юрьевич',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'физическая культура',
    'levelOfStudy': 'высшее',
    'qualification': 'педагог  по физической культуре',
    'upQualification': '1С: Образование 4.0 Школа, Активные технлогии, 2018',
    'workExperienceInYear': '<span data-time=\'2016\' class=\'js-time\'>7 года</span>',
    'workAsTeacherInYear': '<span data-time=\'2016\' class=\'js-time\'>7 года</span>',
    'subjectsTaught': 'математика, алгебра, геометрия',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Сельверова Наталья Алексеевна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'иностранный язык (английский)',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель иностранного языка',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
    'workExperienceInYear': '<span data-time=\'2013\' class=\'js-time\'>8 года</span>',
    'workAsTeacherInYear': '<span data-time=\'2013\' class=\'js-time\'>8 года</span>',
    'subjectsTaught': 'английский язык',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Смирнова Кристина Олеговна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'педагогическое образование',
    'levelOfStudy': 'Ср/проф',
    'qualification': 'бакалавр',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
    'workExperienceInYear': '<span data-time=\'2012\' class=\'js-time\'>10 года</span>',
    'workAsTeacherInYear': '<span data-time=\'2012\' class=\'js-time\'>10 года</span>',
    'subjectsTaught': 'технология',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Тюрина Надежда Николаевна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'русский язык и литература',
    'levelOfStudy': 'высшее',
    'qualification': 'филолог, преподаватель',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
    'workExperienceInYear': '<span data-time=\'1978\' class=\'js-time\'>43 года</span>',
    'workAsTeacherInYear': '<span data-time=\'1978\' class=\'js-time\'>37 года</span>',
    'subjectsTaught': 'русский язык и литература',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Щербакова Мария Сергеевна',
    'classNOO': 0,
    'classSOO': 2,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'География, биология',
    'levelOfStudy': 'высшее',
    'qualification': 'Учитель географии и биологии',
    'upQualification': 'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
    'workExperienceInYear': '<span data-time=\'2010\' class=\'js-time\'>11 года</span>',
    'workAsTeacherInYear': '<span data-time=\'2010\' class=\'js-time\'>11 года</span>',
    'subjectsTaught': 'география',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Маркина Ольга Сергеевна',
    'classNOO': 0,
    'classSOO': 0,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'математика',
    'levelOfStudy': 'высшее',
    'qualification': 'математик преподаватель математики',
    'upQualification': 'Методика оценивания заданий с развернутыми ответами к ГИА-9, 2019',
    'workExperienceInYear': '<span data-time=\'1976\' class=\'js-time\'>29 года</span>',
    'workAsTeacherInYear': '<span data-time=\'1977\' class=\'js-time\'>29 года</span>',
    'subjectsTaught': 'математика, алгебра и начала анализа, геометрия',
    'academicDegree': '',
    'academicTitle': '',
  },
  {
    'fio': 'Мацокина Галина Федоровна',
    'classNOO': 0,
    'classSOO': 0,
    'classOOO': 3,
    'dolzhnost': 'учитель',
    'special': 'химия, биология ',
    'levelOfStudy': 'высшее',
    'qualification': 'учитель химии и биологии средней школы',
    'upQualification': ' «Наиболее сложные темы школьного курса химии в заданиях ЕГЭ», НИРО, 2018',
    'workExperienceInYear': '<span data-time=\'1967\' class=\'js-time\'>54 года</span>',
    'workAsTeacherInYear': '<span data-time=\'1971\' class=\'js-time\'>50 года</span>',
    'subjectsTaught': 'химия',
    'academicDegree': '',
    'academicTitle': '',
  },
];


if (document.querySelector('.parent')) {
  const sortByFIO = (a, b) => {
    if (a.fio < b.fio) { return -1; }
    if (a.fio > b.fio) { return 1; }
    return 0;
  };

  const renderPostOfTeachers = (renderPosts, levelEducation) => {

    // levelEducation => 1= HOO 2 = OOO 3 = COO  4 = HOO&OOO 5 = OOO&COO
    const postsListElement = document.querySelector('.parent');
    postsListElement.innerHTML = '';
    // const postsTemplate = document.querySelector('#teacher');
    const postFragment = document.createDocumentFragment();

    renderPosts.forEach((post) => {

      if (post.classNOO === levelEducation || post.classSOO === levelEducation && post.classSOO === levelEducation || post.classOOO === levelEducation) {

        const cardTeacher = document.createElement('li');
        cardTeacher.classList.add('fz18');
        const cardTeacherFIO = document.createElement('span');
        cardTeacherFIO.innerHTML = `${post.fio} <br>`;
        cardTeacher.appendChild(cardTeacherFIO);

        const cardTeacherDOL = document.createElement('span');
        cardTeacherDOL.innerHTML = `<strong>Занимаемая должность:</strong> ${post.dolzhnost} <br>`;
        cardTeacher.appendChild(cardTeacherDOL);

        const cardTeacherPost = document.createElement('span');
        cardTeacherPost.innerHTML = `<strong>Уровень образование:</strong> ${post.levelOfStudy} <br>`;
        cardTeacher.appendChild(cardTeacherPost);

        if (post.special !== '') {
          const cardTeacherspecial = document.createElement('span');
          cardTeacherspecial.innerHTML = `<strong>Направленеие подготовки:</strong> ${post.special}<br>`;
          cardTeacher.appendChild(cardTeacherspecial);
        }

        if (post.qualification !== '') {
          const cardTeacherQualification = document.createElement('span');
          cardTeacherQualification.innerHTML = `<strong>Квалификация:</strong> ${post.qualification}<br>`;
          cardTeacher.appendChild(cardTeacherQualification);
        }

        if (post.upQualification !== '') {
          const cardTeacherupQualification = document.createElement('span');
          cardTeacherupQualification.innerHTML = `<strong>Повышение квалификации:</strong> ${post.upQualification}<br>`;
          cardTeacher.appendChild(cardTeacherupQualification);
        }
        if (post.academicDegree !== '') {
          const cardTeacherAcademicDegree = document.createElement('span');
          cardTeacherAcademicDegree.innerHTML = `<strong>Ученая степень:</strong> ${post.academicDegree}<br>`;
          cardTeacher.appendChild(cardTeacherAcademicDegree);
        }

        if (post.academicTitle !== '') {
          const cardTeacherAcademicTitle = document.createElement('span');
          cardTeacherAcademicTitle.innerHTML = `<strong>Ученое звание:</strong> ${post.academicTitle}<br>`;
          cardTeacher.appendChild(cardTeacherAcademicTitle);
        }


        const cardTeacherworkExperienceInYear = document.createElement('span');
        cardTeacherworkExperienceInYear.innerHTML = `<strong>Общий стаж работы:</strong> ${post.workExperienceInYear}<br>`;
        cardTeacher.appendChild(cardTeacherworkExperienceInYear);


        const cardTeacherworkAsTeacherInYear = document.createElement('span');
        cardTeacherworkAsTeacherInYear.innerHTML = `<strong>Стаж работы по специальности:</strong> ${post.workAsTeacherInYear}<br>`;
        cardTeacher.appendChild(cardTeacherworkAsTeacherInYear);

        const cardTeachersubjectsTaught = document.createElement('span');
        cardTeachersubjectsTaught.innerHTML = `<strong>Преподоваемые учебные предметы:</strong> ${post.subjectsTaught}<br>`;
        cardTeacher.appendChild(cardTeachersubjectsTaught);

        postFragment.appendChild(cardTeacher);
      }
    });
    postsListElement.appendChild(postFragment);
  };


  const LEVEL_TEACHER = document.querySelector('.parent').getAttribute('data-teacher');
  DATA_OF_TEACHERS.sort(sortByFIO);

  renderPostOfTeachers(DATA_OF_TEACHERS, parseInt(LEVEL_TEACHER, 10));


}

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
    if (Math.round(Math.ceil(new Date(`${dateTwo}`).getTime() - new Date(`${dateOne}`).getTime()) / (1000 * 3600 * 24)) >= 0) {
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

  const arrayMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  const arrayDaysNoFoodLowSchool = ['04092021', '11092021', '18092021', '25092021', '02102021', '09102021', '16102021', '23102021', '30102021', '06112021', '13112021', '20112021', '27112021', '04122021', '11122021', '18122021', '25122021', '15012022', '22012022', '29012022', '05022022', '12022022', '19022022', '26022022', '12032022', '19032022', '26032022', '02042022', '09042022', '16042022', '23042022', '30042022', '07052022', '21052022', '28052022'];

  const arrayDaysNoFoodHighSchool = ['05092021', '12092021', '19092021', '26092021', '03102021', '10102021', '17102021', '24102021', '31102021', '07112021', '14112021', '21112021', '28112021', '05122021', '12122021', '19122021', '26122021', '01012022', '02012022', '03012022', '04012022', '05012022', '06012022', '07012022', '08012022', '09012022', '16012022', '2312022', '30012022', '06022022', '13022022', '20022022', '27022022', '06032022', '13032022', '20032022', '27032022', '03042022', '10042022', '17042022', '24042022', '01052022', '08052022', '15052022', '22052022', '29052022', '30052022'];

  const spoilerForMenuFilesHigh = document.querySelector('.js-food-menu-high');
  const spoilerForMenuFilesLow = document.querySelector('.js-food-menu-low');

  document.querySelector('.js-food-menu-high summary').textContent = `Школьное меню 5-11 классы c 03.09.2021 по ${new Date().toLocaleDateString()}`;

  document.querySelector('.js-food-menu-low summary').textContent = `Школьное меню 1-4 классы  c 03.09.2021 по ${new Date().toLocaleDateString()}`;

  document.querySelector('.js-menu-food-one').remove();
  document.querySelector('.js-menu-food-two').remove();
  // spoilerForMenuFilesHigh.innerHTML = '';

  const createNewFileMenu = (urlFile, levelEducation) => {
    const newMenuFileItemLink = document.createElement('div');
    newMenuFileItemLink.className = 'document__list';

    const iconFile = document.createElement('img');
    iconFile.src = 'https://www.liceum28.nnov.ru/files/pdf-icon.gif';
    iconFile.width = '52';
    iconFile.alt = 'picture';
    newMenuFileItemLink.appendChild(iconFile);

    const menuFileContent = document.createElement('div');
    menuFileContent.style.cssText = 'color: #000;';
    menuFileContent.className = 'document__content';

    const menuFileLink = document.createElement('a');
    menuFileLink.target = '_blank';
    menuFileLink.className = 'document__lead';
    menuFileLink.href = `https://liceum28.nnov.ru/files/menu-${urlFile}.pdf`;
    menuFileLink.rel = 'noopener';

    const menuFileLinkDescription = document.createElement('p');
    menuFileLinkDescription.className = 'document__description';
    menuFileLinkDescription.style.cssText = 'font-size: 14px; font-weight: 500;';

    if (urlFile.length === 9) {
      menuFileLink.textContent = 'Школьнок питание 1-4 класс'; //menu009032022.pdf началка
      menuFileLinkDescription.textContent = `Файл Adobe PDF, ~160 Кбайт. Дата размещения: ${parseInt(urlFile.slice(1, 3), 10)} ${arrayMonths[parseInt(urlFile.slice(3, 5), 10) - 1]} ${urlFile.slice(urlFile.length - 4, urlFile.length)}`;
    } else {
      menuFileLink.textContent = 'Школьнок питание 5-11 класс'; //menu09032022.pdf среднее звено
      menuFileLinkDescription.textContent = `Файл Adobe PDF, ~160 Кбайт. Дата размещения: ${parseInt(urlFile.slice(0, 2), 10)} ${arrayMonths[parseInt(urlFile.slice(2, 4), 10) - 1]} ${urlFile.slice(urlFile.length - 4, urlFile.length)}`;
    }

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

  let lastWorkDay = new Date(); // const lastWorkDay = new Date('06-01-2022');
  lastWorkDay.setDate(lastWorkDay.getDate() + 1); //add 1 day to today
  const start = new Date(`${spoilerForMenuFilesLow.getAttribute('data-food-start')}`);  //september 2 2021
  const finalDayOfWork = new Date(`${spoilerForMenuFilesLow.getAttribute('data-food-end')}`);

  if (finalDayOfWork - lastWorkDay < 0) { //es
    lastWorkDay = new Date(finalDayOfWork);
  }

  let loop = new Date(lastWorkDay);     // today

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

    const settingsOfFetch = {
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache',
    };

    if (arrayDaysNoFoodHighSchool.indexOf(nowDate) === -1) {
      const pathFullHighSchool = `https://www.liceum28.nnov.ru/wp-includes/ms-files.php?file=menu-${nowDate}.pdf`;

      fetch(pathFullHighSchool, settingsOfFetch).then(
        (successResponse) => {
          if (successResponse.status !== 200) {
            return null;
          } else {
            createNewFileMenu(nowDate, 1);
            return successResponse.formData();
          }
        }, //eslint-disable-next-line
        (failResponse) => {
          return null;
        },
      );
    }

    if ((arrayDaysNoFoodLowSchool.indexOf(`${nowDate}`) === -1 && arrayDaysNoFoodHighSchool.indexOf(nowDate) === -1)) {
      const pathFullLowSchool = `https://www.liceum28.nnov.ru/wp-includes/ms-files.php?file=menu-0${nowDate}.pdf`;

      fetch(pathFullLowSchool, settingsOfFetch).then(
        (successResponse) => {
          if (successResponse.status !== 200) {
            return null;
          } else {
            createNewFileMenu(`0${nowDate}`, 2);
            return successResponse.formData();
          }
        },//eslint-disable-next-line
        (failResponse) => { null; },
      );
    }

    const newDate = loop.setDate(loop.getDate() - 1);
    loop = new Date(newDate);
  }
}
