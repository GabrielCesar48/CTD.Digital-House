
// Capturando as informações para manipulação
let nomeAnimal = document.getElementById('name');
let descricaoAnimal = document.getElementById('descricao');
let fotoAnimal = document.getElementById('url');
let botaoEnviar = document.getElementById('submitButton');

// Ao clicar no botao, executa as ações abaixo
botaoEnviar.addEventListener("click", function (evento) {

    // Evita que a página seja atualizada e que o evento de submit seja disparado
    evento.preventDefault();

     /* Incova função que exibe os dados em tela */
    exibeDadosEmTela(nomeAnimal.value, descricaoAnimal.value, fotoAnimal.value)

})

// Função chamada para exibir as informações em tela

function exibeDadosEmTela(nome, descricao, foto) {

    let nomeDeclarado = document.getElementById('nomeAnimal');
    nomeDeclarado.innerText = nome;

    let descricaoDeclarada = document.getElementById("descricaoAnimal");
    descricaoDeclarada.innerText = descricao;

    let fotoDeclarada = document.getElementById
}