import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";

export class AutorRepositorio {
    static async criar(autor: Autor): Promise<Autor> {
        let novoAutor = await AutorModel.create(autor);
        return novoAutor;
    }

    static async buscar(): Promise<Autor[]> {
        let consulta = AutorModel.find();
        return consulta.exec();
    }

    static async buscarPorPrimeiroNome(nome:string): Promise<Autor[]> {
        let consulta = AutorModel.find().where('primeiro_nome').equals(nome);
        return consulta.exec();
    }

    static async buscarPorUltimoNome(nome:string): Promise<Autor[]> {
        let consulta = AutorModel.find().where('ultimo_nome').equals(nome);
        return consulta.exec();
    }

    
}
