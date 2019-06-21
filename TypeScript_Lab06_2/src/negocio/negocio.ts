import { Emprestimo } from "../entidades/emprestimo";
import { LivroRepositorio } from "../persistencia/livroRepositorio";
import { EmprestimoRepositorio } from "../persistencia/emprestimoRepositorio";
import { Livro } from "../entidades/livro";

export async function emprestarLivro(idLivro:string):Promise<Emprestimo>{
    const umLivro = await LivroRepositorio.buscarPorId(idLivro);
    if (umLivro !== null) {
        let emprestimo: Emprestimo = {
            livro : umLivro,
            dataRetirada : new Date(Date.now()),
            dataEntrega : new Date(Date.now()+7*24*60*60*1000)
        };
        return await EmprestimoRepositorio.criar(emprestimo);
    }
    else {
        throw new Error('Livro não encontrado');
    }
}

export async function todosLivros():Promise<Livro[]>{
    return await LivroRepositorio.buscar();
}

export async function consultarLivroPorId(id: string): Promise<Livro|null> {
    return await LivroRepositorio.buscarPorId(id);
}

export async function novoLivro(l: Livro):Promise<Livro> {
    return await LivroRepositorio.criar(l);
}
