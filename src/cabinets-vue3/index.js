
const { createApp } = Vue; //eslint-disable-line

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      init: false,
      cabinets: [],
      itemArray1: [],
      pageNumber: new Date().getDay(),
      itemCount: 6,
    };
  },
  methods: {
    backArray(evt) {
      this.pageNumber = evt.target.id;
      if (document.querySelector('.button--active')) {
        document.querySelector('.button--active').classList.remove('button--active');
      }
      evt.target.classList.add('button--active');


    },
  },
  async mounted() {
    if (document.querySelector('.button--active')) {
      document.querySelector('.button--active').classList.remove('button--active');
    }
    document.getElementById(this.pageNumber).classList.add('button--active');
    try {
      await fetch('./cabinets.json')
      .then((response) => response.json())
      .then((json) => this.cabinets = json)
      // .then((json) => console.log(json))
      .then(this.init = true);
    } catch(erros) {
      console.error('erros=', erros); //eslint-disable-line
    }
    this.itemCount = this.cabinets[this.cabinets.length-1].data[0].length; // считаем сколько раз вывести индекс строки
  },
  computed: {
    getResaultArrayNotSecondShift: function () {
      const itemArrays1 = new Array(5);
      return true;
    },
  },
}).mount('#app');


// const a = [1,2,3,4];
// const b = [1,2,3,4,5,6];

// const c = new Array(1);
// c[0] = a;
// c[1] = b;
// c[2] = b;
// console.log("c[0]",c[0],"c[1]",c[1])


// console.log("c",c)
