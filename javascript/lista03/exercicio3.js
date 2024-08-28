const formatacao = (nome) =>{
    const maiusculas = nome.toUpperCase();
    const minusculas = nome.toLowerCase();
    const tam = nome.length;
    return `${maiusculas}\n${minusculas}\n${tam}`;
}
console.log(formatacao('Giovana'))