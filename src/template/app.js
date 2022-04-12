if (document.querySelector('#cookie__button')) {
  const CookieButton = document.getElementById('cookie__button');
  const CookieDiv = document.querySelector('.cookie');
  CookieButton.addEventListener('click', function () {
    this.disabled = !0;
    CookieDiv.classList.add('vh');
    (CookieDiv.style.cssText = 'display: none;'),
    (localStorage.CookieMemory = !0);
  });

  const ClearCokieMemory = () => { //eslint-disable-line
    delete localStorage.CookieMemory; //eslint-disable-line
  }; //eslint-disable-line
  const proverka = () => {
    CookieDiv.classList.contains('vh') && void 0 === localStorage.CookieMemory
      ? (CookieDiv.classList.remove('vh'), (CookieDiv.style.cssText = ''))
      : CookieDiv.classList.contains('vh') || localStorage.CookieMemory;
  };
  document.addEventListener('DOMContentLoaded', proverka());
}

if (document.querySelector('.js-row')) {
  const allLink = document.querySelectorAll('.js-row');
  let i = 1;
  const css = 'background: #222; color: #bada55 '; //eslint-disable-line
  for (const link of allLink) {
    //eslint-disable-line
    const href1 = link.querySelector('td:last-child a');
    if (href1.href[href1.href.length - 1] === '#') {
      //eslint-disable-next-line
      console.log(
        `${i}. ${link.querySelector('td').textContent} РП для ${
          link.querySelector('td:nth-child(2)').textContent
        } класса`);
      i++;
    }

    const href2 = link.querySelector('td a');
    if (href2.href[href2.href.length - 1] === '#') {
      //eslint-disable-next-line
      console.log(
        `${i}. ${
          link.querySelector('td').textContent
        } 'Аннотация отсутствует'  для ${
          link.querySelector('td:nth-child(2)').textContent
        } класса`);
      i++;
    }
  }
}

// span with nowtime on all page
if (document.querySelector('.js-now-time')) {
  const allSpansWithNowTime = document.querySelectorAll('.js-now-time');
  for (const allSpanWithNowTime of allSpansWithNowTime) {
    allSpanWithNowTime.textContent = `${new Date().toLocaleDateString()}`;
  }
}
