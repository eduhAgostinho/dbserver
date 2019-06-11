import { Cofrinho, Moeda } from './entidades';
import * as fs from 'fs';

export async function salvarCofrinho(cofre: Cofrinho, nomeArquivo: string) {
    try {
        let conteudo = JSON.stringify(cofre);
        await fs.writeFile(nomeArquivo, conteudo, ()=>{}); 
    } catch (erro) {

    }
}

export async function lerCofrinho(nomeArquivo: string) {

}