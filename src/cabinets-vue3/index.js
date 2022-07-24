
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
        .then((json) => console.log(json))
        .then(this.init = true);
    } catch(erros) {
        console.error("erros=", erros);
      }
    },
  computed: {
    resaultArray: function() {
      const res = new Array(5);

      return res;
    },
  },
}).mount('#app');
