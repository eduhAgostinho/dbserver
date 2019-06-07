export class Circulo {
    constructor(private _raio: number){}

    area(): number {
        return Math.PI * this._raio ** 2;
    }
}