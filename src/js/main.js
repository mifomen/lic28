// console.log('mifomanasd sd')

//     var CurrentYear = new Date();

// document.querySelector('.CurrentYear').textContent=CurrentYear.getUTCFullYear() + ' г.'


CookieButton = document.getElementById('cookie__button');

CookieDiv = document.querySelector('.cookie');
CookieButton.addEventListener('click',function () {
  // console.log('click')
  // document.CookieButton.disabled = true;
  this.disabled = true;
  CookieDiv.classList.add('vh');
   CookieDiv.style.cssText='display: none;';
  localStorage.CookieMemory = true;
  // alert(localStorage.CookieMemory)

})

// CheckCookieMemory = function () {
//    if (localStorage.CookieMemory) {
//     CookieDiv.classList.add('vh')
//     // CookieDiv.style.cssText=""
//    // document.getElementById('cookie').style.cssText=""

//   }
// }
// CheckCookieMemory();
// fix = function () {
//      document.getElementById('cookie').style.cssText=""
// }

document.addEventListener('DOMContentLoaded',function () {
  proverka();

})


ClearCokieMemory = function () {
  return delete localStorage.CookieMemory;
}


proverka = function () {
  if (CookieDiv.classList.contains('vh') && localStorage.CookieMemory === undefined) {
     CookieDiv.classList.remove('vh');
     CookieDiv.style.cssText='';

    // console.log('text') //true
  } else {

    if (CookieDiv.classList.contains('vh') || localStorage.CookieMemory) {
      // CookieDiv.style.cssText='display: none;'
      // CookieDiv.classList.add('vh'),
    }



  }
}

proverka();