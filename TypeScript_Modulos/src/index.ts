import { area }  from './circulo_funcoes';
import { Circulo } from './circulo_objeto';

console.log(area(5));

let circ = new Circulo(4);
console.log(circ.area());