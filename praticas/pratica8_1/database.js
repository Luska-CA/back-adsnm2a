const { MongoClient } = require('mongodb');

let db = null;

const url = 'mongodb+srv://lucascalliari172:lLH5eXnlY3cmBrdm@cluster0.q6v6vob.mongodb.net/';

async function conectarDb(){
    if(db){
        return db;
    }

    const client = new MongoClient(url);
    await client.connect();
    db =  client.db('agenda');
    return db;
}

module.exports = conectarDb;