const conectarDb = require('./database.js');

class Contato{
    constructor(){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.id = null;
    }
}

async function inserir(contato){
    const db = await conectarDb();
    const collection = db.collection('contatos');
    var result = await collection.insertOne({ nome: contato.nome, email: contato.email, telefone: contato.telefone });
    contato.id = result.insertedId;
}

async function alterar(contato){
    const db = await conectarDb();
    const collection = await db.collection('contatos');
    collection.upadeOne({_id: contato.id}, {$set: {nome: contato.nome, email: contato.email, telefone: contato.telefone}});
}

async function deletar(contato){
    const db = await conectarDb();
    const collection = db.collection('contatos');
    collection.deleteOne({nome: contato.nome});
}

async function buscar(contato){
    const db = await conectarDb();
    const collection = db.collection('contatos');
    var result = collection.findOne({nome: contato.nome});
    contato.nome = result.nome;
    contato.email = result.email;
    contato.telefone = result.telefone;
    return {...contato};
}

module.exports = {Contato, inserir, alterar, deletar, buscar};