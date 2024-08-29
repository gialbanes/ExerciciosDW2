//IMPORTANDO O EXPRESS NA APLICAÇÃO
const express = require("express"); //COMMOM JS MODULES: FORMA DE IMPORTAR DO NODE; PROCURA NO NODE_MODULES;

//CRIANDO UMA INSTÂNCIA DO EXPRESS
const app = express(); //UMA FUNÇÃO QUE VEM DE UM MÓDULO

//CRIANDO A ROTA PRINCIAPAL
//GET: CRIA ROTAS     
app.get("/", function (req, res) {
  res.send("Hello world!");
});

//INICIANDO O SERVIDOR NA PORTA 8080; ELE RECEBRÁ AS REQUISIÇÕES E ENVIARÁ AS RESPOSTAS
app.listen(8080, function (error) {
  //PORTA PADRÃO; FUNÇÃO PARA TRATAR UM POSSÍVEL ERRO
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
