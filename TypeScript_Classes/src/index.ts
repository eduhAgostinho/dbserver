class Pessoa {
    nome: string;
    idade: number;

    constructor(n: string, i: number){
        this.nome = n;
        this.idade = i;
    }
}

let p1: Pessoa;
p1 = new Pessoa('John Doe', 22);
console.log(p1);
p1.idade = 30;
console.log(p1);

class PessoaV2 {
    readonly nome: string;
    readonly idade: number;

    constructor(n: string, i: number) {
        this.nome = n;
        this.idade = i;
    }
}

class PessoaV3 {
    constructor(private nome: string, private _idade: number){}

    getNome() {
        return this.nome;
    }

    get idade():number {
        return this._idade;
    }

    set idade(n:number) {
        this._idade = n;
    }
}
let p3 = new PessoaV3('John Doe', 22);
console.log(p3);
console.log(p3.getNome());
p3.idade = 30;
console.log(p3.idade);

//TypeScript tem "tipos estruturais"
let umaPessoa: Pessoa = new Pessoa('John Doe', 22);
let outraPessoa: PessoaV2 = umaPessoa;
console.log(outraPessoa);

function imprime(p: {nome: string, idade:number}) {
    console.log(p.nome + ' ' + p.idade);
}

imprime(umaPessoa);
imprime(outraPessoa);

class Produto {
    constructor(private _nome: string, private _preco:number) {}

    get nome(): string {
        return this._nome;
    }

    set nome(n: string) {
        this._nome = n;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(p: number) {
        this.preco = p;
    }

    toString():string {
        return `[nome=${this.nome}, preco=${this.preco}]`;
    }
}

class ProdutoPerecivel extends Produto {
    constructor(nome:string, preco:number, private _dataValidade: Date) {
        super(nome, preco);
    }
    
    get dataValidade(): string {
        return this._dataValidade.toLocaleDateString();
    }

    toString(): string {
        return super.toString()+`[dataValidade=${this._dataValidade}]`;
    }
}

let prod1 = new Produto('prod1',  1.99);
console.log(prod1);
let prod2 = new ProdutoPerecivel('prod2', 100, new Date(2019,11,31));
console.log(prod2);
console.log(prod2.toString());

// prod1 = prod2; Certo
// prod2 = prod1; Errado


