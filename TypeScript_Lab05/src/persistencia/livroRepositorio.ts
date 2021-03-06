import { Livro } from '../entidades/livro';
import { LivroModel } from './livroModel';
import { ObjectID } from 'bson';
import { AutorModel } from './autorModel';

export class LivroRepositorio{
    static async novoLivro(livro: Livro): Promise<Livro> {
        let livroNovo =  await LivroModel.create(livro);
        return livroNovo.save();
    }

    static async livros(): Promise<Livro[]> {
        return LivroModel.find().populate('autores', AutorModel).exec(); 
    }

    static async livroAutor(idAutor: ObjectID): Promise<Livro[]> {
        return LivroModel.find({ autores: idAutor }).exec();
    }

    static async naoLivro(cod: string[]): Promise<Livro[]> {
        return LivroModel.find().where({codigo :{ $nin: cod }});
    }

    static async livroID(id: ObjectID): Promise<Livro | null> {
        return LivroModel.findById(id).exec();
    }

}