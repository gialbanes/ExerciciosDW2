// ORM - Sequelize: uma ORM pega os dados da tabela e transforma em objetos, e pega seus objetos do código e transforma em dados
import Sequelize from "sequelize";
//CONFIGURAÇÃO DO SEQUELIZE
import connection from "../config/sequelize-config.js";

//DEFINE: CRIA A TABELA
const Cliente = connection.define("clientes", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false, //SE O NOME PODE SER VAZIO NO BANCO
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//ELE NÃO FORÇA A CRIAÇÃO CASO A TABELA JÁ EXISTA
Cliente.sync({ force: false });
export default Cliente;
