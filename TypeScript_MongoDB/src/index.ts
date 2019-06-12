import { MongoClient, Db, Cursor } from 'mongodb';

async function main() {
    const url = 'mongodb://localhost:27017/teste';
    try {
        const client: MongoClient = await MongoClient.connect(url, { useNewUrlParser: true });
        console.log('Conectado com sucesso');
        const banco: Db = client.db('teste');

        //Inserir documento
        // const p1 = { nome: 'John Doe', idade: 22 };
        // const resultIns = await banco.collection('pessoas').insertOne(p1);
        // console.log(`Inserido> ${resultIns.insertedId}`);

        //Consultar documentos
        // const cursor: Cursor = banco.collection('pessoas').find({ idade: { $gt: 21 } });
        // await cursor.forEach(doc => console.log(doc.nome));
       
        
        //Alterar documento
        // const result = await banco.collection('pessoas').updateOne({ nome: "Sr. Doe" }, { $set: { idade: 35 } }); 
        // console.log(`Alteração: ${result.modifiedCount}`);
        
        //Deletar documento
        const resultDel = await banco.collection('pessoas').deleteOne({ nome: "Sr. Doe" });
        console.log(`Remoção: ${resultDel.deletedCount}`);
        
        await client.close();
    } catch (erro) {
        console.log('Erro na conexão com o bando de dados');
        console.log(erro);
    }
}

main();