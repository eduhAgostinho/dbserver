import { AutorRepositorio } from './autorRepositorio';
import { Emprestimo } from '../entidades/emprestimo';
import { EmprestimoModel } from './emprestimoModel';
import { ObjectID } from 'bson';
import { LivroModel } from './livroModel';
import { AutorModel } from './autorModel';

export class EmprestimoRepositorio {
    static async novoEmprestimo(emp: Emprestimo): Promise<Emprestimo> {
        return EmprestimoModel.create(emp);
    }

    static async buscarEmprestimos(): Promise<Emprestimo[]> {
        return EmprestimoModel.find().populate('livro', LivroModel).exec();
    }

    static async novaDataRetirada(obj: ObjectID, data: Date): Promise<Emprestimo> {
        return EmprestimoModel.updateOne({ _id: obj}, {$set: { dataRetirada: data }}).exec();
    }
}