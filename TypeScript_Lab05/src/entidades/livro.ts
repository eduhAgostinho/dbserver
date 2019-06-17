import {Autor} from './autor';
import { ObjectID } from 'bson';

export interface Livro {
    titulo: string,
    autores: Autor[],
    // id ?: ObjectID
}