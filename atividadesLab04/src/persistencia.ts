import { Cofrinho, Moeda } from './entidades';
import { promises } from 'fs';

export async function salvarCofrinho(cofre: Cofrinho, nomeArquivo: string) {
    try {
        const data = JSON.stringify(cofre);
        await promises.writeFile(nomeArquivo, data); 
    } catch (erro) {
        throw erro;
    }
}

export async function lerCofrinho(nomeArquivo: string): Promise<Cofrinho> {
    const dados = await promises.readFile(nomeArquivo, 'utf-8');
    try {
        const obj = JSON.parse(dados);
        const cofre = new Cofrinho();
        for (let i=0; i<obj.moedas.length; i++) {
            cofre.adicionar(new Moeda(obj.moedas[i]._valor, obj.moedas[i]._nome));
        } 
        return cofre;
    } catch (erro) {
        throw erro;
    }
}


