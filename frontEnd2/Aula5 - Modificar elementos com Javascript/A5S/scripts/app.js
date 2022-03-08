
// Modificando Fundo

const backgroundDark = document.querySelector('body');

backgroundDark.classList.toggle('backgroundDark');

// Modificando h1 - Titulo

const titleDark = document.querySelector('h1');

titleDark.classList.toggle('titleDark');

//modificando itens
const cardsDark = document.querySelectorAll('.item');

cardsDark.forEach (element => {
    element.classList.toggle('cardsDark')
})

//  Modificações nos textos dos itens e cabeçalhos dos itens

const cardTextDark = document.querySelectorAll('.item h2, p');


