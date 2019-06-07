// Lab 03
// Exercício 1
class Circulo {
    constructor(private _x: number, private _y:number, private _raio: number) {}

    set x(x:number) {
        this._x = x;
    }

    get x(): number{
        return this._x;
    }

    set y(y:number) {
        this._y = y;
    }

    get y(): number {
        return this._y;
    }
    
    get raio(): number{
        return this._raio;
    }

    area(): number {
        return Math.PI * this.raio**2;
    }

    comprimento(): number {
        return 2 * Math.PI * this.raio;
    }
    
}
let c = new Circulo(3,10, 3);
console.log(c);
console.log(c.area());
console.log(c.comprimento());

// ----------------------------------------------------------------------------------------------

//Exercicio 2
class Moeda {
    constructor(private _valor: number, private _nome: string) {}

    get valor(): number {
        return this._valor;
    }

    get nome(): string {
        return this._nome;
    }
}

class Cofrinho {
    private moedas: Moeda[] = [];

    adicionar(m: Moeda): void {
        this.moedas.push(m);
    }

    get moeda(): Moeda[] {
        return this.moedas;
    }

    calcularTotal(): number {
        // let total = 0;
        // for(let i of this.moedas) {
        //     total += i.valor;
        // }
        // return total;
        const somador: (x: number, y: Moeda) => number = (soma,moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador, 0);
    }

    menorMoeda(): Moeda {
        let reducer = (accumulator: Moeda, currentValue: Moeda) => currentValue.valor<accumulator.valor?accumulator=currentValue:accumulator;
        return this.moedas.reduce(reducer);
    }

    menorValor(): number {
        let reducer = (accumulator: Moeda, currentValue: Moeda) => currentValue.valor<accumulator.valor?accumulator=currentValue:accumulator;
        return this.moedas.reduce(reducer).valor;
    }

    freqMoedas(array: Moeda[]): Map<number,number> {
        let mapa = new Map<number,number>();
        mapa.set(1, 0);
        mapa.set(5, 0);
        mapa.set(10, 0);
        mapa.set(25, 0);
        mapa.set(50, 0);
        mapa.set(100, 0);
        // array.reduce((contagem, valor) => mapa.set(valor.valor, valor.valor);
        // array.reduce((contagem, valor) => contagem.set(valor, (contagem.get(valor)||0)+1), new Map<number,number>());
        return mapa;
    }
    
}
let moeda1: Moeda = new Moeda(5, "5 centavos");
let moeda2: Moeda = new Moeda(100, "100 centavos");
let moeda3: Moeda = new Moeda(10, "10 centavos");
let cofre: Cofrinho = new Cofrinho();
cofre.adicionar(moeda1);
cofre.adicionar(moeda2);
cofre.adicionar(moeda3);
console.log(cofre.calcularTotal());

// ----------------------------------------------------------------------------------------------

// Exercício 3
console.log(cofre.menorValor());
console.log(cofre.menorMoeda());
// console.log(cofre.freqMoedas());