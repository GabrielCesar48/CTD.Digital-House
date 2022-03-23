// Função seleciona ID
function selectId(id) {
    return document.getElementById(id);
  }
  
  //Variaveis de captura
  let nomeAnimal = selectId("name");
  let descricaoAnimal = selectId("descricao");
  let imagemAnimal = selectId("url");
  
  let salvar = selectId("submitButton");
  
  
  salvar.addEventListener("click", function (event) {
    event.preventDefault();
    insereNaLista(nomeAnimal, descricaoAnimal, imagemAnimal);
  });
  
  function insereNaLista(nomeAnimal, descricaoAnimal, imagemAnimal) {
    // Criando o elemento item
    const item = `<div class="localAnimal portfolio-item mx-auto">
    <h4>${nomeAnimal.value}</h4>
    <p>${descricaoAnimal.value}</p>
    <img src="${imagemAnimal.value}" class="img-fluid"/>
    </div>`;
    //Pegando o destino
    const listaDeEstudo = selectId("localAnimal");
    listaDeEstudo.innerHTML = listaDeEstudo.innerHTML + item;
  }