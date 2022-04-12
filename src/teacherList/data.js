
class newTeacher {
  // constructor (options) {
  //   this.fio = options.fio;
  //   this.classNOO = options.classNOO;
  //   this.classSOO = options.classSOO;
  //   this.classOOO = options.classOOO;
  //   this.dolzhnost = options.dolzhnost;
  //   this.special = options.special;
  //   this.levelOfStudy = options.levelOfStudy;
  //   this.qualification = options.qualification;
  //   this.upQualification = options.upQualification;
  //   this.subjectsTaught = options.subjectsTaught;
  //   this.academicDegree = options.academicDegree;
  //   this.academicTitle = options.academicTitle;
  //   this.workExperienceInYearStart = options.workExperienceInYearStart;
  //   this.workAsTeacherInYearStart = options.workAsTeacherInYearStart;
  // }

  get workExperienceInYear() {
    return setTimeWords(new Date().getFullYear() - this.workExperienceInYearStart);
  }

  get workAsTeacherInYear () {
    return setTimeWords(new Date().getFullYear() - this.workAsTeacherInYearStart);
  }
}

// const DATA_OF_TEACHERS = [
//   {
//     fio: 'Белова Наталья Андреевна',
//     classNOO: 1,
//     classSOO: 2,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'педагогическое образование',
//     levelOfStudy: 'ср/проф.',
//     qualification: 'бакалавр',
//     upQualification: '',
//     subjectsTaught: 'музыка',
//     academicDegree: '',
//     academicTitle: '',
//     workExperienceInYearStart: 2012,
//     workAsTeacherInYearStart: 2017,
//   },
//   {
//     fio: 'Булдина Нина Викторовна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'преподавание в начальных классах общеобразовательной школы',
//     levelOfStudy: 'Ср/проф.',
//     qualification: 'учитель начальных классов',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
//     workExperienceInYearStart: 1985,
//     workAsTeacherInYearStart: 1985,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Губина Юлия Сергеевна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'педагогическое образование',
//     levelOfStudy: 'высшее',
//     qualification: 'бакалавр',
//     upQualification: '',
//     workExperienceInYearStart: 2017,
//     workAsTeacherInYearStart: 2017,
//     subjectsTaught: 'физическая культура',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Жолоб Маргарита Александровна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'русский язык и литература',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель русского языка и литературы',
//     upQualification: '1С: Образование 4.0 Школа, Активные технологии, 2018',
//     workExperienceInYearStart:1975,
//     workAsTeacherInYearStart: 1975,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Земскова Наталья Александровна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'английский и немецкий язык',
//     levelOfStudy: 'высшее',
//     qualification: 'преподаватель английского и немецого языка',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018',
//     workExperienceInYearStart:
//       1998,
//     workAsTeacherInYearStart: 1998,
//     subjectsTaught: 'английский язык',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Ермилова Наталья Вячеславовна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'фиология',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель французского и английского языка',
//     upQualification: '',
//     workExperienceInYearStart: 2014,
//     workAsTeacherInYearStart: 2014,
//     subjectsTaught: 'английский язык',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Кириллова Елена Николаевна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'психология',
//     levelOfStudy: ' ср/спец',
//     qualification: 'психолог. преподаватель психологии',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018',
//     workExperienceInYearStart:
//       1991,
//     workAsTeacherInYearStart: 1991,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Лазарева Ирина Александровна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'педагогика и психология',
//     levelOfStudy: 'высшее',
//     qualification: 'педагог-психолог',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018',
//     workExperienceInYearStart:
//       2011,
//     workAsTeacherInYearStart: 2011,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Новикова Ирина Маматхановна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'педагогика и методика начального образования',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель начальных классов',
//     upQualification:
//       'Методика преподавания ОРКСЭ в начальной школе, МЦДО ООО «Бакалавр-Магистр», 2019',
//     workExperienceInYearStart:
//       1991,
//     workAsTeacherInYearStart:
//       1991,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Петрова Татьяна Евгеньевна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special:
//       'география и экология, профессиональная деятельность в сфере  общего образования',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель, учитель начальных классов',
//     upQualification: '',
//     workExperienceInYearStart:
//       2010,
//     workAsTeacherInYearStart: 2014,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Овчинникова Светлана Валентиновна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'педагогика методика начального образования',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель начальных классов',
//     upQualification: '1С: Образование 4.0 Школа, Активные технологии, 2018',
//     workExperienceInYearStart:
//       1990,
//     workAsTeacherInYearStart:
//       1993,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Реброва Наталья Дмитриевна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'педагогика и методика начального образования',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель начальных классов',
//     upQualification: '1С: Образование 4.0 Школа, Активные технологии, 2018',
//     workExperienceInYearStart:
//       1989,
//     workAsTeacherInYearStart:
//       1989,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Соколова Ирина Юрьевна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'педагогика и методика  начального образования',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель начальных классов',
//     upQualification:
//       'Методика преподавания ОРКСЭ в начальной школе, МЦДО ООО «Бакалавр-Магистр», 2019',
//     workExperienceInYearStart:
//       1991,
//     workAsTeacherInYearStart:
//       1991,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Страхова Анна Григорьевна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'педагогика и методика  начального образования',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель начальных классов',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
//     workExperienceInYearStart:
//       1991,
//     workAsTeacherInYearStart:
//       1991,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Широкова Евгения Анатольевна ',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'психология',
//     levelOfStudy: 'высшее',
//     qualification: 'психолог. преподаватель психологии',
//     upQualification: '',
//     workExperienceInYearStart:
//       2005,
//     workAsTeacherInYearStart: 2016,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Красичкова Наталья Анатольевна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: '(дефектологическое) образование',
//     levelOfStudy: 'высшее',
//     qualification: 'магистр',
//     upQualification: '',
//     workExperienceInYearStart:
//       2002,
//     workAsTeacherInYearStart: 2002,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Белозубова Юлия Андреевна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'психолого-педагогическое образование',
//     levelOfStudy: 'высшее',
//     qualification: 'магистр',
//     upQualification: '',
//     workExperienceInYearStart:
//       1998,
//     workAsTeacherInYearStart: 2019,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Бочкарева Ирина Федоровна',
//     classNOO: 1,
//     classSOO: 0,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: '',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель начальных классов',
//     upQualification: '',
//     workExperienceInYearStart:
//       2010,
//     workAsTeacherInYearStart:
//       2010,
//     subjectsTaught:
//       'русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Анурина Ольга Анатольевна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: ' биология',
//     levelOfStudy: 'высшее',
//     qualification: 'биолог',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях введения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018',
//     workExperienceInYearStart:
//       2005,
//     workAsTeacherInYearStart:
//       2005,
//     subjectsTaught: 'биология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Байданова Светлана Геннадьевна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'английский и немецкий языки',
//     levelOfStudy: 'высшее',
//     qualification:
//       'преподаватель английского и немецкого языков, учитель средней школы',
//     upQualification: ' 1С: Образование 4.0 Школа, Активные технологии, 2018',
//     workExperienceInYearStart:
//       2005,
//     workAsTeacherInYearStart:
//       2005,
//     subjectsTaught: 'английский язык',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Демина Ольга Евгеньевна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special:
//       'стрелково-пушечное, артиллерийское и ракетное оружие.Педагогическое образование: учитель физики образовательной организации в условиях реализации ФГОС',
//     levelOfStudy: 'высшее',
//     qualification: 'инженер преподаватель физики в образовательной организации',
//     upQualification: '',
//     workExperienceInYearStart:
//       2019,
//     workAsTeacherInYearStart: 2019,
//     subjectsTaught: 'физика',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Демина  Марина Юрьевна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'физика и астрономия',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель физики и астрономии',
//     upQualification:
//       'Методика обучения астрономии и астрофизике на уровне общего и среднего профессионального образования, ННГУ им.Лобачевского, 2018',
//     workExperienceInYearStart:
//       1990,
//     workAsTeacherInYearStart:
//       1990,
//     subjectsTaught: 'физика, астрономия',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Доманин Александр Анатольевич',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'история',
//     levelOfStudy: 'высшее',
//     qualification: 'историк, учитель истории и обществоведения',
//     upQualification:
//       '«1С: Образование 4.0. Школа», ООО «Активные технологии», 2018',
//     workExperienceInYearStart:
//       1989,
//     workAsTeacherInYearStart:
//       1989,
//     subjectsTaught: 'история, обществознание',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Зефирова Софья Анатольевна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'русский язык и литература ',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель русского языка и литературы',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018',
//     workExperienceInYearStart:
//       1981,
//     workAsTeacherInYearStart:
//       1982,
//     subjectsTaught: 'история, обществознание',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Зыкина Ирина Анатольевна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'иностранный язык',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель иностранного языка',
//     upQualification: '1С: Образование 4.0 Школа, ООО Активные технологии, 2018',
//     workExperienceInYearStart:
//       2005,
//     workAsTeacherInYearStart:
//       2005,
//     subjectsTaught: 'английский язык',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Колесова Елена Владимировна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'русский язык и литература',
//     levelOfStudy: 'высшее',
//     qualification: 'филолог, преподаватель русского языка и литературы',
//     upQualification: '',
//     workExperienceInYearStart:
//       1990,
//     workAsTeacherInYearStart:
//       1990,
//     subjectsTaught:
//       'руский язык, литература, родной русский язык, родная русская литература',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Коченова Ольга Анатольевна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'биология и химия',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель химии и биологии ',
//     upQualification:
//       'Теория и методика преподавания предметов естественнонаучного цикла в условиях реализации ФГОС, НИРО, 2017',
//     workExperienceInYearStart:
//       1981,
//     workAsTeacherInYearStart:
//       1981,
//     subjectsTaught: 'биология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Метелкина Людмила Ивановна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 0,
//     dolzhnost: 'учитель',
//     special: 'физическая  культура спорт',
//     levelOfStudy: 'ср/проф',
//     qualification: 'преподаватель физической культуры спорта',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
//     workExperienceInYearStart:
//       1973,
//     workAsTeacherInYearStart:
//       1983,
//     subjectsTaught: 'биология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Мортин Владимир Викторович',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special:
//       'командная тактическая продовольственного обеспечения педагогическое образование',
//     levelOfStudy: 'высшее',
//     qualification:
//       'офицер с высшим военноспециальным образованием инженер - экономист учитель физической культуры',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
//     workExperienceInYearStart:
//       1982,
//     workAsTeacherInYearStart: 2011,
//     subjectsTaught: 'физическая культура',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Мочалова Екатерина Николаевна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'педагогическое образование',
//     levelOfStudy: 'высшее',
//     qualification: 'бакалавр',
//     upQualification: '«Первая Помощь», ФГРУ «МДЦ Артек», 2018',
//     workExperienceInYearStart:
//       2018,
//     workAsTeacherInYearStart: 2018,
//     subjectsTaught: 'ОБЖ',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Муращенкова Марина Сергеевна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'радиофизика',
//     levelOfStudy: 'высшее',
//     qualification: 'магистр ',
//     upQualification: '«Первая Помощь», ФГРУ «МДЦ Артек», 2018',
//     workExperienceInYearStart:
//       2019,
//     workAsTeacherInYearStart: 2019,
//     subjectsTaught: 'математика, алгебра, геометрия',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Новожилов Антон Юрьевич',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'физическая культура',
//     levelOfStudy: 'высшее',
//     qualification: 'педагог  по физической культуре',
//     upQualification: '1С: Образование 4.0 Школа, Активные технлогии, 2018',
//     workExperienceInYearStart:
//       2016,
//     workAsTeacherInYearStart: 2016,
//     subjectsTaught: 'математика, алгебра, геометрия',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Сельверова Наталья Алексеевна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'иностранный язык (английский)',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель иностранного языка',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
//     workExperienceInYearStart:
//       2013,
//     workAsTeacherInYearStart: 2013,
//     subjectsTaught: 'английский язык',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Смирнова Кристина Олеговна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'педагогическое образование',
//     levelOfStudy: 'Ср/проф',
//     qualification: 'бакалавр',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
//     workExperienceInYearStart:
//       2012,
//     workAsTeacherInYearStart:
//       2012,
//     subjectsTaught: 'технология',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Тюрина Надежда Николаевна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'русский язык и литература',
//     levelOfStudy: 'высшее',
//     qualification: 'филолог, преподаватель',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
//     workExperienceInYearStart:
//       1978,
//     workAsTeacherInYearStart:
//       1978,
//     subjectsTaught: 'русский язык и литература',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Щербакова Мария Сергеевна',
//     classNOO: 0,
//     classSOO: 2,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'География, биология',
//     levelOfStudy: 'высшее',
//     qualification: 'Учитель географии и биологии',
//     upQualification:
//       'Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019',
//     workExperienceInYearStart:
//       2010,
//     workAsTeacherInYearStart:
//       2010,
//     subjectsTaught: 'география',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Маркина Ольга Сергеевна',
//     classNOO: 0,
//     classSOO: 0,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'математика',
//     levelOfStudy: 'высшее',
//     qualification: 'математик преподаватель математики',
//     upQualification:
//       'Методика оценивания заданий с развернутыми ответами к ГИА-9, 2019',
//     workExperienceInYearStart:
//       1976,
//     workAsTeacherInYearStart:
//       1977,
//     subjectsTaught: 'математика, алгебра и начала анализа, геометрия',
//     academicDegree: '',
//     academicTitle: '',
//   },
//   {
//     fio: 'Мацокина Галина Федоровна',
//     classNOO: 0,
//     classSOO: 0,
//     classOOO: 3,
//     dolzhnost: 'учитель',
//     special: 'химия, биология ',
//     levelOfStudy: 'высшее',
//     qualification: 'учитель химии и биологии средней школы',
//     upQualification:
//       ' «Наиболее сложные темы школьного курса химии в заданиях ЕГЭ», НИРО, 2018',
//     workExperienceInYearStart:
//       1967,
//     workAsTeacherInYearStart:
//       1971,
//     subjectsTaught: 'химия',
//     academicDegree: '',
//     academicTitle: '',
//   },
// ];

