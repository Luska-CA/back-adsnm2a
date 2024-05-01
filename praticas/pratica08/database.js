const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://lucascalliari172:lLH5eXnlY3cmBrdm@cluster0.q6v6vob.mongodb.net/';

//var client = new MongoClient(url);

async function conectarDb(){
    console.log('conectar db');
    try{
    const client = await MongoClient.connect(url);
    console.log(client);
    return client.db('agenda');
    }catch(error){
        console.log(error);
    }
}

module.exports = conectarDb;