const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb+srv://lucascalliari172:lLH5eXnlY3cmBrdm@cluster0.q6v6vob.mongodb.net/';

async function conectar(){
    try{
        const mongoClient = await MongoClient.connect(url);
        return  mongoClient.db("Loja");
    } catch(error) {
        console.log("Deu ruim meno", error);
    }
}

async function inserir(produto){
    const db = await conectar();
    return db.collection('produtos').insertOne(produto);
}

async function listar() {
    const db = await conectar();
    return db.collection('produtos').find({}).toArray();
}

async function atualizar(id, produtoAtualizado){
    const db = await conectar();
    return db.collection('produtos').updateOne({_id: new ObjectId(id)}, {$set: produtoAtualizado});
}

async function remover(id){
    const db = await conectar();
    return db.collection('produtos').deleteOne({_id: new ObjectId(id)});
}

async function testar(){
    const result = await inserir({nome: 'banana', preco: 20.0});
    console.log('Produto inserido ', result);

    const produtos = await listar();
    console.log("listagem de produtos", produtos);

    const atual = await atualizar("66284cc0d6f61dd38f6e4521", {nome: "banana nanica", preco: 18.0});
    console.log("Produto atualizado", atual);

    const removido = await remover("66284cc0d6f61dd38f6e4521");
    console.log("Produto removido", removido);
}

testar();