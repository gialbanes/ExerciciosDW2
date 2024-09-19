//ES6 MODULES
import express from "express";

//AQUI VOU UTILIZAR SOMENTE UMA PARTE DO EXPRESS, VAMOS CARREGAR SÓ UM MÉTODO
const router = express.Router();

//ROTA DE CLIENTES
router.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Giovana", cpf: 53379210889, endereco: "Cannaéia" },
    { nome: "Giovana", cpf: 53379210889, endereco: "Cannaéia" },
    { nome: "Giovana", cpf: 53379210889, endereco: "Cannaéia" },
    { nome: "Giovana", cpf: 53379210889, endereco: "Cannaéia" },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

export default router;
