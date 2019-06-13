import { Livro } from "../entidades/livro";
import { Document, model, Schema, SchemaTypes, Model } from "mongoose";

const livroSchema = new Schema({
    titulo: { 
        type: String, 
        required: true 
    },
    autores: [{ 
        type: SchemaTypes.ObjectId, 
        ref: 'Autor' 
    }]
});

interface LivroDocument extends Livro, Document {}
export const LivroModel: Model<LivroDocument> = model<LivroDocument>('Livro', livroSchema, 'livros');