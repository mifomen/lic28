const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      init: false,
      teacherList: [],
    }
  },
  computed() {
    try {
      fetch('./teacherList.json')
        .then((response) => response.json)
        .then((json) => this.teacherList = json)
        .then(this.init = true);
    } catch (e) {
        console.error("erorr", e),
    },
  },
}).mount('#app');
