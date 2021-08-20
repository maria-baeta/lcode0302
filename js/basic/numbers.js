// no final do algoritmo x ter o valor de y e y ter o valor de x

let x = 5;
let y = 8;
let z = 2;

console.log("x = " + x)
console.log("y = " + y)
console.log("z = " + z)



console.log("------ result 1 ------")
console.log("x = " + y)
console.log("y = " + x)

// console.log("------ re`sult 2 ------")
                                // x = 5
                                // y = 8
                                // z = 2

// z = x
                                // x = 5
                                // y = 8
                                // z = 5
// x = y
                                // x = 8
                                // y = 8
                                // z = 5
// y = z 
                                // x = 8
                                // y = 5
                                // z = 5

// console.log("x =", x)
// console.log("y =", y)

console.log("------ result 3 ------")

// fazer essa mesma troca porem utilizando somente x e y, "z" e qqr outra variavel nao existe nesse algoritmo.

                                // x = 5
                                // y = 8
y = y - x
                                // x = 5
                                // y = 8 - 5
                                // y = 3

x = x + y
                                // x = 5 + 3
                                // x = 8
y = x - y
                                // y = 8 - 3
                                // y = 5

console.log("x =", x)
console.log("y =", y)