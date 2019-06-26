import { Emprestimo } from "../entidades/emprestimo";
import { EmprestimoModel } from "./emprestimoModel";
import { LivroModel } from "./livroModel";

export class EmprestimoRepositorio {
    static async criar(emprestimo:Emprestimo):Promise<Emprestimo> {
        return EmprestimoModel.create(emprestimo);
    }

    static async buscar():Promise<Emprestimo[]> {
        return EmprestimoModel.find().populate('livro', LivroModel).exec();
    }

    static async novaDataRetirada(obj: string, data: Date): Promise<Emprestimo> {
        return EmprestimoModel.updateOne({ _id: obj}, {$set: { dataRetirada: data }}).exec();
    }

    static async consultLivro(id: string): Promise<Emprestimo|null> {
        return EmprestimoModel.findOne({ livro: id }).exec();
    }

    static async deleteEmprestimo(cod: string) {
        return EmprestimoModel.deleteOne({ codigo: cod }).exec();
    }

    static async emprestimo(id: string): Promise<Emprestimo|null> {
        return EmprestimoModel.findById(id).exec();
    }
}