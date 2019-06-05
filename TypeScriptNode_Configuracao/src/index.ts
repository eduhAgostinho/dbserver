console.log('Olá, mundo!'); 

//Exercicio 1
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
    Exercicio 2
    Resposta: 
    O loop nunca irá parar pois todos os números em JavaScript usam padrão IEEE 754, 
    sendo assim as casas decimais não conseguem ser representadas com precisão perfeita.
*/

// Exercicio 3
function min(x: number, y: number): number {
    return x < y ? x: y;
}
console.log(min(5,1));

// Exercicio 4
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

// Exercicio 5
function toMaiusculaPrimeira(palavra: string): string {
    return palavra.charAt(0).toLocaleUpperCase();
}
console.log(toMaiusculaPrimeira('eduardo'));