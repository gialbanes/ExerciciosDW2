import express from "express";
const router = express.Router();

//IMPORTANDO O MODEL DE CLIENTE
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES; GET => LENDO ALGO, PEGANDO PELA URL, ACESAR UM RECURSO
router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

//ROTA PARA CADASTRAR DADOS; POST -> CADASTRAR
router.post("/clientes/new", (req, res) => {
  //RECENDO OS DADOS DO FORM E GUARDANDO NAS VARIÁVEIS
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    //NOME DA COLUNA - NOME DA VARIÁVEL
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  }).then(() => {
    res.redirect("/clientes");
  });
});

//ROTA PARA EXCLUIR CLIENTES
//ESSA ROTA POSSUI UM PARÂMETRO ID
router.get("/clientes/delete/:id", (req, res) => {
  //COLETAR O ID QUE VEIO NA URL
  const id = req.params.id;
  //MÉTODO PARA EXCLUIR
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
})
export default router;
