import { Emprestimo } from "../entidades/emprestimo";
import { EmprestimoModel } from "./emprestimoModel";

export class EmprestimoRepositorio {
    static async criar(emprestimo:Emprestimo):Promise<Emprestimo> {
        return EmprestimoModel.create(emprestimo);
    }

    static async buscar():Promise<Emprestimo[]> {
        return EmprestimoModel.find().exec();
    }
}