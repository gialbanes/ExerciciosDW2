//IMPORTANDO O EXPRESS NA APLICAÇÃO
//const express = require("express"); //COMMOM JS MODULES: FORMA DE IMPORTAR DO NODE; PROCURA NO NODE_MODULES;

//ES6 MODULES
import express from "express";

//CRIANDO UMA INSTÂNCIA DO EXPRESS
const app = express(); //UMA FUNÇÃO QUE VEM DE UM MÓDULO

//IMPORTANDO OS CONTROLLER - ROTAS
import ClientesController from "./controllers/ClientesController.js";

//DEFININDO O EJS COMO REDENRIZADOR DE PÁGINAS
app.set("view engine", "ejs");

//DEFINIR A PASTA DOS ARQUIVOS ESTÁTICOS (PUBLIC)
app.use(express.static("public"));

//DEFININDO O USO DAS ROTAS QUE ESTÃO NOS CONTROLLER; NÃO ADIANTA IMPORTAR SÓ OS CONTROLLERS
app.use("/", ClientesController); //A BARRA INDICA PRA QUE ELE USE TODAS AS ROTAS DENTRO DO CLIENTESCONTROLLER

//CRIANDO A ROTA PRINCIAPAL
//GET: CRIA ROTAS
app.get("/", (req, res) => {
  res.render("index"); //RES.RENDER: MANDA UMA PÁGINA; O RES.SEND ENVIA APENAS UMA LINHA DE MENSAGEM
});

//INICIANDO O SERVIDOR NA PORTA 8080; ELE RECEBRÁ AS REQUISIÇÕES E ENVIARÁ AS RESPOSTAS
const port = 8080;
app.listen(port, (error) => {
  //PORTA PADRÃO; FUNÇÃO PARA TRATAR UM POSSÍVEL ERRO
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
