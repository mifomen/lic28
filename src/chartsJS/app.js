const ctx = document.getElementById('myChart').getContext('2d');

const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
const colors = ['#00497b','#487b2e', '#ff4069', '#ff9020', '#ffc234', '#22cfcf', '#059bff', '#cc3353', '#047ccc','#199c9c'];
const people = ['Бакулина Г.С.', 'Власова О.А.', 'Кошелев И.А.', 'Плаксина Т.Ю.', 'Беспалова М.В.', 'Муращенкова М.С.', 'Плаксина Т.А,']
const dataValue = [12, 12, 21, 31, 26, 17, 25];


const footer = (tooltipItems) => {
  let sum = 0;

  tooltipItems.forEach(function(tooltipItem) {
    sum += tooltipItem.parsed.y;
  });
  return 'Sum: ' + sum;
};

const myChart = new Chart(ctx, {

  data: {
    labels: people,
    datasets: [{
      label: 'Ученики за год',
      data: dataValue,
      fill: false,
      borderWidth: 3,
      borderColor: 'rgba(255,255,255,0.2)',
      // data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Object.values(colors),
    }]},
  type: 'doughnut',
  options: {
    responsive: true,
    animations: {
      tension: {
        duration: 10000,
        easing: 'linear',
        from: 5,
        to: 0,
        loop: false,
      },
    },
    hover: {
      mode: 'nearest',
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'center',
        fullSize: true,
      },
      tooltip: {
        callbacks: {
          footer: footer,
        },
      },
      title: {
        display: true,
        text: 'Количество проведенных уроков в кабинете ЦОС',
        font: {
          size: 36,
        },
        // this.style.fontSize = '24px'
      },
      subtitle: {
        display: true,
        text: 'За 2021-2022 учебный год',
        color: '#008cea',
        font: {
          size: 24,
          family: 'tahoma',
          weight: 'normal',
          // color: '#fafafa',
          // style: 'bold'
        },
        padding: {
          bottom: 10
        }
      }
    },

    scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: 'Значение X',
          color: '#911',
          font: {
            family: 'Comic Sans MS',
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: {top: 20, left: 0, right: 0, bottom: 0},
        }
      },
      y: {
        display: true,
        title: {
          display: false,
          text: 'Значение Y',
          color: '#191',
          font: {
            family: 'Times',
            size: 20,
            style: 'normal',
            lineHeight: 1.2
          },
          padding: {top: 30, left: 0, right: 0, bottom: 0},
        }
      }
    }
  }
});



// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [{
//     label: 'Looping tension',
//     data: [65, 59, 80, 81, 26, 55, 40],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//   }]
// };


// const config = {
//   type: 'line',
//   data: data,
//   options: {
//     animations: {
//       tension: {
//         duration: 1000,
//         easing: 'linear',
//         from: 1,
//         to: 0,
//         loop: true
//       }
//     },
//     scales: {
//       y: { // defining min and max so hiding the dataset does not change scale range
//         min: 0,
//         max: 100
//       }
//     }
//   }
// };


const jsMyChart = document.querySelector('.js-myChart');

jsMyChart.style.cssText='';
jsMyChart.width = '';
jsMyChart.height = '';
