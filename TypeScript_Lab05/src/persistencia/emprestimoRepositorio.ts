import { AutorRepositorio } from './autorRepositorio';
import { Emprestimo } from '../entidades/emprestimo';
import { EmprestimoModel } from './emprestimoModel';
import { ObjectID } from 'bson';

export class EmprestimoRepositorio {
    static async novoEmprestimo(emp: Emprestimo): Promise<Emprestimo> {
        const novo = new EmprestimoModel(emp);
        return await novo.save();
    }

    static async buscarEmprestimos(): Promise<Emprestimo[]> {
        return await EmprestimoModel.find().exec();
    }

    static async novaDataRetirada(obj: ObjectID, data: Date): Promise<Emprestimo> {
        return await EmprestimoModel.updateOne({ _id: obj}, {$set: { dataRetirada: data }}).exec();
    }
}