import { Router } from 'express';
import { LivroControlador } from '../controladores/livroControlador';

export const router = Router();
export const path = '/api/livros';
router.get('', LivroControlador.livros);
router.get('/:id', LivroControlador.livro);
router.put('', LivroControlador.novoLivro);