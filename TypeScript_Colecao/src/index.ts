let mapa : Map <string, string>;
mapa = new Map();
mapa.set('RS', 'Rio Grande do Sul');
mapa.set('SC', 'Santa Catarina');

console.log(mapa.size);
console.log(mapa.get('RJ'));

for (let entrada of mapa) {
    console.log(entrada[0]);
    console.log(entrada[1]);
}

for (let sigla of mapa.keys()) {
    console.log(sigla);
}

for (let estados of mapa.values()) {
    console.log(estados);
}