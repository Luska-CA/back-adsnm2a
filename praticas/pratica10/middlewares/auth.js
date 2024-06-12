const jsonwebtoken = require('jsonwebtoken');

function verificarToken(req, res, next){
    const token = req.headers['authorization'];
    if (token){
        try{
            const payload = jwt.verify(token, process.env.SEGREDO);
            req.user = payload;
            next();
        }catch(err){
            res.status(401).json({msg: 'Token invalido'})
        }
    }else{
        res.status(400).json({msg: 'Token não informado'})
    }
}

module.exports = verificarToken;