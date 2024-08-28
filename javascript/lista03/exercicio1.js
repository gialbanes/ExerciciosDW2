const dataAtual = new Date();

const novaData = (x) =>{
      const dia = x.getDate() + 3;
      const mes = x.getMonth() + 5;
      const ano = x.getFullYear() + 6;
      return `Hoje é ${dia}/${mes}/${ano}.`;
}
console.log(novaData(dataAtual));
