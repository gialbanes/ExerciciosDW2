const calculadora = (n1, operador1, n2, operador2, n3, operador3, n4) => {
    return eval(`${n1} ${operador1} ${n2} ${operador2} ${n3} ${operador3} ${n4}`); 
};

console.log(`O resultado da operação é ${calculadora(6, "+", 6, "+", 6, "+", 6)}.`);