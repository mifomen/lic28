
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      init: false,
      cabinets: [],
    };
  },
  mounted() {
    try {
      fetch("./cabinets.json")
        .then((response) => response.json())
        .then((json) => this.cabinets = json)
        // .then((json) => console.log(json))
        .then(this.init = true);
    } catch(erros) {
        console.error("erros=", erros);
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
        // return itemArrays;
      }
    },
  },
}).mount('#app');
