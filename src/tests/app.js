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


console.log('mifomen')


if (document.querySelector('.js-now-fulldate')) {
  const monthsArray = ['января','февраля','марта','апреля','майя','июня','июля','августа','сентября','октября','ноября','декабря'];
  const allDates = document.querySelectorAll('.js-now-fulldate');
  const nowTime = new Date();
  for ( const allDate of allDates ) {
    allDate.textContent = `${nowTime.getDate()} ${monthsArray[nowTime.getMonth()]} ${nowTime.getFullYear()}`
  }
}



let ownArray = ['Boolean','Undefined',23,'String','Null',15,54,NaN];

let count = 0;

const func = (arr) => {
  return arr.reduce((a, b) =>{
    if(typeof b === "number" && !isNaN(b)){
        ++count;
        return a += b;
    }
    return a
}, 0) / count || 0
}
console.log(func(ownArray));
