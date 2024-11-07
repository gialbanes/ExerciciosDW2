import express from "express";
import multer from "multer";
import connection from "./config/sequelize-config.js";
import Galeria from "./models/Galeria.js";
const app = express();

//REALIZANDO A CONEXÃO COM O BANCO DE DADOS
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

//CRIANDO O BANCO DE DADOS SE ELE NÃO EXISTIR
connection
  .query(`CREATE DATABASE IF NOT EXISTS galeria;`)
  .then(() => {
    console.log("Banco de dados já criado.");
  })
  .catch((error) => {
    console.log(error);
  });

// Configurações
app.use(express.static("public"));
app.set("view engine", "ejs");

const upload = multer({ dest: "public/uploads/" });

app.get("/", (req, res) => {
  Galeria.findAll().then((imagens) => {
    res.render("index", {
      imagens: imagens,
    });
  });
});

// rota de upload
app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file.filename;
  Galeria.create({
    file: file,
  });
  res.redirect("/");
});

const port = 8081;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}.`);
  }
});
