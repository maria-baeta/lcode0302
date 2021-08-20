let texto = "qualquer texto que a gente escreve é um concatenado de chars, formando uma string que nem essa";

let dogName = "whiskey";
let dogRace = "border collie";
let dogBirthday = "18/02/2020"
let animalType = "cachorro"

// let descricao = dogName + " é um " + animalType + " da raça " + dogRace;
let descricao = `${dogName} é um ${animalType} da raça ${dogRace}`;

console.log(descricao)

const day = dogBirthday.slice(0, 2);
let birthdayText = `O aniversario do ${dogName} é dia ${day}`

console.log(birthdayText)
console.log(dogBirthday)





// falar no sabado sobre como funciona empresas e equipes de desenvolvimento.