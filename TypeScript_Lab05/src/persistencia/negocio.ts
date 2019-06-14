import { ObjectID } from "bson";
import { Livro } from "../entidades/livro";
import { LivroModel } from "./livroModel";
import { LivroRepositorio } from "./livroRepositorio";
import { EmprestimoRepositorio } from "./emprestimoRepositorio";

export class Negocio {
    static async consultarLivros(): Promise<any[]> {
        const livros = await LivroRepositorio.livros();
        const emprestimos = await EmprestimoRepositorio.buscarEmprestimos();

        return emprestimos;

    }

    static async emprestarLivro(idLivro: ObjectID) {}

    static async devolverLivro(idLivro: ObjectID) {}
}