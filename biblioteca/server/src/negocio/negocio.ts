import { Emprestimo } from "../entidades/emprestimo";
import { LivroRepositorio } from "../persistencia/livroRepositorio";
import { EmprestimoRepositorio,  } from "../persistencia/emprestimoRepositorio";
import { Livro } from "../entidades/livro";
import { AutorRepositorio } from "../persistencia/autorRepositorio";
import { LivroStatus } from '../entidades/livroStatus';

export async function buscarLivroPorAutor(autorID: string): Promise<Livro[]|false> {
    const autor = await AutorRepositorio.buscarPorID(autorID);
    if (autor == null) {
        return false;
    }
    return await LivroRepositorio.buscarPorAutor(autorID);
}

export async function emprestarLivro(idLivro:string):Promise<Emprestimo|false>{
    const umLivro = await LivroRepositorio.buscarPorId(idLivro);
    if (umLivro) {
        const consultEmp = await EmprestimoRepositorio.consultLivro(idLivro);
        if (consultEmp) {
            return false;
        }
        let emprestimo: Emprestimo = {
            livro : umLivro,
            dataRetirada : new Date(Date.now()),
            dataEntrega : new Date(Date.now()+7*24*60*60*1000),
            codigo: 'COD'+Math.floor(Math.random() * (+10000000 - +1)) + +1
        };
        return await EmprestimoRepositorio.criar(emprestimo);
    } else {
        return false;
    }
}

export async function consultarLivros(): Promise<LivroStatus[]> {
    let livroStatus:LivroStatus[] = [];
    const codigos: string[] = [];
    const emprestimos = await EmprestimoRepositorio.buscar();
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

export async function dataEmprestimo(idEmp: string): Promise<Emprestimo|null> {
    return await EmprestimoRepositorio.emprestimo(idEmp);   
}

export async function devolverLivro(idLivro: string): Promise<string|false> {
    const data = new Date();
    const consulta = await EmprestimoRepositorio.consultLivro(idLivro);
    if (consulta) {
        if (data > consulta.dataEntrega) {
            const dias = data.getDate() - consulta.dataEntrega.getDate();
            // $0.50 por dia
            await EmprestimoRepositorio.deleteEmprestimo(consulta.codigo);
            return `Livro devolvido com sucesso. Multa é de R$${dias*0.5}`;
        } else {
            await EmprestimoRepositorio.deleteEmprestimo(consulta.codigo);
            return 'Livro devolvido com sucesso!';
        }
    } else {
        return false;
    } 
}


