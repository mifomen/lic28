
const { createApp } = Vue; //eslint-disable-line

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      init: false,
      cabinets: [],
      itemArray: null,
    };
  },
  methods: {
    backArray(evt) {

      console.log(evt.target.id); //eslint-disable-line
      if (document.querySelector('.button--active')) {
        document.querySelector('.button--active').classList.remove('button--active');
      }
      evt.target.classList.add('button--active');

      console.log('this.cabinets.DayOfWeek1',this.cabinets[0].DayOfWeek4); //eslint-disable-line
      console.log('this.itemArray',this.itemArray); //eslint-disable-line

      if (evt.target.id === 0) {
        this.itemArray = this.cabinet[0].DayOfWeek1;
      }
      if (evt.target.id === 1) {
        this.itemArray = this.cabinet[0].DayOfWeek2;
      }
      if (evt.target.id === 2) {
        this.itemArray = this.cabinet[0].DayOfWeek3;
      }
      if (evt.target.id === 3) {
        this.itemArray = this.cabinet[0].DayOfWeek4;
      }
      if (evt.target.id === 4) {
        this.itemArray =  this.cabinet[0].DayOfWeek5;
      }
      if (evt.target.id === 5) {
        this.itemArray = this.cabinet[0].DayOfWeek6;
      }
    },
  },
  mounted() {
    try {
      fetch('./cabinets.json')
        .then((response) => response.json())
        .then((json) => this.cabinets = json)
        // .then((json) => console.log(json))
        .then(this.init = true);
    } catch(erros) {
      console.error('erros=', erros); //eslint-disable-line
    }
  },
  computed: {
    getResaultArray: function () {
      for (const item of this.cabinets) {
        const itemArrays = new Array(5);
        itemArrays[0] = item.DayOfWeek1;
        itemArrays[1] = item.DayOfWeek2;
        itemArrays[2] = item.DayOfWeek3;
        itemArrays[3] = item.DayOfWeek4;
        itemArrays[4] = item.DayOfWeek5;
        itemArrays[5] = item.DayOfWeek6;
        this.cabinets.data = itemArrays;
        console.log('this.cabinets', itemArrays); //eslint-disable-line
        return itemArrays;
      }
    },
  },
}).mount('#app');
