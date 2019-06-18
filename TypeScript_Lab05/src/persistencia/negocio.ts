import { ObjectID } from "bson";
import { Livro } from "../entidades/livro";
import { LivroModel } from "./livroModel";
import { LivroRepositorio } from "./livroRepositorio";
import { EmprestimoRepositorio } from "./emprestimoRepositorio";
import { LivroStatus } from '../entidades/LivroStatus';
import { Emprestimo } from "../entidades/emprestimo";

export async function consultarLivros(): Promise<LivroStatus[]> {
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

export async function emprestarLivro(idLivro: ObjectID): Promise<Emprestimo> {
    const data = new Date();
    const livro = await LivroRepositorio.livroID(idLivro);
    if (livro) {
        const consultEmp = await EmprestimoRepositorio.consultLivro(idLivro);
        if (consultEmp) {
            throw new Error('Livro já cadastrado!');
        }
            const novoEmp: Emprestimo = {
                livro: livro, 
                dataEntrega: new Date(data.getFullYear(), data.getMonth(), data.getDay()+7)
            }
            return await EmprestimoRepositorio.novoEmprestimo(novoEmp);
    } else {
        throw new Error('Livro não encontrado');
    }
}

export async function devolverLivro(idLivro: ObjectID): Promise<string> {
    const data = new Date(Date.now());
    const consulta = await EmprestimoRepositorio.consultLivro(idLivro);
    if (consulta) {
        if (data > consulta.dataEntrega) {
            const dias = data.getDay() - consulta.dataEntrega.getDay();
            // $0.50 por dia
            // await EmprestimoRepositorio.deleteEmprestimo(consulta._id);
            return `Livro devolvido com sucesso. Multa é de R$${dias*0.5}`;
        } else {
            return 'Livro devolvido com sucesso';
        }
    } else {
        throw new Error('Livro não está emprestado ou não existe');
    } 


}
