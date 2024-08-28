//CLASSE, DATA E MOEDA

//OBJETO LITERAL: NÃO DERIVA DE CLASSE
const carro = {
  marca: "Ford",
  modelo: "Focus",
  ano: 2014,
  buzinar() {
    return "Beep! Beep!";
  },
};
console.log(carro.marca, carro.modelo);
console.log(carro.buzinar());

console.log("----------------------------------------------------");

//CLASSE
class Carro {
  //ATRIBUTOS DENTRO DA CLASSE
  constructor(marca, modelo, ano) {
    //CONSTRUCTOR: ALUSÃO À FÁBRICA;  AQUI SÓ DETERMINAMOS ASCHAVES, OS VALORES VÃO NOS OBJETOS
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  buzinar() {
    return "Beep! Beep!";
  }
}

//CRIANDO UMA INSTÂNCIA (OBJETO) DA CLSSE CARRO
//DUAS MANEIRAS DE PASSAR OS VALORES DOS ATRIBUTOS:
//const carroPopular = new Carro("Ford", "Focus", 2014);
const carroPopular = new Carro();
(carroPopular.marca = "Ford"),
  (carroPopular.modelo = "Focus"),
  (carroPopular.ano = 2014);
console.log(
  carroPopular.marca,
  carroPopular.modelo,
  carroPopular.ano,
  carroPopular.buzinar()
);

console.log("----------------------------------------------------");

const carroEsportivo = new Carro("Chevrolet", "Camaro", 2024);
console.log(
  carroEsportivo.marca,
  carroEsportivo.modelo,
  carroEsportivo.ano,
  carroEsportivo.buzinar()
);

console.log("----------------------------------------------------");

//MANIPULANDO DATAS NO JS
//CRIANDO UMA INSTÂNCIA DA CLASSE DATE DO JS (PARA UTILIZAR SEUS MÉTDOOS)
const dataAtual = new Date();

//PEGAR O DIA ATUAL
const dia = dataAtual.getDate();
console.log(`Hoje é dia ${dia}!`);

//PEGAR O MÊS ATUAL
const mes = dataAtual.getMonth() + 1;
console.log(`Estamos no mês ${mes}!`);

//PEGAR O ANO ATUAL
const ano = dataAtual.getFullYear();
console.log(`Estamos no ano ${ano}!`);

console.log(`Hoje é ${dia}/${mes}/${ano}.`);

console.log("----------------------------------------------------");

//MANIPULANDO MOEDAS NO JS
let salario = 2500.3;
console.log(salario);
//TO-FIXED - DEFINE O NUMERO DE CASAS DECIMAIS
console.log(salario.toFixed(2));
//REPLACE - ALTERA O FORMATO DA CASA DECIAMAL
console.log(salario.toFixed(2).replace(".", ","));
// toLocaleString -faz a formatação para determinada moeda
//REAL
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);
//DÓLAR
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "USD" })
);
//EURO
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "EUR" })
);

//CONVERTENDO REAL - DÓLAR
let salarioDolar = salario * 0.18;
console.log(
  salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" })
);

console.log("----------------------------------------------------");

//FORMATANDO STRINGS
const nome = "Giovana Albanês";
//LETRAS MAIÚSCULAS
console.log(nome.toUpperCase());
//LETRAS MINÚSCULAS
console.log(nome.toLowerCase());
//CONTAR LETRAS - LENGHT
console.log(nome.length);

//PODEMOS USAR O LENGHT PARA ARRAYS
const lista = ["Maça", "Banana", "Morango"];
console.log(lista.length);
