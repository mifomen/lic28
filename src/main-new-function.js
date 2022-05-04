'use strict'

let nanoid=(t=21)=>{
  let e="",r=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let n=63&r[t];e+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}
  return e
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.js-theme')) {
   document.querySelector('.js-theme').addEventListener('input', () => {
     if ( document.querySelector('.js-uuid').value.length <= 2) {
       document.querySelector('.js-uuid').value = nanoid();
       // document.querySelector('.js-uuid').disabled = true;
     }
   })
    document.querySelector('.js-uuid').addEventListener('focus', () => {
      if ( document.querySelector('.js-uuid').value.length <= 2) {
       document.querySelector('.js-uuid').value = nanoid();
      // document.querySelector('.js-uuid').disabled = true;
     }
   })
  }
});

let CookieButton = document.querySelector('#cookie__button')
let CookieDiv = document.querySelector(".cookie")

CookieButton.addEventListener("click", function() {
  this.disabled = true;
  CookieDiv.classList.add("vh")
  CookieDiv.style.cssText = "display: none;"
  localStorage.CookieMemory = !0
})
let proverka = function() {
  CookieDiv.classList.contains("vh") && void 0 === localStorage.CookieMemory ? (CookieDiv.classList.remove("vh"), CookieDiv.style.cssText = "") : CookieDiv.classList.contains("vh") || localStorage.CookieMemory
}

document.addEventListener("DOMContentLoaded", function() {
  proverka()
})

let  deleteCokie = function() {
  return delete localStorage.CookieMemory
}

// document.addEventListener("DOMContentLoaded", proverka);
// proverka();
// let WidgetButton = document.querySelector('.js-close-gosuslugi')
// let Widget = document.querySelector('.gosuslugi')
// WidgetButton.addEventListener('click', function (evt) {
//   this.disabled = true;
//   Widget.classList.add('vh')
//   Widget.style.cssText = "display: none;"
//   localStorage.setItem('WidgetClosed', 'true');
// })
// let deleteWidget = function () {
//   localStorage.removeItem('WidgetClosed')
//   return true
//   // return console.log('removeItemWidgetClosed')
// }
// // console.log( localStorage.getItem('WidgetClosed') ); // 1
// function readyWidget() {
//   if (!localStorage.getItem('WidgetClosed')) {
//     return Widget.classList.remove('vh')
//   }  else {
//    return Widget.classList.add('vh')
//  }
// }
// document.addEventListener("DOMContentLoaded", readyWidget);

//  div to div переносит информацию из одно дива в дргой который в шапке сайта



document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("#div1") &&  document.querySelector("#div2")) {

    let start = function (t1,t2) {
      let div1 = document.querySelector(t1);
      let div2 = document.querySelector(t2);
      div2.innerHTML = div1.innerHTML;
    }

    start('#div2', '#div1')
  }
});



