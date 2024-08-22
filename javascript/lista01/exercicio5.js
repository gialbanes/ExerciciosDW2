const media = function(nota1, nota2){
    const resultado = (nota1 + nota2) / 2;
    if(resultado <= 5){
        return 'Reprovado!';
    } else {
        return 'Aprovado!';
    }
};

console.log(media(2, 3));


