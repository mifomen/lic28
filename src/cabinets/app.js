// const allItems = document.querySelectorAll('.list__item');

// const onClickChangeActive = (evt) => {
//   if (document.querySelector('.list__item--active')) {
//     document.querySelector('.list__item--active').classList.remove('list__item--active');
//     evt.target.classList.add('list__item--active');

//     const days = document.querySelectorAll('.day');

//     for (const day of days) {
//       if (!day.classList.contains('hidden')) {
//         day.classList.add('hidden');
//       }
//     }

//     const dayTitles = document.querySelectorAll('.day__title');
//     dayTitles.forEach( item => {
//       if (item.textContent === evt.target.textContent) {
//         return item.parentElement.classList.toggle('hidden');
//       }
//     })
//   }
// };

// for (const item of allItems) {
//   item.addEventListener('click',onClickChangeActive);
// }


const url = `#day-${new Date().getDay()}`;
if (document.querySelector(url)) {
  document.querySelector(url).checked = true;
}