let statusOfHidden = function (evt) {
  if (document.querySelector('#div2').getAttribute('data-local-reset')==='true') {
    delete localStorage.headerMsgClosed;
  }

  if (localStorage.getItem('headerMsgClosed')==='true') {
    return true;
  } else {

     if (document.querySelector('#div2').getAttribute('data-show-btn') ==='false') {
      document.querySelector('#div1 .header-msg__btn').classList.add('vh')
      document.querySelector('#div1 .header-msg__btn').style.cssText="display: none"
    }

     // ="true"

    if ( document.querySelector('#div2').getAttribute('data-hidden') ==='false') {
      document.querySelector('#div1').classList.remove('vh')
      document.querySelector('#div1').style.cssText=""
    }
    if ( document.querySelector('#div2').getAttribute('data-btn') ==='true') {

      console.log('headerMsgClosed= ' + localStorage.getItem('headerMsgClosed'))
      let closeBtns = document.querySelectorAll('.header-msg__btn');

      for (var closeBtn of closeBtns) {
        closeBtn.addEventListener('click', function() {
          localStorage.setItem('headerMsgClosed', 'true')
          this.parentNode.classList.add('vh')
          this.parentNode.style.cssText = "display: none;"
        })
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("#div1") &&  document.querySelector("#div2")) {
    statusOfHidden()
  }
}
)





   let ChengeTimeOnpage = function () {
    if (document.querySelector(".js-time")) {

       let TimeResault  = function (t1,t2) {
      return Number(t2) - Number(t1);
    }
    var old='';
    let LastAlphabet = function (NumberYear) {
      let ageLastNumber = NumberYear % 10;
    if (ageLastNumber == 0 || ageLastNumber >= 5 && ageLastNumber <= 9)
      { return old = "лет" } else
    if (ageLastNumber >= 2 && ageLastNumber <= 4)
      { return old = "года"} else {
    if (ageLastNumber > 10 && ageLastNumber < 15)
      {return old = "лет"} else {
    if (NumberYear % 100 > 10 && NumberYear % 100 < 15)
      { return old = "лет" } else {
    if (ageLastNumber == 1)
      { return old = "год" }
            }
          }
        }
      }

      let nowTime = new Date();
      nowTime = nowTime.getFullYear();
      let AllTimes=document.querySelectorAll(".js-time")
      for  (let AllTime of AllTimes) {
        if (AllTime.getAttribute('data-time')!=="false") {
        let NumberResault = TimeResault(AllTime.getAttribute('data-time'),nowTime)
        AllTime.textContent=`${NumberResault} ${LastAlphabet(NumberResault)}`;
      }
    }
  }

  }


  document.addEventListener("DOMContentLoaded", ChengeTimeOnpage())


  document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("#js-show-iframe-wrapper")) {
      let GosUslugi = document.querySelector("#js-show-iframe-wrapper")

      GosUslugi.classList.add("js-gos-wrapper")
// .cssText = "position: fixed; bottom: 0; z-index: 5; transition: 500ms ease;";
      let CloseBtn = document.createElement('button');
      // CloseBtn.style.cssText = "position: absolute; display: block; top: 25px; right: 25px; z-index: 106; width: 25px; height: 25px; background-color: green; border:0;";
      CloseBtn.classList.add("js-button-gos-close")
      CloseBtn.type="button"

      CloseBtn.addEventListener("click",function () {
        this.parentNode.cssText="display: none;"
        document.querySelector("body").removeChild(GosUslugi)
//
      })
      GosUslugi.append(CloseBtn);


window.addEventListener('scroll', function() {
  // document.querySelector('.desk-about-us__title').innerHTML = pageYOffset + 'px';
  let GosUslugi = document.querySelector("#js-show-iframe-wrapper")
  // let headerBtn = document.querySelector('.header__button');
  // console.log(pageYOffset);
  if(pageYOffset >= 50){
    // GosUslugi.style.cssText = "position: relative; bottom: 0; z-index: 5; transition: 500ms ease;";
     // GosUslugi.classList.add("js-gos-wrapper")
    GosUslugi.style.cssText = "";
    // header.classList.add('header--white-theme');
    // headerBtn.classList.add('header__button--white-theme');

  } else {
 // GosUslugi.classList.remove("js-gos-wrapper")
    GosUslugi.style.cssText = "position: fixed; bottom: 0; z-index: 5; transition: 500ms ease;";

  }
});




    }
  })

  //teacher распределение по реализующим образвоательным программам

