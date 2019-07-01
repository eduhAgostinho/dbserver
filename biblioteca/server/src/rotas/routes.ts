import { Router } from 'express';
import { LivroControlador } from '../controladores/livroControlador';
import { AutorControlador } from '../controladores/autorControlador';
import { EmprestimoControlador } from '../controladores/emprestimoControlador';

export const router = Router();
export const path = '/api';

router.get('/livros', LivroControlador.livros);
router.get('/livros/search?', LivroControlador.buscarPorAutor);
router.get('/livros/:id', LivroControlador.livro);
router.put('/livros', LivroControlador.novoLivro);

router.put('/autores', AutorControlador.novoAutor);
router.get('/autores', AutorControlador.autores);
router.get('/autores/primeiroNome/:nome', AutorControlador.buscarPrimeiroNome);
router.get('/autores/ultimoNome/:nome', AutorControlador.buscarUltimoNome);
router.get('/autores/:id', AutorControlador.buscarPorId);

router.get('/emprestimos', EmprestimoControlador.emprestimos);
router.get('/emprestimos/search?', EmprestimoControlador.consultarLivro);
router.put('/emprestimos/:idLivro', EmprestimoControlador.emprestarLivro);
router.put('/emprestimos/novaData/:idEmprestimo', EmprestimoControlador.novaData);
router.delete('/emprestimos', EmprestimoControlador.devolverLivro);
router.get('/emprestimos/:idEmp', EmprestimoControlador.emprestimo);