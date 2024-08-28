const conversao = (salarioReal) => {
    let salarioDolar = salarioReal * 0.20;
    let salarioEuro = salarioReal * 0.19;
    const formatacaoDolar = salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" });
    const formatacaoEuro = salarioEuro.toLocaleString("pt-br", { style: "currency", currency: "EUR" });
    return `${formatacaoDolar}\n${formatacaoEuro}`;
}
console.log(`${conversao(1200)}`);

