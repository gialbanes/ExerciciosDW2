import express from "express";
const app = express();
import FilmesController from "./controllers/FilmesController.js";
import connection from "./config/sequelize-config.js";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", FilmesController);

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados criada com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

connection
  .query(`CREATE DATABASE IF NOT EXISTS filmes;`)
  .then(() => {
    console.log("Banco de dados está criado!");
  })
  .catch(error => {
    console.log(error);
  });

const porta = 8080;
app.listen(porta, (error) => {
  if (error) {
    console.log(`Erro ao iniciar o servidor. ${error}`);
  } else {
    console.log(`Servidor iniciado em http://localhost:${porta}`);
  }
});
