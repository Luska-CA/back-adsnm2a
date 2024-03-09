const express = require('express');

const app = express();

// middleware integrado -> já vem com o express
app.use(express.json());

//middleware de app
app.use(function(req,res, next){
    console.log("Data: ", new Date());
    next();
})

// middleware de rota
app.get("/", function(req, res){
    console.log("URL=", req.url);
    console.log("Metodo=",req.method);
    console.log("Cabecalho=",req.headers);
    console.log("Parametros=", req.params);
    console.log("Corpo=", req.body);
    res.send("Sucesso");
})

app.post("/", function(req,res){
    console.log(req.body);
    res.json({status: "200", message: "Sucesso"});
})

app.put("/", function(req,res){
    res.status(204).end();
})

app.delete("/", function(req,res){
    res.end();
})

app.use(function(error, req, res, next){
    res.status(400).send("ERRO");
})

// middleware de erro
app.listen(3000, function(){
    console.log("API NO AR!");
})

module.exports = app;