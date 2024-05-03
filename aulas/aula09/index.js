require('dotenv').config();

const mongoose = require('mongoose');

const url = process.env.MONGODB_URL;

async function main(){
    try {
        await mongoose.connect(url);
        console.log("Funcionou");
    }catch(err){
        console.log("Deu ruim", err.message);
    }

    await mongoose.disconnect();
}

main();