//const newArry = new Array();

// for (const teacherItem of DATA_OF_TEACHERS) {
//   const newItem = new newTeacher ({
//     // fio: teacherItem.fio,
//     // classNOO: teacherItem.classNOO,
//     // classSOO: teacherItem.classSOO,
//     // classOOO: teacherItem.classOOO,
//     // dolzhnost: teacherItem.dolzhnost,
//     // special: teacherItem.special,
//     // levelOfStudy: teacherItem.levelOfStudy,
//     // qualification: teacherItem.qualification,
//     // upQualification: teacherItem.upQualification,
//     // subjectsTaught: teacherItem.subjectsTaught,
//     // academicDegree: teacherItem.academicDegree,
//     // academicTitle: teacherItem.academicTitle,
//     workExperienceInYearStart: teacherItem.workExperienceInYearStart,
//     workAsTeacherInYearStart: teacherItem.workAsTeacherInYearStart,
//   });
//   newArry.push(newItem);
// }

// for ( const DATA_OF_TEACHER of DATA_OF_TEACHERS) {
//   DATA_OF_TEACHER.workExperienceInYear = setTimeWords(new Date().getFullYear() - DATA_OF_TEACHER.workExperienceInYearStart);

//   DATA_OF_TEACHER.workAsTeacherInYear = setTimeWords(new Date().getFullYear() - DATA_OF_TEACHER.workAsTeacherInYearStart);
// }

const sortByFIO = (a, b) => {
  if (a.fio < b.fio) {
    return -1;
  }
  if (a.fio > b.fio) {
    return 1;
  }
  return 0;
};

// DATA_OF_TEACHERS.sort(sortByFIO);



function setTimeWords (numberYear) {
  const ageLastNumber = numberYear % 10;

  if (ageLastNumber === 0 || ageLastNumber >= 5 && ageLastNumber <= 9)
  {
    return `${numberYear} лет`;
  } else
  if (ageLastNumber >= 2 && ageLastNumber <= 4)
  {
    return `${numberYear} года`;
  } else {
    if (ageLastNumber > 10 && ageLastNumber < 15)
    {
      return `${numberYear} лет`;
    } else {
      if (numberYear % 100 > 10 && numberYear % 100 < 15)
      {
        return `${numberYear} лет`;
      } else {
        if (ageLastNumber === 1)
        {
          return `${numberYear} год`;
        }
      }
    }
  }
}

export {setTimeWords,sortByFIO};
