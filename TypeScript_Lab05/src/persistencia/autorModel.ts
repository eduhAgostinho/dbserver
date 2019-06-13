import { Autor } from "../entidades/autor";
import { Document, model, Schema, Model } from 'mongoose';

const autorSchema = new Schema({
    primeiro_nome: { 
        type: String, 
        required: true,
        max: 100
    },
    ultimo_nome: {
        type: String, 
        required: true, 
        max: 100
    }
});
interface AutorDocument extends Autor, Document {}
export const AutorModel: Model<AutorDocument> = model<AutorDocument>('Autor', autorSchema, 'autores');