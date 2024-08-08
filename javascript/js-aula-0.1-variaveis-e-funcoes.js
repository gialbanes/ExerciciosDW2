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

console.log("-----------------------------")

//TYPEOF
const sobrenome = "Albanês";

console.log(typeof(sobrenome))
console.log(typeof(endereco))


console.log("-----------------------------")

//TIPOS DE FUNÇÕES
//função simples:
console.log("Função simples:");
function minhaFuncao(){
    console.log("Olá mundo!");
}
minhaFuncao();

console.log("-----------------------------")

//funcao com parametro / argumento
console.log("Função com argumento:");
function saudacao(nome) { //para deixar um parametro opcional é so deixar ele pre informado 
    console.log("Bem-vindo: " + nome)    
}

function saudacao(cidade, nome="usuario"){ // cidade = obrigatório nome = opcional
    console.log("Olá, bem-vindo, " + nome + " de " + cidade);
}
saudacao("Cananeia");


console.log("-----------------------------")

function soma(n1,n2){ //nesse caso recebe como parametro 2  numeros: n1 e n2
    console.log(n1 + n2);
    resultado = n1+n2; //concatenado com lietralTemplate Strings ${}: placeholder
    console.log(`A soma dos dois numeros foi ${resultado}`); //print
}
soma(5,5)

numero1 = 10;
numero2 = 20;
soma(numero1, numero2); //os parametros que sao enviados para a funcao sao chamados de argumentos 
soma(20,70);
saudacao("Giovana");


console.log("-----------------------------")


//funcao com retorno 
function Soma(n1,n2){
    return n1 + n2 //indicado para operações matemáticas
}
console.log(`A soma dos dois números foi ${Soma(2,6)}.`)


console.log("-----------------------------")
 
//função com mais de um retorno
function parImpar(numero){
    if(numero % 2){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
let numero = 4;
console.log(`O número enviado é ${parImpar(numero)}!`);