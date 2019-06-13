import {connect} from 'mongoose';
import { AutorRepositorio } from './persistencia/autorRepositorio';
import { ObjectID } from 'bson';
import { LivroRepositorio } from './persistencia/livroRepositorio';

async function main() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cliente = await connect(url, { useNewUrlParser: true });
        console.log('Conectado com sucesso');

        // console.log('Adicionando autores...');
        // let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        // console.log(`Autor inserido: ${a1}`);
        // let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        // console.log(`Autor inserido: ${a2}`);
        
        // console.log('Buscando autores...');
        // let autores = await AutorRepositorio.buscar();
        // autores.forEach(autor => console.log(autor));


        /* 
        Atividade 3
        console.log('Buscando autores por último nome...');
        let autor = await AutorRepositorio.buscarUltimoNome('Doe');
        autor.forEach(a => console.log(a)); 

        console.log('Buscando autores por primeiro nome...');
        let autores2 = await AutorRepositorio.buscarPrimeiroNome('Mary');
        autores2.forEach(a => console.log(a));

        console.log('Trocando para um novo nome...');
        await AutorRepositorio.novoNome('Eduardo', new ObjectID("5d026d77725f81180ca549ea"));
        */

        // let autor = await AutorRepositorio.buscarPrimeiroNome('Mary')
        // await LivroRepositorio.novoLivro({ titulo: 'Espelho Mágico', autores: autor});

        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

main();