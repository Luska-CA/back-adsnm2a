const express = require('express');

const app = express();

app.use(express.json());

app.use(function(req,res, next){
    console.log("Data: ", new Date());
    next();
})

app.listen(3000, function(){
    console.log("API ONLINE")
});

app.get("/", function(req, res){
    res.status(200).send("!");
})

app.post("/", function(req,res){
    console.log(req.body);
    res.status(201);
    res.json({"status": "201", "message": "Sucesso"});
})

app.put("/", function(req,res){
    res.status(200).end()
})

app.delete("/", function(req,res){
    res.status(204).end();
})

module.exports = app;