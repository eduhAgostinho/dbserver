import * as fs from 'fs';

/*
try {
    fs.writeFileSync('dados.txt', 'teste');
} catch (error) {
    console.log(`Erro: ${error.name} - ${error.message}`);
}*/

/*
try {
    fs.writeFile('dados.txt', 'mais um', (err) => {
        if (err !== null) {
            throw err;
        }
        console.log('arquivo escrito com sucesso!');
    });
    console.log('continuei a execução');
} catch (error) {
    console.log(`Erro: ${error.name} - ${error.message}`);
}*/

/*
try {
    fs.readFile('pessoa.json', 'utf-8',(error, dados) => {
        if (error !== null) {
            console.log('Erro na leitura de arquivo');
        } else {
            try {
                const obj = JSON.parse(dados);
                console.log(obj);
            } catch (erro) {
                console.log('Arquivo JSON inválido');
            }
        }
    });
} catch (error) {
    console.log(`Erro: ${error.name} - ${error.message}`);
}*/

function lerAquiviAsync(nomeArq: string): Promise<string> {
    return new Promise((resolve, reject)=>{
        try {
            let dados = fs.readFileSync(nomeArq, 'utf-8');
            resolve(dados);
        } catch(erro) {
            reject(erro);
        }        
    });
}
/*
lerAquiviAsync('dados.txt').then(
    dados => console.log(dados),
    erro => console.log(erro)
);
*/
/*
lerAquiviAsync('daados.txt')
.then(
    dados => console.log(dados))
.catch(erro => console.log(erro.message)); 
*/

(async () => {
    try {
      let dados = await lerAquiviAsync('dados.txt');
        console.log(dados);
        console.log('teste');
    } catch (erro) {
        console.log(erro.message);
    }
})();

