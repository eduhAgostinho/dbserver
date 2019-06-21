import { Emprestimo } from "../entidades/emprestimo";
import { Document, Schema, model, SchemaTypes, Model } from "mongoose";

interface EmprestimoDocument extends Emprestimo, Document {}

export const EmprestimoModel: Model<EmprestimoDocument> = model<EmprestimoDocument>('Emprestimo', new Schema({
    livro: { type: SchemaTypes.ObjectId, ref: 'Livro', required: true },
    dataRetirada: { type: Date, default: Date.now },
    dataEntrega: { type: Date }
}), 'emprestimos');