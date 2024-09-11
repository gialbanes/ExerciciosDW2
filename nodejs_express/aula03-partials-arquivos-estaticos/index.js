//IMPORTANDO O EXPRESS NA APLICAÇÃO
const express = require("express"); //COMMOM JS MODULES: FORMA DE IMPORTAR DO NODE; PROCURA NO NODE_MODULES;

//CRIANDO UMA INSTÂNCIA DO EXPRESS
const app = express(); //UMA FUNÇÃO QUE VEM DE UM MÓDULO

//DEFININDO O EJS COMO REDENRIZADOR DE PÁGINAS
app.set("view engine", "ejs");

//DEFINIR A PASTA DOS ARQUIVOS ESTÁTICOS (PUBLIC)
app.use(express.static("public")); 

//CRIANDO A ROTA PRINCIAPAL
//GET: CRIA ROTAS
app.get("/", (req, res) => {
  res.render("index"); //RES.RENDER: MANDA UMA PÁGINA; O RES.SEND ENVIA APENAS UMA LINHA DE MENSAGEM
});

//ROTA PERFIL
//NOME É UM PARÂMETRO OBRIGATÓRIO
//:NOME REPRESENTA QUE É UM PARÊMTRO; SEM ELE ENTENDE COMO UMA COISA SÓ
//:NOME? => PARÂMETRO OPCIONAL
app.get("/perfil/:nome?", (req, res) => {
  const nome = req.params.nome;
  res.render("perfil", {
    nome: nome,
  });
});

//ROTA DE VÍDEOS
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  res.render("videos", {
    playlist: playlist,
    video: video,
  });
});

//ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["Computador", " Tablet", " Celular", " Notebook"];
  const produto = req.params.produto;
  res.render("produtos", {
    produto: produto,
    listaProdutos: listaProdutos, //NA PÁGINA PRODUTOS.EJS HAVERÁ UM TESTE DE CONDIÇÃO
  });
});

//ROTA PEDIDOS
app.get("/pedidos", (req, res) => {
  //ARRAY DE OBJETOS COM OS PEDIDOS
  const pedidos = [
    { produto: "Celular", valor: 3000 },
    { produto: "Computador", valor: 4000 },
    { produto: "Tablet", valor: 2000 },
    { produto: "Notebook", valor: 3800 },
  ];
  res.render("pedidos", {
    //ENVIANDO O ARRAY P PÁGINA
    pedidos: pedidos,
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
