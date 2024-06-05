const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
const usuario = require('../models/users');

async function criar(req,res){
    const salto = crypto.randomBytes(16).toString('hex');
    const senhaCifrada = cifrarSenha(req.body.senha, salto);
    const novoUsuario =  await usuario.create({email: req.body.email, senha: senhaCifrada, salto});
    res.status(201).json(novoUsuario);
}

function cifrarSenha(senha, salto){
    const hash = crypto.createHmac('sha512', salto);
    hash.update(senha);
    return hash.digest('hex');
}

function gerarToken(payload){
    const expiresIn = 120;
    try{
        return jwt.sign(payload, process.env.SEGREDO)
    }catch(err){
        throw Exception("Erro ao gerar o token");
    }
}

async function entrar(req,res){
    const usuarioEncontrado = await Produto.findOne(req.body.email);
    if (usuarioEncontrado){
        const senhaCifrada = cifrarSenha(req.body.senha, usuarioEncontrado.salto);
        if(senhaCifrada === usuarioEncontrado.senha){
            res.json({token: gerarToken({email: req.body.email})})
        }else{
            res.status(401).json({msg: 'Credenciais invalidas'})
        }
    }else{
        res.status(401).json({ msg: 'Credenciais invalidas'});
    }
}

async function renovar(req, res){
    res.json({token: gerarToken({email: req.user.email})});
}

module.exports = {criar, entrar, renovar};