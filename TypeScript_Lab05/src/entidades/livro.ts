import {Autor} from './autor';
import { ObjectID } from 'bson';
import { Schema } from 'mongoose';

export interface Livro {
    titulo: string,
    autores: Autor[],
    codigo: string
}