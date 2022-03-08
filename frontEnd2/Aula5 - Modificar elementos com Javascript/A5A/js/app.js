// // let numeros = document.querySelectorAll('#numeros li');

// // for (let i = 0 ; i < numeros.length; i++ ) {
// //     console.log(numeros[i].innerText);
// // } quebrado -----

// const nome = 'Gabriel';

// const meuTemplate = `Meu nome é ${nome}`;

// console.log(meuTemplate);


// const meuTemplate2 = `2 * 3 é ${2 * 3}`

// console.log(meuTemplate2);


// function soma(var1, var2) {
//     return var1 + var2
// }

// const temp = `O resultado é ${soma(2,2)}`

// console.log(temp);



// const template = `<h1>Olá Mundo!</h1>`;

// const body = document.getElementById('body');

// body.innerText != template;
// body.innerHTML += template;

function escreverHTML(titulo, texto) {
    const body = document.getElementById('body')
    const meuTemplate = 
    `<h1>${titulo}</h1>
    <p>${texto}</texto>
    `
    body.innerHTML += meuTemplate
}

escreverHTML('Ola,', 'Isso é um exemplo de template string em HTML');
escreverHTML('É dinamico', 'Podemos inserir elementos HTML mediante o <b>JavaScript</b>' );
escreverHTML('Facilita a programalão,', 'Evita escrever muito códito e reutilizar o que escrevemos.' )
escreverHTML('Neste exemplo,', 'Utilizamos uma única função para poder escrever 4 vezes em html, já imaginou como seria isso sem essa função?')


document.querySelector('h1').style.color = 'red'