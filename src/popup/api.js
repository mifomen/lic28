const popupBtn = document.querySelectorAll('.js-info-link')

const popup = document.querySelector('.js-info-popup')
const popupInformater = document.querySelector('.js-info-popup-info')

const newsBtns = document.querySelectorAll('.menu-news__link');
newsBtns.forEach(item => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault()
    const contentInput = document.querySelector('.js-news-content')
    contentInput.classList.toggle('vh')
    const choosen = evt.target;

    if (choosen.classList.contains('menu-news__item-1')) {
      document.querySelector('.js-news-content').innerHTML=document.querySelector('.menu-news__item-content-1').innerHTML;
    }
    if (choosen.classList.contains('menu-news__item-2')) {
      document.querySelector('.js-news-content').innerHTML=document.querySelector('.menu-news__item-content-2').innerHTML;
    }
    if (choosen.classList.contains('menu-news__item-3')) {
      document.querySelector('.js-news-content').innerHTML=document.querySelector('.menu-news__item-content-3').innerHTML;
    }

    if (choosen.classList.contains('menu-news__item-4')) {
      if (!document.querySelector('.js-news-content').classList.contains('vh')) {
        document.querySelector('.js-news-content').innerHTML=document.querySelector('.menu-news__item-content-4').innerHTML;
      } else {
      document.querySelector('.js-news-content').innerHTML=document.querySelector('.menu-news__item-content-4').innerHTML;}
    }

    if (choosen.classList.contains('menu-news__item-5')) {
      document.querySelector('.js-news-content').innerHTML=document.querySelector('.menu-news__item-content-5').innerHTML;
    }
  })
})

const showPopup2 = (evt) => {
  evt.preventDefault()
  popupInformater.classList.toggle('vh')
  popupInformater.classList.toggle('popup-active')
  // evt.target.innerHTML="";
  // evt.target.innerHTML = popup.innerHTML;
}

const showPopup = (evt) => {
  evt.preventDefault()
  popupInformater.classList.toggle('vh')
  popupInformater.classList.toggle('popup-active')
  // evt.target.innerHTML="";
  popupInformater.innerHTML = evt.target.innerHTML;
  document.body.classList.toggle('overlay')
}

// popup.addEventListener('click',showPopup)

popupBtn.forEach(item => {
  item.addEventListener('click',showPopup)
})

// popupInformater.addEventListener('click',showPopup2)
