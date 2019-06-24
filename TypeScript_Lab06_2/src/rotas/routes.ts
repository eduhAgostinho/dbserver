import { Router } from 'express';
import { LivroControlador } from '../controladores/livroControlador';

export const router = Router();
export const path = '/api';
router.get('', LivroControlador.livros);
router.get('/livros/:id', LivroControlador.livro);
router.put('/livros', LivroControlador.novoLivro);
router.get('/livros/autor/search?', LivroControlador.buscarPorAutor);
