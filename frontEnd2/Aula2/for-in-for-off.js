let pessoa = {
    nome: 'Gabriel',
    idade: 27
};

for (let dado in pessoa) {
    console.log(dado, pessoa[dado])
}


let artistas = ['Gabriel', 'Neymar', 'Mbappe', 'Emma Watson' ];

for (let artista of artistas) {
    console.log(artista)
}