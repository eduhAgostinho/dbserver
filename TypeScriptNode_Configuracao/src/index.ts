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

//Exercicio 2
let i: number = 0;
while (i != 10) {
    i += 0.2;
}


