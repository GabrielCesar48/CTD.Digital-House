// let tratamentoPersonalizado = confirm("Deseja um tratamento personalizado?")

// if(tratamentoPersonalizado) {
//     let nome = prompt("Por favor, digite seu nome");
//     alert("Ola " + nome);
//     document.querySelector("h1").innerText += " " + nome;
// } else {
//     alert("Obrigado por conectar.")
// }

let edad = parseInt(prompt("Introduza sua idade")); 

if ( isNaN(edad) )  { 
    alert("Por favor insira um número"); 
}else if ( edad >= 18){ 
    alert("É maior de idade");
} else {
    alert("É menor de idade");
}
