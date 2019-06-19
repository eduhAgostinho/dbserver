import {connect} from 'mongoose';
import { AutorRepositorio } from './persistencia/autorRepositorio';
import { ObjectID } from 'bson';
import { LivroRepositorio } from './persistencia/livroRepositorio';
import { EmprestimoRepositorio } from './persistencia/emprestimoRepositorio';
import { consultarLivros, devolverLivro, emprestarLivro } from './persistencia/negocio';

async function main() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cliente = await connect(url, { useNewUrlParser: true, useCreateIndex: true });
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

        /* 
        // Atividade 4 
        let autor = await AutorRepositorio.buscarPrimeiroNome('Mary')
        const result = await LivroRepositorio.novoLivro({ titulo: 'Espelho Mágico2', autores: autor});
        console.log(result);
        
        let livros = await LivroRepositorio.livros();
        livros.forEach(l => console.log(l));
        
        let livros2 = await LivroRepositorio.livroAutor(new ObjectID("5d028487d79913227834cf17"));
        livros2.forEach(l => console.log(l));
               
        let livrobusc = await LivroRepositorio.livros();
        let emprestimo = await EmprestimoRepositorio.novoEmprestimo({ livro: livrobusc[0], dataEntrega: new Date(2019,6,14), dataRetirada: new Date(Date.now())});
        console.log(emprestimo);
         
        let buscaEmprestimos = await EmprestimoRepositorio.buscarEmprestimos();
        console.log(buscaEmprestimos);
        
        let novaData = await EmprestimoRepositorio.novaDataRetirada(new ObjectID("5d03b71209bed518d04be8a0"), new Date(2019,11,25));
        console.log(novaData);
        */
        /* 
        // Atividade 5
        const consulta = await o.consultarLivros();
        console.log(consulta);

        const emprestar = await emprestarLivro(new ObjectID('5d0a4adefdd6dd29b4383760'));
        console.log(emprestar);

        const devolver = await devolverLivro(new ObjectID('5d0a4adefdd6dd29b4383760'));
        console.log(devolver); 
        */ 
               

        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

main();