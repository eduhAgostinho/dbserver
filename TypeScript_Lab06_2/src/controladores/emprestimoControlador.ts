import { Request, Response, NextFunction } from 'express';
import { emprestarLivro, dataEmprestimo } from '../negocio/negocio';
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

    static async novaData(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.idEmprestimo;
            const data = req.body;
            const consult = await dataEmprestimo(id);
            if (consult) {
                await EmprestimoRepositorio.novaDataRetirada(id, data.novaData);
                res.status(200);
            } else {
                res.status(404);
            }
        } catch (erro) {
            next(erro);
        }
    }


}