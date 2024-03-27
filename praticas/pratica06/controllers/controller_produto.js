const produtos = [{nome: "uva", preco: 12.00, id:0}, {nome: "laranja", preco: 14.00, id:1}];

/*
d) Declare uma função listarTodos contendo os parâmetros req e res..

e) Faça a função listarTodos responder um JSON do array dos produtos.
*/
function listarTodos(req,res){
    res.json(produtos);
}

/*
f) Declare uma função buscarPeloId contendo os parâmetros req e res.

g) Faça a função buscarPeloId localizar um produto pelo id e responder um JSON do produto encontrado.

h) Caso o produto não seja encontrado, faça a função buscarPeloId retornar o código 404 e o objeto {msg: “Produto não encontrado”}.
*/
function buscarPeloId(req,res){
    const {produtoId} = req.params;
    const produtoEncontrado = produtos.find(item => item.id == produtoId);
    if (produtoEncontrado) {
        req.produtoEncontrado = produtoEncontrado;
        next();
    }else{
        res.status(404).json({msg: "Produto não encontrado"});
}
}

/*
i) Declare uma função criar contendo os parâmetros req e res.

j) Faça a função criar testar se têm dados no corpo da requisição. Se tiver, adicione os dados no array dos produtos. (Dica: crie uma propriedade id cujo valor é o tamanho do array + 1).

k) Faça a função criar responder o código de status 201 e um JSON com o produto adicionado.

l) Se não tiver dados no corpo da requisição, faça a função criar responder o código de status 422 e o objeto {msg: “Nome e/ou preço do produto não informados”}. Verifique se passou no teste unitário.
*/
function criar(req,res){
    const nome = req.body.nome;
    const preco = req.body.preco;
    if (nome && preco){
        const produtoNovo = {id: (produtos.length + 1), nome, preco};
        produtos.push(produtoNovo);
        res.status(201).json(produtoNovo);
    }else{
        res.status(422).json({msg: "Nome e/ou preço do produto não informados"});
    }
}

/*
m) Declare uma função atualizar contendo os parâmetros req e res.

n) Faça a função atualizar localizar um produto pelo id, atualizar os dados com os valores passados no corpo da requisição, e responder com o JSON do produto atualizado.

o) Caso o produto não seja encontrado, faça a função atualizar retornar o código 404 e o objeto {msg: “Produto não encontrado”}. Verifique se passou no teste unitário.
*/
function atualizar(req,res){
    const {produtoId} = req.params;
    const produtoEncontrado = produtos.find(item => item.id == produtoId);
    const nome = req.body.nome;
    const preco = req.body.preco;
    if(produtoEncontrado){
        produtoEncontrado.nome = nome;
        produtoEncontrado.preco = preco;
        res.json(produtoEncontrado);
    }else{
        res.status(404).json({msg: "Produto não encontrado"})
    }
}
/*
p) Declare uma função remover contendo os parâmetros req e res.

q) Faça a função remover localizar um produto pelo id, remover do array dos produtos e responder somente o código de status 204.

r) Caso o produto não seja encontrado, faça a função remover retornar o código 404 e o objeto {msg: “Produto não encontrado”}.
*/
function remover(req,res){
    const {produtoId} = req.params;
    const produtoEncontrado = produtos.find(item => item.id == produtoId);
    if(produtoEncontrado){
        const posicao = produtos.findIndex(item => item.id == produtoId);
        if(posicao >= 0){
            produtos.splice(posicao,1);
            res.status(204).end();
        }
    }else {
        res.status(404).json({msg: "Produto não encontrado"})
    }

}

module.exports = {listarTodos, buscarPeloId, criar, atualizar, remover};