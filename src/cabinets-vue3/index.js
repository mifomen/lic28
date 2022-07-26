
const { createApp } = Vue; //eslint-disable-line

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      init: false,
      cabinets: [],
      itemArray1: [],
    };
  },
  methods: {
    backArray(evt) {

      console.log(evt.target.id); //eslint-disable-line
      if (document.querySelector('.button--active')) {
        document.querySelector('.button--active').classList.remove('button--active');
      }
      evt.target.classList.add('button--active');


      console.log("itemArray1",this.itemArray1); //eslint-disable-line

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
  async mounted() {
    try {
      await fetch('./cabinets.json')
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
      const itemArrays = new Array();
      for (const item of this.cabinets) {
        if (!item.secondShift ) {
          itemArrays.push(item.DayOfWeek0);
        }
      }
      return itemArrays;
    },
    // getWeek1: function () {
    //   this.cabinet.forEach((item) => {
    //     this.itemArray1.push(item.DayOfWeek1);
    //   });
    //   console.log("itemArray1",this.itemArray1); //eslint-disable-line
    // },
  },
}).mount('#app');
