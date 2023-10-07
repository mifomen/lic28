// const { create } = require("browser-sync");


const clearBR = (selector) => {
  if (document.querySelector(selector)) {
    const brInGrid = document.querySelectorAll(selector);
    for (const item of brInGrid) {
      item.remove();
    }
  }
};

clearBR('.clear-br br');
clearBR('.menu-news__list br');

if (document.querySelector('.menu-news__item-content') && document.querySelector('.menu-news__item-content')) {

  const frameContent = document.querySelector('.js-news-content');
  const allContent = document.querySelectorAll('.menu-news__item-content');

  const allContentArray = new Array();
  allContent.forEach((item) => {
    allContentArray.push(item);
  });

  // console.log(`allContentArray=${allContentArray.dataset.content}`)

  const allContentBtns = document.querySelectorAll('.js-link-content');

  const findItemById = function (items, resolve) {
    return items.find((item) => item.dataset.content === resolve.dataset.link);
  };

  let choosen;
  let showStatusFrame = false; //eslint-disable-line

  allContentBtns.forEach((item) => {
    item.addEventListener('click', (evt) => {
      if (evt.target.hasAttribute('data-link') && evt.target.dataset.link !== undefined && evt.target.dataset.link !== '') {

        clearBR('.menu-news__item-content br');
        if (choosen === evt.target.dataset.link) {
          frameContent.classList.toggle('vh');
          showStatusFrame = false;
        } else {
          frameContent.classList.remove('vh');
          showStatusFrame = true;
        }
        choosen = evt.target.dataset.link;
        // console.log('has')
        evt.preventDefault();
        const elem = findItemById(allContentArray,evt.target);
        frameContent.innerHTML = elem.innerHTML;
      }
    });
  });

  document.addEventListener('keypress', (evt) => {
    console.log(evt.key); //eslint-disable-line
    if (evt.key === 'Escape' || evt.key === 'Enter') {
      frameContent.classList.add('vh');
    }
  });
}

const DATA_GET_URL = 'slider-news.json';

const getData = (onSuccess) => {
  fetch(DATA_GET_URL)
    .then((response) => response.json())
    .then((questionsArray) => {
      onSuccess(questionsArray);
    });
};

const sliderMove = (step) => {
  let interval = 0;
  setInterval(() => {
    document.querySelector('.slider__list').style.transform = `translateX(${interval}px)`;
    interval = interval - step;
  },3000);
};

// }
// alert("ничего не происходит"), 1000);
// alert(timerId); // идентификатор таймера

// clearTimeout(timerId);

// let interval = 0;
const renderSliderItems = (arrayRender) => {
  if (document.querySelector('.js-slider-news')) {
    const slider = document.querySelector('.js-slider-news');
    const btn = document.createElement('button');
    btn.classList.add('slider-btn__prev');
    btn.textContent = 'Предыдущий слайд';
    slider.appendChild(btn);

    const btn2 = document.createElement('button');
    btn2.classList.add('slider-btn__next');
    btn2.textContent = 'Предыдущий слайд';
    slider.appendChild(btn2);

  };
  const div = document.createElement('div');
  div.classList.add('js-slider-inner');
  div.classList.add('slider__list');
  // div.addEventListener()

  for (const item of arrayRender) {
    const div2 = document.createElement('a');
    if (item.sliderLink !== '') {
      div2.href = item.sliderLink;
    }
    div2.classList.add('slider__item');

    if (item.sliderImgShow === true) {
      const img = document.createElement('img');
      img.classList.add('slider__item__img');
      img.src = item.sliderImg;
      img.alt = `photo with ${item.sliderImg}`;
      div2.appendChild(img);
    }

    if (item.sliderTextShow === true) {
      const span = document.createElement('span');
      span.classList.add('slider__item__span');
      span.textContent = item.sliderText;
      div2.appendChild(span);
    }

    div.appendChild(div2);
  }
  // elem
  document.querySelector('.js-slider-news').appendChild(div);

  // let timerId = setInterval(() => alert('tick'), 2000);
};


if (document.querySelector('.js-slider-news')) {
  const slider = document.querySelector('.js-slider-news');
  slider.innerHTML = '';

  // let interval = 0;
  getData((questionArray) => {
    renderSliderItems(questionArray);
    // sliderMove(175); // uncomment for move
  });
};
// const timerId = setInterval(() => {
//   const sliderList = document.querySelector('.slider__list');
//   sliderList.style.transform = `translateX(${interval}px)`;
// setInterval     interval = interval - 175;
//    },2000);
