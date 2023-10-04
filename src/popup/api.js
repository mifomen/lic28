
const popupBtn = document.querySelectorAll('.js-info-link')
const popup = document.querySelector('.js-info-popup')
const popupInformater = document.querySelector('.js-info-popup-info')

const frameContent = document.querySelector('.js-news-content');

const allContent = document.querySelectorAll('.menu-news__item-content')
console.log(`allContent = ${allContent[0].dataset.content}`)

const allContentArray = new Array();
allContent.forEach(item => {
  allContentArray.push(item)
})

// console.log(`allContentArray=${allContentArray.dataset.content}`)

const allContentBtns = document.querySelectorAll('.js-link-content')

const findItemById = function (items, resolve) {
  return items.find(item => item.dataset.content === resolve.dataset.link);
};

allContentBtns.forEach(item => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log(`${evt.target.dataset.link}`)
    console.log(findItemById(allContentArray,evt.target))

  if (findItemById(allContentArray,evt.target)) {
    frameContent.innerHTML =findItemById(allContentArray,evt.target).innerHTML  } })
})
