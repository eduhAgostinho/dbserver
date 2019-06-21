import { Autor } from "../entidades/autor";
import { Document, model, Schema, Model } from 'mongoose';

interface AutorDocument extends Autor, Document {}

const AutorSchema = new Schema({
    primeiro_nome: { type: String, required: true, max: 100 },
    ultimo_nome: { type: String, required: true, max: 100 }
});

export const AutorModel: Model<AutorDocument> 
= model<AutorDocument>('Autor', AutorSchema, 'autores');