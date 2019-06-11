import { Cofrinho, Moeda } from "./entidades";
import { lerCofrinho } from './persistencia';


async function main() {
    const cofre = new Cofrinho();
    cofre.adicionar(new Moeda(1, "1 centavo"));
    cofre.adicionar(new Moeda(50, "50 centavos"));
    cofre.adicionar(new Moeda(25, "25 centavos"));
    cofre.adicionar(new Moeda(5, "5 centavos"));
    try {
        const cofrinho = await lerCofrinho('meuCofrinho.json');
        console.log(cofrinho);
    } catch (erro) {
        console.log('Erro no nome do arquivo');
        console.log(erro);
    }
}

main();