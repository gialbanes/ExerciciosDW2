// Importando o Express com ES6 Modules
import express from "express";
// Iniciando o Express na variável app
const app = express();

//IMPORTANDO O SEQUELIZE COM OS DADOS DA CONEXAO
import connection from "./config/sequelize-config.js";
// Importando os Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";
import UsersController from './controllers/UsersController.js';

//IMPORTANDO O GERADOR DE SESSÕES DO EXPRESS
import session from "express-session";

//IMPORTANDO O MIDDLEWARE AUTH
import Auth from "./middleware/Auth.js";

//IMPORTANDO O EXPRESS FLASH
import flash from "express-flash";
app.use(flash())

//CONFIGURANDO O EXPRESS-SESSION
app.use(session({
  secret: "lojasecret",
  cookie: {maxAge: 3600000}, //SESSÃO EXPIRA EM 1 HORA
  saveUninitialized: false,
  resave: false
}))

//PERMITE CAPTURAR DADOS VINDOS DE FORMULÁRIOS
app.use(express.urlencoded({extended: false}))

//REALIZANDO A CONEXÃO COM O BANCO DE DADOS
connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
}).catch((error) => {
    console.log(error);
});

//CRIANDO O BANCO DE DADOS SE ELE NÃO EXISTIR
connection.query(`CREATE DATABASE IF NOT EXISTS loja;`).then(() =>{
    console.log("Banco de dados já criado.");
}).catch((error) =>{
    console.log(error)
})

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);
app.use("/", UsersController);

// ROTA PRINCIPAL
app.get("/", Auth, function (req, res) {
  res.render("index", {
    messages: req.flash()
  });
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
