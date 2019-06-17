import { ObjectID } from "bson";
import { Livro } from "../entidades/livro";
import { LivroModel } from "./livroModel";
import { LivroRepositorio } from "./livroRepositorio";
import { EmprestimoRepositorio } from "./emprestimoRepositorio";
import { LivroStatus } from '../entidades/LivroStatus';

export class Negocio {
    static async consultarLivros(): Promise<LivroStatus[]> {
        let livroStatus:LivroStatus[] = [];
        const titulos: string[] = [];
        const emprestimos = await EmprestimoRepositorio.buscarEmprestimos();
        emprestimos.forEach(e => { livroStatus.push( { 
            titulo: e.livro.titulo, 
            autores: e.livro.autores, 
            dataEntrega: e.dataEntrega, 
            disponivel: false 
        })});
        emprestimos.forEach(e => { titulos.push(e.livro.titulo) });
        const livrosDisp = await LivroRepositorio.naoLivro(titulos);
        livrosDisp.forEach(l => { livroStatus.push( { titulo: l.titulo, autores: l.autores , disponivel: true } ) });
        return livroStatus;
    }

    static async emprestarLivro(idLivro: ObjectID): Promise<string> {
        const consulta = await EmprestimoRepositorio.consultLivro(idLivro);
        const data = new Date();
        if (consulta.length > 0) {
            return 'Livro já emprestado!';
        } else {
            const livro = await LivroRepositorio.livroID(idLivro);
            if (livro.length > 0) {
                await EmprestimoRepositorio.novoEmprestimo({ 
                    livro: livro[0], 
                    dataEntrega: new Date(data.getFullYear(), data.getMonth(), data.getDay()+7)
                });
                return 'Livro emprestado!';
            }
            return 'Livro não cadastrado!';
        }
    }
    
    static async devolverLivro(idLivro: ObjectID): Promise<string> {
        const data = new Date();
        const consulta = await EmprestimoRepositorio.consultLivro(idLivro);
        

        return 'a';
    }
}