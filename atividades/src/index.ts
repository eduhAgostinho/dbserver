// Lab 02
//Exercício 1
function pares(inicio: number, fim: number) {
    let par = [];
    for(let i = inicio; i<=fim; i++ ) {
        if (i%2 === 0) {
            par.push(i);
        }
    }
    return par;
}
console.log(pares(1,10));
function pares2(inicio: number, fim: number) {
    let par = [];
    let i = inicio;
    while(i<=fim) {
        if (i%2 === 0) {
            par.push(i);
        }
        i++;
    }
    return par;
}
console.log(pares2(5,15));

/*
    Exercício 2
    Resposta: 
    O loop nunca irá parar pois todos os números em JavaScript não conseguem ser representadas com precisão perfeita.
*/

// Exercício 3
function min(x: number, y: number): number {
    return x < y ? x: y;
}
console.log(min(5,1));

// Exercício 4
function pow(x: number, y: number): number {
    let result = x;
    for (let i = y; i>1; i--) {
        result = result*x;  
    }
    return result;
}
console.log(pow(2,4));
function pow2(x: number, y: number): number {
    if (y === 1 ) return x;
    return x*pow2(x, y-1);
}
console.log(pow2(10,2));

// Exercício 5
function toMaiusculaPrimeira(palavra: string): string {
    return palavra.replace(palavra.charAt(0), palavra.charAt(0).toLocaleUpperCase());
}
console.log(toMaiusculaPrimeira('eduardo'));

//Exercício 6
function getMax(numeros: Array<number>): number {
    let maior = 0;
    for (let i = 0; i<=numeros.length; i++) {
        if (numeros[i] > maior) maior = numeros[i];
    }
    return maior;
}
console.log(getMax([50, 10, 8, 3851]));

//Exercício 7
