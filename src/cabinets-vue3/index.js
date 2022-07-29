
const { createApp } = Vue; //eslint-disable-line

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      init: false,
      cabinets: [],
      itemArray1: [],
      pageNumber: 6 || new Date().getDay(),
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
      return itemArrays1;
    },
  },
}).mount('#app');
