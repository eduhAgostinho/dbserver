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
console.log('->Exercício 1');
console.log(c);
console.log(c.area());
console.log(c.comprimento());
console.log('-----------------------------------------------------');

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
        const somador: (x: number, y: Moeda) => number = (soma,moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador, 0);
    }

    menorMoeda(): Moeda {
        return this.moedas.reduce((smaller: Moeda, currentValue: Moeda) => 
            currentValue.valor<smaller.valor?smaller=currentValue:smaller, new Moeda(100, "1 Real"));
    }

    menorValor(): number {
        return this.moedas.reduce((smaller: Moeda, currentValue: Moeda) => 
            currentValue.valor<smaller.valor?smaller=currentValue:smaller, new Moeda(100, "1 Real")).valor;
    }

    freqMoedas(): Map<number, number>{
        let mapa = new Map<number,number>();
        mapa.set(1, 0);
        mapa.set(5, 0);
        mapa.set(10, 0);
        mapa.set(25, 0);
        mapa.set(50, 0);
        mapa.set(100, 0);
        this.moedas.map((m) => mapa.set(m.valor, (mapa.get(m.valor)||0)+1));
        return mapa;
    }
}
let moeda1: Moeda = new Moeda(5, "5 centavos");
let moeda2: Moeda = new Moeda(100, "1 Real");
let moeda3: Moeda = new Moeda(10, "10 centavos");
let moeda4: Moeda = new Moeda(1, "1 centavos");
let moeda5: Moeda = new Moeda(50, "50 centavos");
let cofre: Cofrinho = new Cofrinho();
cofre.adicionar(moeda1);
cofre.adicionar(moeda2);
cofre.adicionar(moeda3);
cofre.adicionar(moeda4);
cofre.adicionar(moeda4);
cofre.adicionar(moeda5);
cofre.adicionar(moeda5);
console.log('-> Exercício 2');
console.log(cofre.calcularTotal());
console.log(JSON.stringify(cofre));
console.log('-----------------------------------------------------');

// ----------------------------------------------------------------------------------------------

// Exercício 3
console.log('-> Exercício 3');
console.log(cofre.menorValor());
console.log(cofre.menorMoeda());
console.log(cofre.freqMoedas());
console.log('-----------------------------------------------------');

// ----------------------------------------------------------------------------------------------

// Exercício 4
abstract class Cliente {
    constructor(private _nome: string){}

    get nome(): string{
        return this._nome;
    }

    abstract getMensalidade(): number;
}

class ClienteFisico extends Cliente{
    constructor(_nome: string, private _idade: number, private _salario: number) {
        super(_nome);
    }

    getMensalidade(): number {
        return this._idade<60?this._salario*0.15:this._salario*0.1;
    }

    get idade():number {
        return this._idade;
    }

    set idade(i: number) {
        this._idade = i;
    }

    get salario(): number {
        return this._salario;
    }

    set salario(s: number) {
        this._salario = s;
    }
}

class ClienteJuridico extends Cliente {
    constructor(nome: string,private mensalidade: number){
        super(nome);
    }

    getMensalidade(): number {
        return this.mensalidade;
    }

    setMensalidade(m: number): void {
        this.mensalidade = m;
    }
}

class CadastroCliente {
    private _clientes: Cliente[] = [];
    constructor() {}

    cadastrarCliente(c: Cliente) {
        this._clientes.push(c);
    }

    get clientes(): string {
        let lista = '';
        this._clientes.map((m) => { lista = lista+"Nome: "+m.nome+" | Mensalidade: R$"+m.getMensalidade()+",00 \n" });
        return lista;
    }
} 

let cad = new CadastroCliente();
cad.cadastrarCliente(new ClienteJuridico('Edu', 300));
cad.cadastrarCliente(new ClienteFisico('Eduardo', 20, 1100));
cad.cadastrarCliente(new ClienteFisico('John Doe', 70, 1100));
console.log(cad.clientes);