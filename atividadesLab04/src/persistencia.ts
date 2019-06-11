import { Cofrinho, Moeda } from './entidades';
import { promises } from 'fs';

//export async function salvarCofrinho(cofre: Cofrinho, nomeArquivo: string) {
    // try {
    //     let conteudo = JSON.stringify(cofre);
    //     await promises.writeFileSync(nomeArquivo, conteudo); 
    // } catch (erro) {

    // }
//}

export async function lerCofrinho(nomeArquivo: string): Promise<Cofrinho> {
    const dados = await promises.readFile(nomeArquivo, 'utf-8');
    try {
        const obj = JSON.parse(dados);
        const cofre = new Cofrinho();
        for (let i=0; i<obj.moedas.lenght; i++) {
            cofre.adicionar(new Moeda(obj.moedas[i]._valor, obj.moedas[i]._nome));
        } 
        return cofre;
    } catch (erro) {
        throw erro;
    }
}


