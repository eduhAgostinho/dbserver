// Lab 03
// Exercício 1
class Circulo {
    raio: number;
    constructor(private _x: number, private _y:number) {
        this.raio = this._y-this._x;
    }

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
    
    area(): number {
        return Math.PI * this.raio**2;
    }

    comprimento(): number {
        return 2 * Math.PI * this.raio;
    }
    
}
let c = new Circulo(3,10);
console.log(c);
console.log(c.area());
console.log(c.comprimento());

// ----------------------------------------------------------------------------------------------

//Exercicio 2
class Moeda {
    constructor(private valor: number, private nome: string) {}

    getValor(): number {
        return this.valor;
    }

    getNome(): string {
        return this.nome;
    }
}

class Cofrinho {
    // private moedas: Moeda[];
    constructor(){}

    

}