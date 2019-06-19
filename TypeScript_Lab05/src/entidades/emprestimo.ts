import { Livro } from "./livro";
import { Types } from "mongoose";

export interface Emprestimo {
    livro: Livro,
    dataRetirada ?: Date,
    dataEntrega: Date,
    identificador ?: string,
    codigo: string
}
