import { Livro } from '../entidades/livro';
import { LivroModel } from './livroModel';
import { Autor } from '../entidades/autor';
import { ObjectID } from 'bson';

export class LivroRepositorio{
    static async novoLivro(livro: Livro): Promise<Livro> {
        let livroNovo =  await LivroModel.create(livro);
        return livroNovo.save();
    }

    static async livros(): Promise<Livro> {
        return await LivroModel.find().lean().exec(); 
    }

    static async livro(idAutor: ObjectID): Promise<Livro> {
        return await LivroModel.find({ autores: idAutor }).lean().exec();
    }
}