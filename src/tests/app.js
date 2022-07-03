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

