import { Livro } from './livro';

export interface LivroStatus extends Livro {
    disponivel: boolean,
    dataEntrega: Date
}

