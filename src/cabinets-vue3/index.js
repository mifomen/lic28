
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
      const itemArrays = new Array(5);
      const templateArrays0 = new Array();
      const templateArrays1 = new Array();
      const templateArrays2 = new Array();
      const templateArrays3 = new Array();
      const templateArrays4 = new Array();
      const templateArrays5 = new Array();
      for (const item of this.cabinets) {
        if (!item.secondShift ) {
          templateArrays0.push(item.DayOfWeek0);
          templateArrays1.push(item.DayOfWeek1);
          templateArrays2.push(item.DayOfWeek2);
          templateArrays3.push(item.DayOfWeek3);
          templateArrays4.push(item.DayOfWeek4);
          templateArrays5.push(item.DayOfWeek5);
        }
      }
      itemArrays[0] = templateArrays0;
      itemArrays[1] = templateArrays1;
      itemArrays[2] = templateArrays2;
      itemArrays[3] = templateArrays3;
      itemArrays[4] = templateArrays4;
      itemArrays[5] = templateArrays5;
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


// const a = [1,2,3,4];
// const b = [1,2,3,4,5,6];

// const c = new Array(1);
// c[0] = a;
// c[1] = b;
// c[2] = b;
// console.log("c[0]",c[0],"c[1]",c[1])


// console.log("c",c)
