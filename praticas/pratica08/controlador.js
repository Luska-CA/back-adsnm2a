const modelo = require('./modelo.js');

async function adicionarContato(nome, email, telefone){
    const contato = new modelo.Contato(nome, email, telefone);
    modelo.inserir(contato);
    console.log("inserir");
}

async function buscarContato(nome){
    const contato = new modelo.Contato(nome);
    return modelo.buscar(contato);
}

async function atualizarContato(nome, email, telefone){
    const contato = buscarContato(nome);
    if (contato){
        contato.nome = nome;
        contato.email = email;
        contato.telefone = telefone;
        modelo.alterar(contato);
    }
}

async function removerContato(nome){
    const contato = buscarContato(nome);
    if(contato){
        modelo.deletar(contato);
    }
}

module.exports = {adicionarContato, removerContato, buscarContato, atualizarContato};