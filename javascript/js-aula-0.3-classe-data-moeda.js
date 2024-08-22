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
console.log(`Estamos no mês ${mes}!`)

//PEGAR O ANO ATUAL
const ano = dataAtual.getFullYear();
console.log(`Estamos no ano ${ano}!`)

console.log(`Hoje é ${dia}/${mes}/${ano}.`)
