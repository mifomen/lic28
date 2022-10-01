const hello = () => {
  console.log('Say HI', this)
}
// console.log(`f'hello = ${hello()}`)

const person = {
  age: 25,
  name: 'Ilya',
  sayHello: hello,
  sayhelloWindow: hello.bind(document)
}


// console.log(`f'person.sayHello = ${person.sayHello()}`)
console.log(`f'person.sayhelloWindow = ${person.sayhelloWindow()}`)

const arrayMonths = ['января','февраля','марта','апреля','майя','июня','июля','августа','сентября','октября','ноября','декабря'];

console.log('mifomen')


if (document.querySelector('.js-now-fulldate')) {
  const allDates = document.querySelectorAll('.js-now-fulldate');
  const nowTime = new Date();
  for ( const allDate of allDates ) {
    allDate.textContent = `${nowTime.getDate()} ${arrayMonths[nowTime.getMonth()]} ${nowTime.getFullYear()}`
  }
}