const DATA_OF_TEACHERS = [
  {
    "fio": "Белова Наталья Андреевна",
    "classNOO": 1,
    "classSOO": 2,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "2",
    "levelOfStudy": "Ср/проф.",
    "qualification": "хоровое дирижирование, руководитель хора и творческого коллектива, преподаватель хоровых дисциплин, 2013",
    "upQualification": "",
    "workExperienceInYear": "<span data-time=\"2012\" class=\"js-time\"> – 9 лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2017\" class=\"js-time\"> – 4 лет</span>",
    "subjectsTaught": "музыка",
    "academicDegree": "",
    "academicTitle": ""

  },
  {
    "fio": "Булдина Нина Викторовна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "Ср/проф.",
    "qualification": "учитель начальных классов",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019",
    "workExperienceInYear": "<span data-time=\"1985\" class=\"js-time\"</span>",
    "workAsTeacherInYear": "<span data-time=\"1985\" class=\"js-time\"</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Губина Юлия Сергеевна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "",
    "upQualification": "",
    "workExperienceInYear": "<span data-time=\"2017\" class=\"js-time\"> – 5 лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2017\" class=\"js-time\"> – 5 лет</span>",
    "subjectsTaught": "физическая культура",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Жолоб Маргарита Александровна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "квалификация — учитель русского языка и литературы, 1984",
    "upQualification": "1С: Образование 4.0 Школа, Активные технологии, 2018",
    "workExperienceInYear": "<span data-time=\"1975\" class=\"js-time\"> – 46 лет</span>",
    "workAsTeacherInYear": "<span data-time=\"1975\" class=\"js-time\"> – 46 лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Земскова Наталья Александровна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "преподаватель английского и немецкого языков, звание учителя средней школы, 1994",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018",
    "workExperienceInYear": "<span data-time=\"1998\" class=\"js-time\"> – 22 лет</span>",
    "workAsTeacherInYear": "<span data-time=\"1998\" class=\"js-time\"> – 22 лет</span>",
    "subjectsTaught": "английский язык",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Ермилова Наталья Вячеславовна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "преподаватель английского и немецкого языков, звание учителя средней школы, 1994",
    "upQualification": "",
    "workExperienceInYear": "<span data-time=\"2014\" class=\"js-time\"> – 7 лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2014\" class=\"js-time\"> – 7 лет</span>",
    "subjectsTaught": "английский язык",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Кириллова Елена Николаевна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": " ср/спец",
    "qualification": "учитель начальных классов, воспитатель; высшее, Московский гуманитарно-экономический институт, квалификация — психолог, преподаватель психологии",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018",
    "workExperienceInYear": "<span data-time=\"1991\" class=\"js-time\"> – 31 лет</span>",
    "workAsTeacherInYear": "<span data-time=\"1991\" class=\"js-time\"> – 31 лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Лазарева Ирина Александровна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018",
    "workExperienceInYear": "<span data-time=\"2011\" class=\"js-time\"> – 10 лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2011\" class=\"js-time\"> – 10 лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Новикова Ирина Маматхановна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "",
    "upQualification": "Методика преподавания ОРКСЭ в начальной школе, МЦДО ООО «Бакалавр-Магистр», 2019",
    "workExperienceInYear": "<span data-time=\"1991\" class=\"js-time\"> – 30  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"1991\" class=\"js-time\"> – 30  лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Петрова Татьяна Евгеньевна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель географии и экологии, 2003",
    "upQualification": "",
    "workExperienceInYear": "<span data-time=\"2010\" class=\"js-time\"> – 11  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2014\" class=\"js-time\"> – 7  лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Овчинникова Светлана Валентиновна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель начальных классов",
    "upQualification": "1С: Образование 4.0 Школа, Активные технологии, 2018",
    "workExperienceInYear": "<span data-time=\"1990\" class=\"js-time\"> – 31  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"1993\" class=\"js-time\"> – 28  лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Реброва Наталья Дмитриевна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "педагогика и методика начального обучения",
    "upQualification": "1С: Образование 4.0 Школа, Активные технологии, 2018",
    "workExperienceInYear": "<span data-time=\"1989\" class=\"js-time\"> – 32  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"1989\" class=\"js-time\"> – 29  лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Соколова Ирина Юрьевна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель начальных классов",
    "upQualification": "Методика преподавания ОРКСЭ в начальной школе, МЦДО ООО «Бакалавр-Магистр», 2019",
    "workExperienceInYear": "<span data-time=\"1991\" class=\"js-time\">30  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"1991\" class=\"js-time\">30  лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Страхова Анна Григорьевна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель начальных классов",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019",
    "workExperienceInYear": "<span data-time=\"1991\" class=\"js-time\">30  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"1991\" class=\"js-time\">30  лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Широкова Евгения Анатольевна ",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель начальных классов",
    "upQualification": "",
    "workExperienceInYear": "<span data-time=\"2005\" class=\"js-time\">16  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2016\" class=\"js-time\">6  лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Красичкова Наталья Анатольевна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель начальных классов",
    "upQualification": "",
    "workExperienceInYear": "<span data-time=\"2002\" class=\"js-time\">19  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2002\" class=\"js-time\">8  лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Белозубова Юлия Андреевна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель начальных классов",
    "upQualification": "",
    "workExperienceInYear": "<span data-time=\"1998\" class=\"js-time\">23  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2019\" class=\"js-time\">2  лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Бочкарева Ирина Федоровна",
    "classNOO": 1,
    "classSOO": 0,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель начальных классов",
    "upQualification": "",
    "workExperienceInYear": "<span data-time=\"2010\" class=\"js-time\">11  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2010\" class=\"js-time\">11  лет</span>",
    "subjectsTaught": "русский язык, литературное чтение, математика, окружающий мир, изобразительное искусство, технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Анурина Ольга Анатольевна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "биолог",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях введения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018",
    "workExperienceInYear": "<span data-time=\"2005\" class=\"js-time\">16  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2005\" class=\"js-time\">16  лет</span>",
    "subjectsTaught": "биология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Байданова Светлана Геннадьевна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "преподаватель английского и немецкого языков и звание учителя средней школы",
    "upQualification": " 1С: Образование 4.0 Школа, Активные технологии, 2018",
    "workExperienceInYear": "<span data-time=\"2005\" class=\"js-time\">16  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2005\" class=\"js-time\">16  лет</span>",
    "subjectsTaught": "английский язык",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Виноградова Марина Александровна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "Филология",
    "levelOfStudy": "высшее",
    "qualification": " преподаватель английский, русский и литература",
    "upQualification": " 1С: Образование 4.0 Школа, Активные технологии, 2018",
    "workExperienceInYear": "<span data-time=\"2005\" class=\"js-time\">16  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2005\" class=\"js-time\">16  лет</span>",
    "subjectsTaught": "английский язык",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Демина Ольга Евгеньевна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": " преподавание физики в образовательной организации",
    "upQualification": "",
    "workExperienceInYear": "<span data-time=\"2019\" class=\"js-time\">3  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"2019\" class=\"js-time\">3  лет</span>",
    "subjectsTaught": "физика",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Демина  Марина Юрьевна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель физики и астрономии",
    "upQualification": "Методика обучения астрономии и астрофизике на уровне общего и среднего профессионального образования, ННГУ им.Лобачевского, 2018",
    "workExperienceInYear": "<span data-time=\"1990\" class=\"js-time\">29  лет</span>",
    "workAsTeacherInYear": "<span data-time=\"1990\" class=\"js-time\">29  лет</span>",
    "subjectsTaught": "физика, астрономия",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Доманин Александр Анатольевич",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "историк, преподаватель истории и обществоведения",
    "upQualification": "«1С: Образование 4.0. Школа», ООО «Активные технологии», 2018",
    "workExperienceInYear": "<span data-time=\"1989\" class=\"js-time\">32 года</span>",
    "workAsTeacherInYear": "<span data-time=\"1989\" class=\"js-time\">32 года</span>",
    "subjectsTaught": "история, обществознание",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Зефирова Софья Анатольевна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель русского языка и литературы",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2018",
    "workExperienceInYear": "<span data-time=\"1981\" class=\"js-time\">40 года</span>",
    "workAsTeacherInYear": "<span data-time=\"1982\" class=\"js-time\">39 года</span>",
    "subjectsTaught": "история, обществознание",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Зыкина Ирина Анатольевна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель иностранного языка (английский язык)",
    "upQualification": "1С: Образование 4.0 Школа, ООО Активные технологии, 2018",
    "workExperienceInYear": "<span data-time=\"2005\" class=\"js-time\">16 года</span>",
    "workAsTeacherInYear": "<span data-time=\"2005\" class=\"js-time\">16 года</span>",
    "subjectsTaught": "английский язык",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Колесова Елена Владимировна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "филолог, преподаватель русского языка и литературы",
    "upQualification": "",
    "workExperienceInYear": "<span data-time=\"1990\" class=\"js-time\">31 года</span>",
    "workAsTeacherInYear": "<span data-time=\"1990\" class=\"js-time\">31 года</span>",
    "subjectsTaught": "руский язык, литература, родной русский язык, родная русская литература",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Коченова Ольга Анатольевна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель биологии и химии",
    "upQualification": "Теория и методика преподавания предметов естественнонаучного цикла в условиях реализации ФГОС, НИРО, 2017",
    "workExperienceInYear": "<span data-time=\"1981\" class=\"js-time\">40 года</span>",
    "workAsTeacherInYear": "<span data-time=\"1981\" class=\"js-time\">40 года</span>",
    "subjectsTaught": "биология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Метелкина Людмила Ивановна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 0,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "ср/проф",
    "qualification": "техник-архитектор",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019",
    "workExperienceInYear": "<span data-time=\"1973\" class=\"js-time\">48 года</span>",
    "workAsTeacherInYear": "<span data-time=\"1983\" class=\"js-time\">38 года</span>",
    "subjectsTaught": "биология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Мортин Владимир Викторович",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "офицер с высшим военно-специальным образованием, инженер-экономист, 1986",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019",
    "workExperienceInYear": "<span data-time=\"1982\" class=\"js-time\">39 года</span>",
    "workAsTeacherInYear": "<span data-time=\"2011\" class=\"js-time\">10 лет</span>",
    "subjectsTaught": "физическая культура",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Мочалова Екатерина Николаевна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "",
    "upQualification": "«Первая Помощь», ФГРУ «МДЦ Артек», 2018",
    "workExperienceInYear": "<span data-time=\"2018\" class=\"js-time\">3 года</span>",
    "workAsTeacherInYear": "<span data-time=\"2018\" class=\"js-time\">3 лет</span>",
    "subjectsTaught": "ОБЖ",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Муращенкова Марина Сергеевна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "",
    "upQualification": "«Первая Помощь», ФГРУ «МДЦ Артек», 2018",
    "workExperienceInYear": "<span data-time=\"2019\" class=\"js-time\">3 года</span>",
    "workAsTeacherInYear": "<span data-time=\"2019\" class=\"js-time\">3 года</span>",
    "subjectsTaught": "математика, алгебра, геометрия",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Новожилов Антон Юрьевич",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "педагог по физической культуре, 2018",
    "upQualification": "1С: Образование 4.0 Школа, Активные технлогии, 2018",
    "workExperienceInYear": "<span data-time=\"2016\" class=\"js-time\">7 года</span>",
    "workAsTeacherInYear": "<span data-time=\"2016\" class=\"js-time\">7 года</span>",
    "subjectsTaught": "математика, алгебра, геометрия",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Сельверова Наталья Алексеевна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель иностранного языка, 2012",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019",
    "workExperienceInYear": "<span data-time=\"2013\" class=\"js-time\">8 года</span>",
    "workAsTeacherInYear": "<span data-time=\"2013\" class=\"js-time\">8 года</span>",
    "subjectsTaught": "английский язык",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Смирнова Кристина Олеговна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "Ср/проф",
    "qualification": "учитель иностранного языка, 2012",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019",
    "workExperienceInYear": "<span data-time=\"2012\" class=\"js-time\">10 года</span>",
    "workAsTeacherInYear": "<span data-time=\"2012\" class=\"js-time\">10 года</span>",
    "subjectsTaught": "технология",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Тюрина Надежда Николаевна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "филолог, преподаватель",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019",
    "workExperienceInYear": "<span data-time=\"1978\" class=\"js-time\">43 года</span>",
    "workAsTeacherInYear": "<span data-time=\"1978\" class=\"js-time\">37 года</span>",
    "subjectsTaught": "русский язык и литература",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Щербакова Мария Сергеевна",
    "classNOO": 0,
    "classSOO": 2,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "учитель географии и учитель биологии",
    "upQualification": "Технология преподавания дисциплин учебного плана начального и среднего общего образования в условиях ведения профессионального стандарта педагога и реализации ФГОС, НГПУ, 2019",
    "workExperienceInYear": "<span data-time=\"2010\" class=\"js-time\">11 года</span>",
    "workAsTeacherInYear": "<span data-time=\"2010\" class=\"js-time\">11 года</span>",
    "subjectsTaught": "география",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Маркина Ольга Сергеевна",
    "classNOO": 0,
    "classSOO": 0,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "математик, преподаватель математики, 1975",
    "upQualification": "Методика оценивания заданий с развернутыми ответами к ГИА-9, 2019",
    "workExperienceInYear": "<span data-time=\"1976\" class=\"js-time\">29 года</span>",
    "workAsTeacherInYear": "<span data-time=\"1977\" class=\"js-time\">29 года</span>",
    "subjectsTaught": "математика, алгебра и начала анализа, геометрия",
    "academicDegree": "",
    "academicTitle": ""
  },
  {
    "fio": "Мацокина Галина Федоровна",
    "classNOO": 0,
    "classSOO": 0,
    "classOOO": 3,
    "dolzhnost": "учитель",
    "nameStudy": "",
    "levelOfStudy": "высшее",
    "qualification": "звание учителя химии и биологии средней школ",
    "upQualification": " «Наиболее сложные темы школьного курса химии в заданиях ЕГЭ», НИРО, 2018",
    "workExperienceInYear": "<span data-time=\"1967\" class=\"js-time\">54 года</span>",
    "workAsTeacherInYear": "<span data-time=\"1971\" class=\"js-time\">50 года</span>",
    "subjectsTaught": "химия",
    "academicDegree": "",
    "academicTitle": ""
  }
]


