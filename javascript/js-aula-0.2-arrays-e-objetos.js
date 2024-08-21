//ARRAYS (VETOR OU LISTA)
let produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(typeof produtos);
console.log(produtos); //AQUI APARECE ASSIM: [ 'Computador', 'Notebook', 'Celular', 'Tablet' ]

//EXIBINDO ELEMENTOS DE UM VETOR PELO ÍNDICE (SEM LOOP): DESSA MANEIRA CORRIJE, MAS NÃO É MUITO VIAVEL
console.log(produtos[0]);
console.log(produtos[1]);
console.log(produtos[2]);
console.log(produtos[3]);

console.log("----------------------------------------------------");

//EXIBINDO ELEMENTOS DO VETOR COM O FOR (COM ÍNDICES)
//c é um contador
for (let c in produtos) {
  // console.log(`${c} - ${produtos[c]}`);
  console.log(`${Number(c) + 1} - ${produtos[c]}`); //TRANSFORMANDO O CONTADOR DE STRING -> NUMBER (CASTING): DESSA FORMA O ÍNDICE NÃO COMEÇARÁ DO 0
}

console.log("----------------------------------------------------");

//EXIBINDO ELEMENTOS DO VETOR COM FOREACH (COM ÍNDICES)
produtos.forEach(function (produto, i) {
  //produto: representa os itens da lista
  console.log(i + 1, produto); //COM FOREACH NÃO É NECESSA´RIO CASTING
});

console.log("----------------------------------------------------");

//MÉTODO DE MANIPULAÇÃO DE VETORES
let listaFrutas = ["Laranja", " Maçã", " Banana"];
console.log(`Nosso vetor é o: ${listaFrutas}`);

//MÉTODO PUSH: INSERE UM NOVO ELEMENTO NO FINAL DA LISTA
listaFrutas[3] = " Morango"; //ADD SEM O PUSH. RUIM POIS NEM SEMPRE SABEMOS O TAMANHO DO VETOR
console.log(`Nosso vetor é o: ${listaFrutas}`);
listaFrutas.push(" Abacaxi"); //ADD COM O PUSH
console.log(`Nosso vetor é o: ${listaFrutas}`);

//MÉTODO UNSHIFT: INSERE UM NOVO ELEMENTO NO INÍCIO DA LISTA
listaFrutas[0] = " Pera"; //ADD SEM O UNSHIFT. EXCLUI O PRIMEIRO ELEMENTO E SUBSTITUI
console.log(`Nosso vetor é o: ${listaFrutas}`);
listaFrutas.unshift(" Laranja"); //ADD COM O UNSHIFT
console.log(`Nosso vetor é o: ${listaFrutas}`);

console.log("----------------------------------------------------");

//MÉTODO LENGTH: RETORNA O NÚMERO DE ELEMENTOS NO VETOR
let numeros = [6, 8, 2, 9, 3];
console.log(`Nosso vetor é o: ${numeros}`);
console.log(`O número de elementos nesse vetor é ${numeros.length}`);

//SORT: ORDENA O VETOR
console.log(`O primeiro valor do vetor é ${numeros[0]}`);
console.log(`Nosso vetor ordenado é o ${numeros.sort()}`);
console.log(`O primeiro valor do vetor é ${numeros[0]}`);

console.log(
  "-------------------------------------------- OBJETOS LITERAIS ----------------------------------------------------"
);

//OBJETOS LITERAIS (ATRIBUTOS E MÉTODOS)
const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    return "Acelerando...";
  },
  frear() {
    return "Freando...";
  },
};
console.log(carro.modelo);
console.log(carro.acelerar());

console.log("----------------------------------------------------");

//NOVO OBJETO
const product = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho",
};
console.log(
  `O ${product.nome} da marca ${product.marca} custa apenas R$${product.preco}. ${product.descricao}.`
);

console.log("----------------------------------------------------");

//ARRAY DE OBJETOS
const productList = [
  {
    nome: "Computador",
    marca: "Intel",
    preco: 4000,
    descricao: "PC moderno com bom desempenho",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima qualidade de processamento",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 15000,
    descricao: "Muito barato",
  },
];
console.log(productList);

//EXIBINDO ARRAY DE OBJETOS COM FOREACH
productList.forEach(function (product){
    console.log(`Produto: ${product.nome}`);
    console.log(`Marca: ${product.marca}`);
    console.log(`Preço: ${product.preco}`);
    console.log(`Descrição: ${product.descricao}`);
    console.log("");

});
