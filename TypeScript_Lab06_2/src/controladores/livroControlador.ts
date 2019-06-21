import { Response, Request, NextFunction } from 'express';
import { todosLivros, consultarLivroPorId, novoLivro } from '../negocio/negocio';
import { Livro } from '../entidades/livro';

export class LivroControlador { 
    static async livros(req: Request, res: Response, next: NextFunction) {
        try {
            const query = await todosLivros();
            res.json(query);
        } catch (error) {
            next(error);
        }
    }
    
    static async livro(req: Request, res: Response, next: NextFunction) {
        try {
            const query = await consultarLivroPorId(req.params.id);
            if (query === null) {
                res.status(404).end();
            } else {
                const {titulo,autores} = query;
                res.json({titulo,autores});
            }
        } catch (error) {
            next(error);
        }
    }

    static async novoLivro(req: Request, res: Response, next: NextFunction) {
        try {
            const livro = req.body as Livro;
            await novoLivro(livro);
            res.status(201).end();
        } catch (error) {
            next(error);
        }
    }

    static async buscarporAutor(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (error) {
            next(error);
        }
    }




}