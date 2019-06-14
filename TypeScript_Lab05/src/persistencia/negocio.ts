import { ObjectID } from "bson";
import { Livro } from "../entidades/livro";
import { LivroModel } from "./livroModel";

export class Negocio {
    static async consultarLivros() {
    }

    static async emprestarLivro(idLivro: ObjectID) {}

    static async devolverLivro(idLivro: ObjectID) {}
}