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
}