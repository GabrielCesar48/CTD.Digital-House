console.log(document);

let numero = document.querySelectorAll(".conteudo");





let usuario = parseInt(prompt("Insira um número de 1 a 3:", "1 = Pedra, 2 = Papel, 3 = Tesoura"));

let maquina = Math.round(Math.random() * 3 + 1);

let pontosUsuario = 0;

let pontosMaquina = 0;

switch (usuario, maquina) {
    case (usuario == 3 && maquina == 2):
        pontosUsuario++;
        alert("A Tesoura cortou o Papel, Parabéns Usuário!");
        break;

    case (usuario == 2 && maquina == 1):
        pontosUsuario++;
        alert("O Papel engoliu a Pedra, Parabéns Usuário!");
        break;

    case (usuario == 1 && maquina == 3):
        pontosUsuario++;
        alert("A Pedra quebrou a Tesoura, Parabéns Usuário!");
        break;

    case (usuario == 2 && maquina == 3):
        pontosUsuario++;
        alert("A Tesoura cortou o Papel, Parabéns Máquina!");
        break;

    case (usuario == 1 && maquina == 2):
        pontosUsuario++;
        alert("O Papel engoliu a Pedra, Parabéns Máquina!");
        break;

    case (usuario == 3 && maquina == 1):
        pontosUsuario++;
        alert("A Pedra quebrou a Tesoura, Parabéns Máquina!");
        break;
}