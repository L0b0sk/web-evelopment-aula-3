var nome = "fiap";
console.log(nome);

let idade = 19;
console.log(idade); 

const sobrenome = "Fiapinho";
console.log(sobrenome);


//declarando uma variavel indefinda
let nome1;
console.log(nome1);


//declarando uma variavel vazia / nula
let nome2=null;
console.log(nome2);


//Tipos de variaveis 
let exemplo1 = 10; 
console.log(typeof exemplo1);

let exemplo2 = "Tecnologia";
console.log(typeof exemplo2);

let exemplo3 = true;
console.log(typeof exemplo3);

let exemplo4 = {};
console.log(typeof exemplo4);

let exemplo5 = [];
console.log(typeof exemplo5);


//conversoes

let numFloat = 123.456;
console.log(parseInt(numFloat));

let numString = "123.456";
console.log(parseFloat(numString));


// metodos

let frase = "O mundo da tecnologia";
console.log(frase.length);


//indexOF - retorna um trecho do texto

let texto = "a progrmamacao indomavel e sustentavel";
console.log(texto.indexOf("cao"))


//slice - retorna um trecho do texto com inicio e final

let info = "processamento de ponta";
console.log(info.slice(8,10));