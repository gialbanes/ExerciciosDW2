import express from "express";
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcrypt";

//ROTA DE LOGIN
router.get("/login", (req, res) => {
  res.render("login");
});

//ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

//ROTA DE CRIAÇÃO DE USUÁRIO
router.post("/createUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //VERIFICAR SE O USUÁRIO JÁ ESTÁ CADASTRADO
  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    if (user == undefined) {
      // AQUI É FEITO O CADASTRO E O HASH DE SENHA
      // O BCRYPT PRECISA DE ALGUM VALOR PARA AUMENTAR A SEGURANÇA DA SENHA; NÃO PODE SER TÃÃÃÃO ALTA POIS PODE AFETAR O PROCESSOR DE HASH, DEIXAR MAIS DEMORADO EM UMA APLICAÇÃO MAIOR, POR EXEMPLO
      const salt = bcrypt.genSaltSync(10);
      const hash =  bcrypt.hashSync(password, salt);
      User.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
        //CASO O USUÁRIO JÁ ESTEJA CADASTRADO
        res.send(`Usuário já cadastrado. <br>
        <a href="/login">Faça o login!</a>`)
    }
  });
});

//ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //BUSCA O USUÁRIO NO BANCO
  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    //SE O USUÁRIO ESTIVER CADASTRADO
    if (user != undefined) {
        //VALIDA A SENHA, OU SEJA, VERIFICA O HASH
        const correct = bcrypt.compareSync(password, user.password) 
        //SE A SENHA FOR VÁLIDA
        if(correct) {
            //AUTORIZA O LOGIN
            res.redirect("/");
        } else {
            //SENHA NÃO VÁLIDA
            res.send(`Senha inválida! <br> 
                <a href="/login">Tente novamente!</a>`)
        }
    } else {
      res.send(`Usuário não cadastrado. <br>
        <a href="/login">Tente novamente!</a>`);
    }
  });
});
export default router;
