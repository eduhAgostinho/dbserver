import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";
import { ObjectID } from "bson";

export class AutorRepositorio {
    static async criar(autor: Autor): Promise<Autor> {
        let novoAutor = await AutorModel.create(autor);
        return novoAutor.save();
    }

    static async buscar(): Promise<Autor[]> {
        let consulta = AutorModel.find();
        return consulta.exec();
    }

    static async buscarUltimoNome(ultimoNome: string): Promise<Autor[]> {
        return await AutorModel.find({ ultimo_nome: ultimoNome }).exec();
    }

    static async buscarPrimeiroNome(nome: string): Promise<Autor[]> {
        return await AutorModel.find({ primeiro_nome: nome }).exec();
    }

    static async novoNome(novoNome: string, obj: ObjectID): Promise<Autor> {
        return await AutorModel.updateOne({ _id: obj },{ primeiro_nome: novoNome }).exec();
    }
}
