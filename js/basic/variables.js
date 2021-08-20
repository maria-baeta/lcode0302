// teste = "blablabla"

// var teste;
// let teste;
// teste = "blablabla";

// console.log(teste);

// teste = "eu escolho voce!!!";

// console.log(teste);


//// como a gente altera um const

// const caminhoBancoDeDados = "caminho do banco aqui"

// console.log(caminhoBancoDeDados)

// caminhoBancoDeDados = "outro caminho do banco de dados"
// console.log(caminhoBancoDeDados)


const animal = {
    // let nome: "amora",
    nome: "amora",
    // let "raça": "cachorro"
    raça: "cachorro",
    "-teste de variavel que nao é aceito": "blabal"
}

console.log(animal.raça)
console.log(animal["raça"])
console.log(animal["-teste de variavel que nao é aceito"])
// ISSO NAO PODE :)
// animal = {
//     nome: "mickey",
//     "raça": "cachorro"
// }

animal.nome = "mickey"
animal.marca = "nike"

console.log(animal)

const CAMINHO_BANCO_DE_DADOS = "caminho imutavel do banco de dados"
