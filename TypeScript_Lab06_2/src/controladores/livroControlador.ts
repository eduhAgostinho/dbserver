import { Response, Request, NextFunction } from 'express';
import { Livro } from '../entidades/livro';
import { LivroRepositorio } from '../persistencia/livroRepositorio';
import { buscarLivroPorAutor } from '../negocio/negocio';
import { consultarLivros } from '../negocio/negocio';

export class LivroControlador { 
    static async livros(req: Request, res: Response, next: NextFunction) {
        try {
            const query = await consultarLivros();
            res.json(query);
        } catch (error) {
            next(error);
        }
    }
    
    static async livro(req: Request, res: Response, next: NextFunction) {
        try {
            const query = await LivroRepositorio.buscarPorId(req.params.id);
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
            await LivroRepositorio.criar(livro);
            res.status(201).end();
        } catch (error) {
            next(error);
        }
    }

    static async buscarPorAutor(req: Request, res: Response, next: NextFunction) {
        try {
            const autor = req.query.idAutor;
            const query = await buscarLivroPorAutor(autor);
            if (!query) { 
                res.status(404).send('Autor não existe').end();
            } else {
                res.json(query);
            }
        } catch (error) {
            next(error);
        }
    }

}