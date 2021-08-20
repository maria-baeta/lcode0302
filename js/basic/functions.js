// function <name> (<parameters>) {
//     <context>
// }

// value = ?
// result
// number


function multiplicaPorDois(value) {
    console.log("ola eu estou aqui dentro dessa funcao!")
    return value * 2
}

function multiplica(valor, multiplicador) {
    return valor * multiplicador
}

const number = 4
let result = multiplicaPorDois(number)

console.log(result)

result = multiplica(5, 10);

console.log(result)

let soma = function(x, y) {
    console.log("2 - ", x, y)
    return x + y;
}

console.log(soma(1, 3))

const calcula = function(operacao, x, y) {
    console.log("1 - ", operacao, x, y)
    return operacao(x,y)
}

result = calcula(soma, 8, 10)

console.log("resultado soma", result)

result = calcula(multiplica, 8, 10)

console.log("resultado multiplica", result)

function naoRetornaNada() {
    console.log("eu nao vou retorna nada");

}

result = naoRetornaNada();
console.log("chamada de funcao sem retorno", result)

// sistema chamou calcula com parametros Function soma, 8, 9
    // dentro de calcula
    // calcula atribui Function soma a variavel operacao, 8 a x e 9 a y
    // calcula chama a funcao operacao que por sua vez esta populada pela funcao soma.
        // dentro de soma
        // é somado x e y e retorna o resultado.
    // pega o resultado da chamada da funcao ( seja ela qual for ) no caso soma e retorna
// sistema recebe o valor de calcula