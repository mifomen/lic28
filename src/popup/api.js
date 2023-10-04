
if (document.querySelector('.menu-news__item-content') && document.querySelector('.menu-news__item-content'))  {

const frameContent = document.querySelector('.js-news-content');
const allContent = document.querySelectorAll('.menu-news__item-content')

const allContentArray = new Array();
allContent.forEach(item => {
  allContentArray.push(item)
})

// console.log(`allContentArray=${allContentArray.dataset.content}`)

const allContentBtns = document.querySelectorAll('.js-link-content')

const findItemById = function (items, resolve) {
  return items.find(item => item.dataset.content === resolve.dataset.link);
};

let choosen;
let showStatusFrame = false;

allContentBtns.forEach(item => {
  item.addEventListener('click', (evt) => {
    if (evt.target.hasAttribute('data-link') && evt.target.dataset.link != undefined && evt.target.dataset.link != "" ) {


    if (choosen === evt.target.dataset.link) {
      frameContent.classList.toggle('vh')
      showStatusFrame = false;
    } else {
      frameContent.classList.remove('vh')
      showStatusFrame = true;
    }
    choosen = evt.target.dataset.link;


      console.log('has')
      evt.preventDefault();
      const elem = findItemById(allContentArray,evt.target)
      frameContent.innerHTML = elem.innerHTML;
    }
})
})


document.addEventListener('keypress', event => {
  console.log(event.key)
  if (event.key === "Escape" || event.key === "Enter" ) {
    frameContent.classList.add('vh')
  }
})


}
