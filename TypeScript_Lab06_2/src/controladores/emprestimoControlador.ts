import { Request, Response, NextFunction } from 'express';
import { emprestarLivro, dataEmprestimo, devolverLivro } from '../negocio/negocio';
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
                res.status(200).end();
            } else {
                res.status(404).end();
            }
        } catch (erro) {
            next(erro);
        }
    }

    static async consultarLivro(req: Request, res: Response, next: NextFunction) {
        try {
            const query = req.query.idLivro;
            const consulta = await EmprestimoRepositorio.consultLivro(query);
            if (consulta) {
                res.json(consulta);
            } else {
                res.status(404).end();
            }
        } catch (erro) {
            next(erro);
        }
    }

    static async devolverLivro(req: Request, res: Response, next: NextFunction) {
        try {
            const livro = req.body.idLivro;
            const devolver = await devolverLivro(livro);
            if (!devolver) {
                res.status(404).send('Livro não está emprestado ou não existe').end();
            } else {
                res.send(devolver);
            }
        } catch (erro) {
            next(erro);
        }
    }

    static async emprestimo(req: Request, res: Response, next: NextFunction) {
        try {
            const idEmprestimo = req.params.idEmp;
            const query = await EmprestimoRepositorio.emprestimo(idEmprestimo);
            if (query) {
                res.json(query);
            } else {
                res.status(404).end();
            }
        } catch (erro) {
            next(erro);
        }
    }

}