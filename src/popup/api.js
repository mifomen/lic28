const popupBtn = document.querySelectorAll('.js-info-link')

const popup = document.querySelector('.js-info-popup')
const popupInformater = document.querySelector('.js-info-popup-info')

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
}

// popup.addEventListener('click',showPopup)

popupBtn.forEach(item => {
  item.addEventListener('click',showPopup)
})

popupInformater.addEventListener('click',showPopup2)
