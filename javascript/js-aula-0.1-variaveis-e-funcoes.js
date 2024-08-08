//delcaracao de variaveis
//const x let x var

const nome = "Giovana"; //var criadas com const precisam ser atribuidas logo de cara
var cidade;
var idade;
var endereco;

idade = 18;
cidade = "Cananeia";

console.log(nome);
console.log(cidade);
console.log(idade);
console.log(endereco);

console.log("-------------------------------------------------------");

//TYPEOF
const sobrenome = "Albanês";

console.log(typeof sobrenome);
console.log(typeof endereco);

console.log("-------------------------------------------------------");

//TIPOS DE FUNÇÕES
//função simples:
console.log("Função simples:");
function minhaFuncao() {
  console.log("Olá mundo!");
}
minhaFuncao();

console.log("-------------------------------------------------------");

//funcao com parametro / argumento
console.log("Função com argumento:");
function saudacao(nome) {
  //para deixar um parametro opcional é so deixar ele pre informado
  console.log("Bem-vindo: " + nome);
}

function saudacao(cidade, nome = "usuario") {
  // cidade = obrigatório nome = opcional
  console.log("Olá, bem-vindo, " + nome + " de " + cidade);
}
saudacao("Cananeia");

console.log("-------------------------------------------------------");

function soma(n1, n2) {
  //nesse caso recebe como parametro 2  numeros: n1 e n2
  console.log(n1 + n2);
  resultado = n1 + n2; //concatenado com lietralTemplate Strings ${}: placeholder
  console.log(`A soma dos dois numeros foi ${resultado}`); //print
}
soma(5, 5);

console.log("-------------------------------------------------------");

numero1 = 10;
numero2 = 20;
soma(numero1, numero2); //os parametros que sao enviados para a funcao sao chamados de argumentos

console.log("-------------------------------------------------------");

soma(20, 70);

console.log("-------------------------------------------------------");

saudacao("Giovana");

console.log("-------------------------------------------------------");

//funcao com retorno
console.log("Função com retorno:");
function Soma(n1, n2) {
  return n1 + n2; //indicado para operações matemáticas
}
console.log(`A soma dos dois números foi ${Soma(2, 6)}.`);

console.log("-------------------------------------------------------");

//função com mais de um retorno
console.log("Função com mais de um retorno:");
function parImpar(numero) {
  if (numero % 2) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
let numero = 4;
console.log(`O número enviado é ${parImpar(numero)}!`);

console.log("-------------------------------------------------------");

//função anônima:deve ser colocada dentro de uma variável; a vantagem é so nomear a variável, pode criar vários funções no bloco
console.log("Função anônima:");
const dobro = function (x) {
  return x * 2;
};

console.log(`O dobro do número é ${dobro(15)}.`);

console.log("-------------------------------------------------------");

//arrow function: é um tipo de função anônima; sempre vamos utilizar esse padrão; quando ela tem somente um parâmetro, você pode excluir o parenteses;
console.log("Arrow function:");
const Dobro = (x) => {
  return x * 2;
};
console.log(`O dobro do número é ${dobro(20)}.`);

console.log("-------------------------------------------------------");

//arrow function com mais de um parâmetro: eles precisam estar entre parenteses
console.log("Arrow function com mais de um parâmetro:");
const calculadora = (n1, operador, n2) => {
  return eval(`${n1} ${operador} ${n2}`); //eval: funcao interna que realiza uma operação matemática com 3 parâmetros
};
console.log(`O resultado da operação é ${calculadora(6, "-", 6)}.`);

console.log("-------------------------------------------------------");

//função imediata - IIFE (Immediately Invoked Function EXpression): tipo de funcao anônima; não é muito usada; não precisa ser invocada, já é executada automaticamente;
console.log("Função imediata:");
const iife = (function () {
  console.log("Executando imediatamente!");
})(); //parâmetros

console.log("-------------------------------------------------------");

//função imediata com parâmetro
console.log("Função imediata com parâmetro:");
const start = (function (app) {
  console.log(`Executando imediatamente o app ${app}.`);
})("Instagram");
