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

    calcularTotal(): number {
        // let total = 0;
        // for(let i of this.moedas) {
        //     total += i.valor;
        // }
        // return total;
        const somador: (x: number, y: Moeda) => number = (soma,moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador, 0);
    }
}
let moeda1: Moeda = new Moeda(50, "50 centavos");
let moeda2: Moeda = new Moeda(25, "25 centavos");
let cofre: Cofrinho = new Cofrinho();
cofre.adicionar(moeda1);
cofre.adicionar(moeda2);
console.log(cofre.calcularTotal());

// ----------------------------------------------------------------------------------------------

// Exercício 3
