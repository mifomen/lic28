const allItems = document.querySelectorAll('.list__item');

const onClickChangeActive = (evt) => {
  if (document.querySelector('.list__item--active')) {
    document.querySelector('.list__item--active').classList.remove('list__item--active');
    evt.target.classList.add('list__item--active');

     if (document.querySelector('.day__title').textContent === evt.target.textContent) {
       const dayTitle = document.querySelector('.day__title');
      console.log(`dayTitle=${dayTitle}`);
     }
  }
};

for (const item of allItems) {
  item.addEventListener('click',onClickChangeActive);
}
