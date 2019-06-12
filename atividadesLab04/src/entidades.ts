export class Moeda {
    constructor(private _valor: number, private _nome: string) {}

    get valor(): number {
        return this._valor;
    }

    get nome(): string {
        return this._nome;
    }
}

export class Cofrinho {
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

export class PersistenciaErro extends Error {
    constructor (message: string) {
        super(message);
        this.name = 'Erro no nome do arquivo';
    }
}
