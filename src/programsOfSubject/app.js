if (document.querySelector('.js-row')) {
  const allLink = document.querySelectorAll('.js-row');
  let i = 1;
  const css = 'background: #222; color: #bada55 '; //eslint-disable-line
  for (const link of allLink) {
    //eslint-disable-line
    const href1 = link.querySelector('td:last-child a');
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
