//IMPORTANDO O EXPRESS NA APLICAÇÃO
const express = require("express"); //COMMOM JS MODULES: FORMA DE IMPORTAR DO NODE; PROCURA NO NODE_MODULES;

//CRIANDO UMA INSTÂNCIA DO EXPRESS
const app = express(); //UMA FUNÇÃO QUE VEM DE UM MÓDULO

//CRIANDO A ROTA PRINCIAPAL
//GET: CRIA ROTAS
app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

//ROTA PERFIL
//NOME É UM PARÂMETRO OBRIGATÓRIO
//:NOME REPRESENTA QUE É UM PARÊMTRO; SEM ELE ENTENDE COMO UMA COISA SÓ
//:NOME? => PARÂMETRO OPCIONAL
app.get("/perfil/:nome?", (req, res) => {
  const nome = req.params.nome; //COLETA O PARÂMETRO E GUARDANDO NA VARIÁVEL
  //VERIFICANDO SE O PARÂMETRO NOME EXISTE
  if(nome){ //SE O NOME == TRUE
    res.send(`Seja bem-vindo ${nome}`);
  } else {
    res.send(`<h2>Faça login para acessar o seu perfil</h2>`)
  }
});

//ROTA DE VÍDEOS
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  if(playlist && video == undefined){
    res.send(`Você está na playlist de ${playlist}`);
  } else if(playlist && video){
    res.send(`Você está na playlist de ${playlist} <br>
      Reproduzindo o vídeo ${video}`);
  } else {
    res.send("<h1>Página de vídeos</h1>");
  }
});

//INICIANDO O SERVIDOR NA PORTA 8080; ELE RECEBRÁ AS REQUISIÇÕES E ENVIARÁ AS RESPOSTAS
app.listen(8080, (error) => {
  //PORTA PADRÃO; FUNÇÃO PARA TRATAR UM POSSÍVEL ERRO
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
