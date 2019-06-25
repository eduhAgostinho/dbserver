import { Request, Response, NextFunction } from 'express';
import { emprestarLivro } from '../negocio/negocio';
import { EmprestimoRepositorio } from '../persistencia/emprestimoRepositorio';

export class EmprestimoControlador{
    static async emprestarLivro(req: Request, res: Response, next: NextFunction) {
        try {
            const livro = req.params.idLivro;
            const emp = await emprestarLivro(livro);
            if (emp) {
                res.status(201).end();
            } else {
                res.send('Livro indisponível').end();
            }
        } catch (erro) {
            next(erro);
        }
    }

    static async emprestimos(req: Request, res: Response, next: NextFunction) {
        try {
            const emprestimos = await EmprestimoRepositorio.buscar();
            res.json(emprestimos);
        } catch (erro) {
            next(erro);
        }
    }


}