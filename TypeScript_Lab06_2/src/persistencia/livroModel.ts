import { Livro } from "../entidades/livro";
import { Document, model, Schema, SchemaTypes, Model } from "mongoose";

interface LivroDocument extends Livro, Document {}

export const LivroModel: Model<LivroDocument> = model<LivroDocument>('Livro', new Schema({
    titulo: { type: String, required: true },
    autores: [{ type: SchemaTypes.ObjectId, ref: 'Autor' }]
}), 'livros');