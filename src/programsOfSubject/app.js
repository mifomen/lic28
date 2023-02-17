let set = new Set()
let arr = [];
if (document.querySelector('.js-row')) {


  const allLink = document.querySelectorAll('.js-row');
  let i = 1;
  const css = 'background: #222; color: #bada55 '; //eslint-disable-line
  for (const link of allLink) {
    //eslint-disable-line
    let href1 = link.querySelector('td:last-child a');
    set.add(href1)
    arr.push(href1)
    // console.log(` mifomen = href1 = ${href1}`)
    if (href1.href[href1.href.length - 1] === '#') {
      //eslint-disable-next-line
      console.log(
        `${i}. ${link.querySelector('td').textContent} РП для ${
          link.querySelector('td:nth-child(2)').textContent
        } класса`);
      i++;
    }

    const href2 = link.querySelector('td a');
    if (href2.href[href2.href.length - 1] === '#') {
      //eslint-disable-next-line
      console.log(
        `${i}. ${
          link.querySelector('td').textContent
        } 'Аннотация отсутствует'  для ${
          link.querySelector('td:nth-child(2)').textContent
        } класса`);
      i++;
    }
  }
}

console.log(`set.size == ${set.size} \n arr.size == ${arr.length} `);
