import { ObjectID } from "bson";
import { LivroRepositorio } from "./livroRepositorio";
import { EmprestimoRepositorio } from "./emprestimoRepositorio";
import { LivroStatus } from '../entidades/LivroStatus';
import { Emprestimo } from "../entidades/emprestimo";

export async function consultarLivros(): Promise<LivroStatus[]> {
    let livroStatus:LivroStatus[] = [];
    const codigos: string[] = [];
    const emprestimos = await EmprestimoRepositorio.buscarEmprestimos();
    emprestimos.forEach(e => { livroStatus.push( { 
        titulo: e.livro.titulo, 
        autores: e.livro.autores, 
        dataEntrega: e.dataEntrega, 
        disponivel: false,
        codigo: e.livro.codigo
    })});
    emprestimos.forEach(e => { codigos.push(e.livro.codigo) });
    const livrosDisp = await LivroRepositorio.naoLivro(codigos);
    livrosDisp.forEach(l => { livroStatus.push( { titulo: l.titulo, autores: l.autores , disponivel: true, codigo: l.codigo } ) });
    return livroStatus;
}

export async function emprestarLivro(idLivro: ObjectID): Promise<Emprestimo> {
    const data = new Date();
    const livro = await LivroRepositorio.livroID(idLivro);
    if (livro) {
        const consultEmp = await EmprestimoRepositorio.consultLivro(idLivro);
        if (consultEmp) {
            throw new Error('Livro já emprestado!');
        }
        const novoEmp: Emprestimo = {
            livro: livro, 
            dataEntrega: new Date(data.getFullYear(), data.getMonth(), data.getDate()+7),
            codigo: 'COD'+Math.floor(Math.random() * (+10000000 - +1)) + +1
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
            await EmprestimoRepositorio.deleteEmprestimo(consulta.codigo);
            return `Livro devolvido com sucesso. Multa é de R$${dias*0.5}`;
        } else {
            await EmprestimoRepositorio.deleteEmprestimo(consulta.codigo);
            return 'Livro devolvido com sucesso';
        }
    } else {
        throw new Error('Livro não está emprestado ou não existe');
    } 


}
