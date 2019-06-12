import { Cofrinho, Moeda, PersistenciaErro } from "./entidades";
import { lerCofrinho, salvarCofrinho } from './persistencia';


async function main() {
    const cofre = new Cofrinho();
    cofre.adicionar(new Moeda(1, "1 centavo"));
    cofre.adicionar(new Moeda(50, "50 centavos"));
    cofre.adicionar(new Moeda(25, "25 centavos"));
    cofre.adicionar(new Moeda(5, "5 centavos"));
    try {
        await salvarCofrinho(cofre, 'meuCofrinho.json');
        const cofrinho = await lerCofrinho('mesuCofrinho.json');
        console.log(cofrinho.calcularTotal());
    } catch (erro) {
        throw new PersistenciaErro('Erro no nome do arquivo!');
    }
}

main();