const filmesList = [
  {
    titulo: "Vingadores Ultimato",
    genero: "Ação, Aventura, Fantasia",
    ano: 2019,
    classificacaoIdade: "12 anos",
  },
  {
    titulo: "Pantera Negra",
    genero: "Ação, Aventura, Drama",
    ano: 2018,
    classificacaoIdade: "12 anos",
  },
  {
    titulo: "Guardians of the Galaxy",
    genero: "Ação, Aventura, Comédia",
    ano: 2014,
    classificacaoIdade: "12 anos",
  },
];
filmesList.forEach(function (filme) {
  console.log(`Título: ${filme.titulo}`);
  console.log(`Gênero: ${filme.genero}`);
  console.log(`Ano de lançamento: ${filme.ano}`);
  console.log(`Classificação de idade: ${filme.classificacaoIdade}`);
  console.log("");
});
