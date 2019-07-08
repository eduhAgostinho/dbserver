import {Request, Response} from 'express';

export function getAlo(req:Request, res:Response) {
    res.send('Alô, Mundo!');
}

export function getAloComNome(req:Request, res:Response) {
    res.send(`Alô, ${req.params.nome}`);
}

export function getAloErro(req:Request, res:Response) {
    throw new Error('Requisição com erro');
}