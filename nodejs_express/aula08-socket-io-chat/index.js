// IMPORTANDO O EXPRESS (COMMONJS)
const express = require("express");
const { Socket } = require("socket.io");
const app = express();

//CRIANDO A INSTÂNCIA DO SERVIDOR HTTP DO NODE.JS
const http = require("http").createServer(app);

//IMPORTANDO O SOCKET.IO - É NECESSÁRIO IMPORTAR NO FRONT: https://socket.io/docs/v4/client-installation/
const io = require("socket.io")(http);

//TUDO QUE EU COLOCAR AQUI, VAI SER EXECUTADO APÓS O EVENTO DE CONEXÃO
//SOCKET -> REPRESENTA A CONEXÃO DO CLIENTE
io.on("connection", (socket) => {
  socket.on("join", (data) => {
    console.log(`${data.nickname} emtrou no chat`);
    //MANDANDO OS DADOS
    io.emit("join", data);
  });
  //RECEBENDO A MSG DO CHAT
  socket.on("msg", (data) => { 
    console.log(data)
    //Enviando para todos
    io.emit("showmsg", data)
  })
});

//CONFIGURANDO O EJS
app.set("view engine", "ejs");

//ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.render("index");
});

//CRIAÇÃO DO SERVIDOR
const port = 3001;
const host = "0.0.0.0"
http.listen(port, host, () => {
  console.log(`Aplicação rodadno em http://localhost:${port}`);
});