if (document.querySelector('.parent')) {



const sortByFIO = (a, b) => {
  if(a.fio < b.fio) return -1;
  if(a.fio > b.fio) return 1;
  return 0;
}



const renderPostOfTeachers = (renderPosts,levelEducation) =>  {

// levelEducation => 1= HOO 2 = OOO 3 = COO  4 = HOO&OOO 5 = OOO&COO
  const postsListElement = document.querySelector('.parent');
  postsListElement.innerHTML="";
  // const postsTemplate = document.querySelector('#teacher');
  const postFragment = document.createDocumentFragment();

  renderPosts.forEach((post) => {


    // switch (post.classNOO,post.classSOO,post.classOOO) {
    //   case (post.classNOO === 1):
    //   document.querySelector('.combat').textContent = 'Воин';
    //   break;


    if (post.classNOO === levelEducation || post.classSOO === levelEducation && post.classSOO === levelEducation || post.classOOO === levelEducation) {

    const cardTeacher = document.createElement('li');
    cardTeacher.classList.add("fz18")
    const cardTeacherFIO = document.createElement('span');
    cardTeacherFIO.innerHTML = `${post.fio} <br>`;
    cardTeacher.appendChild(cardTeacherFIO);

    const cardTeacherDOL = document.createElement('span');
    cardTeacherDOL.innerHTML = `<strong>Занимаемая должность</strong> - ${post.dolzhnost} <br>`;
    cardTeacher.appendChild(cardTeacherDOL);

    const cardTeacherPost = document.createElement('span');
    cardTeacherPost.innerHTML = `<strong>Уровень образование</strong> – ${post.levelOfStudy} <br>`;
    cardTeacher.appendChild(cardTeacherPost);

if (post.nameStudy !== "") {
    const cardTeacherNameStudy = document.createElement('span');
    cardTeacherNameStudy.innerHTML = `<strong>Квалификация:</strong> ${post.nameStudy}<br>`;
    cardTeacher.appendChild(cardTeacherNameStudy);
  }

  if (post.qualification !== "") {
    const cardTeacherQualification = document.createElement('span');
    cardTeacherQualification.innerHTML = `<strong>Квалификация:</strong> ${post.qualification}<br>`;
    cardTeacher.appendChild(cardTeacherQualification);
  }

if (post.upQualification !== "") {
    const cardTeacherupQualification = document.createElement('span');
    cardTeacherupQualification.innerHTML = `<strong>Повышение квалификации:</strong> ${post.upQualification}<br>`;
    cardTeacher.appendChild(cardTeacherupQualification);
}
    if (post.academicDegree !== "") {
      const cardTeacherAcademicDegree = document.createElement('span');
      cardTeacherAcademicDegree.innerHTML = `<strong>Ученая степень:</strong> ${post.academicDegree}<br>`;
      cardTeacher.appendChild(cardTeacherAcademicDegree);
    }

    if (post.academicTitle !== "") {
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

renderPostOfTeachers(DATA_OF_TEACHERS,parseInt(LEVEL_TEACHER,10));


}

if (document.querySelector('.js-now-time')) {
  document.querySelector('.js-now-time').textContent=`${new Date().toLocaleDateString() }`
}
if (document.querySelector('.js-now-year')) {
  document.querySelector('.js-now-year').textContent=`${new Date().getFullYear()}`
}
if (document.querySelector('.js-now-two-year')) {
  document.querySelector('.js-now-two-year').textContent=`${new Date().getFullYear()-1} — ${new Date().getFullYear() }`
}
if (document.querySelector('.js-now-two-year-slash')) {
  document.querySelector('.js-now-two-year-slash').textContent=`${new Date().getFullYear()-1}/${new Date().getFullYear() }`
}
if (document.querySelector('.js-now-year-minus-one')) {
  document.querySelector('.js-now-year-minus-one').textContent=`${new Date().getFullYear()-1 }`
}

//liceum 28 nm food


if (document.querySelector('.js-food-menu-high') && document.querySelector('.js-food-menu-low')) {

  const firstHead= document.querySelector('head').innerHTML;
  const textDisableCache = `<meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="pragma" content="no-cache" />
  <meta http-equiv="expires" content="0" />`
  document.querySelector('head').innerHTML=`${firstHead} ${textDisableCache}`;


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
      menuFileLink.textContent = 'Школьное питание 1-4 класс' //menu009032022.pdf началка
      menuFileLinkDescription.textContent = `Файл Adobe PDF, ~160 Кбайт. Дата размещения: ${parseInt(urlFile.slice(1, 3), 10)} ${arrayMonths[parseInt(urlFile.slice(3, 5), 10) - 1]} ${urlFile.slice(urlFile.length - 4, urlFile.length)}`
    } else {
      menuFileLink.textContent = 'Школьное питание 5-11 класс' //menu09032022.pdf среднее звено
      menuFileLinkDescription.textContent = `Файл Adobe PDF, ~160 Кбайт. Дата размещения: ${parseInt(urlFile.slice(0, 2), 10)} ${arrayMonths[parseInt(urlFile.slice(2, 4), 10) - 1]} ${urlFile.slice(urlFile.length - 4, urlFile.length)}`
    }

    menuFileContent.appendChild(menuFileLink);
    menuFileContent.appendChild(menuFileLinkDescription);
    newMenuFileItemLink.appendChild(menuFileContent)

    if ( parseInt(levelEducation) === 1 ) {
      spoilerForMenuFilesHigh.appendChild(newMenuFileItemLink);
    } else {
      if ( parseInt(levelEducation) === 2 ) {
        spoilerForMenuFilesLow.appendChild(newMenuFileItemLink)
      }
    }
  }

  const end = new Date('06/01/2022');
  const start = new Date('09/01/2021');  //september 1 2021
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

      fetch(pathFullHighSchool).then(
        (successResponse) => {
          if (successResponse.status != 200) {
            return null;
          } else {
            createNewFileMenu(nowDate,1);
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
            createNewFileMenu(`0${nowDate}`,2);
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


  const copyTextInBufferOnClick = function (evt) {
    navigator.clipboard
    .writeText(`${evt.target.textContent}`)
      .then(() => {
      evt.target.classList.add('copySuccess');
      evt.target.removeEventListener('click',copyTextInBufferOnClick);
      evt.target.addEventListener('mouseout', () => {
        evt.target.classList.remove('copySuccess');
        evt.target.addEventListener('click',copyTextInBufferOnClick);
      });
      })
      .catch((err) => {
      console.log("Something went wrong", err);
      });
  }

  if (document.querySelector(".js-email-copy")) {
    const emailCopy = document.querySelector(".js-email-copy");
    emailCopy.addEventListener("click",copyTextInBufferOnClick);
  }
