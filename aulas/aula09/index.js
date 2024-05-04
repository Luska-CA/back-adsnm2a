require('dotenv').config();

const mongoose = require('mongoose');
const Produto = require('./modelo');

const url = process.env.MONGODB_URL;

async function main(){
    try {
        await mongoose.connect(url);
        console.log("Funcionou");
    }catch(err){
        console.log("Deu ruim", err.message);
    }

    const produto = new Produto({
        nome: 'banana',
        preco: 12,
        quantidade: 5
    });
    try{
        await produto.save();
        console.log(produto);
    }catch (err){
        for(let key in err.erros){
            console.log(err.errors[key].message)
        }
    }

 

/*    const produto = await Produto.create({
        nome: 'uva',
        preco: 32.5,
        quantidade: 10
    });

    console.log(produto);
*/

/*
    const produtos = await Produto.insertMany([
        {nome: "maçã", preco: 20.7, quantidade: 8},
        {nome: "pera", preco: 12.5, quantidade: 17},
        {nome: "nabo", preco: 23.6, quantidade: 4}
    ]);

    console.log(produtos);
*/
/* 
    const produto = await Produto.findOne({nome: "banana"});
    console.log(produto);
*/
/*
    const produtos = await Produto.find({nome:"banana"});
    console.log(produtos);
*/
/*
    const produto = await Produto.findOneAndUpdate(
        {nome: "banana"},{nome: "banana nanica", preco: 15.0, quantidade: 20}
    );
        // const result = await Produto.uptadeOne({nome: "banana"}, {nome: "banana nanica", preco: 15, quantidade: 20});
    console.log(produto);
*/
/*
    const produto = await Produto.findOneAndDelete({nome: "uva"});
    console.log(produto);
*/

//    const produto = await Produto.deleteMany({nome: "banana"})



    await mongoose.disconnect();
}

main();