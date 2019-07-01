import { Autor } from "../entidades/autor";
import { Response, Request, NextFunction } from 'express';
import { AutorRepositorio } from "../persistencia/autorRepositorio";


export class AutorControlador {
    static async novoAutor(req: Request, res: Response, next: NextFunction) {
        try {
            const autor = req.body as Autor;
            await AutorRepositorio.criar(autor);
            res.status(201).end();
        } catch (erro) {
            next(erro);
        }
    }

    static async autores(req: Request, res: Response, next: NextFunction) {
        try {
            const query = await AutorRepositorio.buscar();
            res.json(query);
        } catch (erro) {
            next(erro);
        }
    }

    static async buscarPrimeiroNome(req: Request, res: Response, next: NextFunction) {
        try {
            const nome = req.params.nome;
            const query = await AutorRepositorio.buscarPorPrimeiroNome(nome);
            res.json(query);
        } catch (erro) {
            next(erro);
        }
    }

    static async buscarUltimoNome(req: Request, res: Response, next: NextFunction) {
        try {
            const sobrenome = req.params.nome;
            const query = await AutorRepositorio.buscarPorUltimoNome(sobrenome);
            res.json(query);
        } catch (erro) {
            next(erro);
        }
    }

    static async buscarPorId(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const query = await AutorRepositorio.buscarPorID(id);
            if (!query) {
                res.status(404).end();
            } else {
                res.json(query);
            }
        } catch (erro) {
            next(erro);
        }
    }
}