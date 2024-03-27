const supertest = require("supertest");

const app = require('../app');

const request = supertest(app);

describe('Teste da API /produtos', function(){
    //f) Crie um teste para verificar se uma chamada POST /produtos com um JSON
    // { “nome”: “uva”, “preco”: 20.00 } retorna o status 201 e um conteúdo
    // do tipo JSON contendo as propriedades id, nome e preco com os valores inseridos
    test('Deve retornar 201 no POST do /produtos com um JSON', async function(){
        const response = await request.post('/produtos').send({nome: "uva", preco: 20.00});
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id',3);
        expect(response.headers['content-type']).toMatch(/json/);
    })
    /*
    g) Crie um teste para verificar se uma chamada GET /produtos retorna o status 200 com
     um conteúdo do tipo JSON contendo um array de objetos
    */
    test('Deve retornar 200 e um JSON com um array de objetos do GET no /produtos', async function(){
        const response = await request.get('/produtos');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.headers['content-type']).toMatch(/json/);
    })
    /*
    h) Crie um teste para verificar se uma chamada GET /produtos/1 retorna o status 200
     e um conteúdo do tipo JSON contendo as propriedades id, nome e preco com os valores inseridos.
    */
    test('GET /produtos/1 deve retornar 200 e um JSON com id, nome e preco', async function(){
        const response = await request.get('/produtos/1');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id',3);
        expect(response.body).toHaveProperty('nome',1);
        expect(response.body).toHaveProperty('preco',2);
        expect(response.headers['content-type']).toMatch(/json/);
    })
    /*
    i) Crie um teste para verificar se uma chamada GET /produtos/100 retorna o status 404 e um conteúdo
     do tipo JSON contendo a propriedade msg igual “Produto não encontrado” (Dica: expect(response.body).toHaveProperty(‘msg’, “Produto não encontrado”);)
    */
    test('GET /produtos/100 deve retornar 404 e um JSON', async function(){
        const response = await request.get('/produtos/100').send({msg: "Produto não encontrado"});
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('msg', "Produto não encontrado");
        expect(response.headers['content-type']).toMatch(/json/);
    })
    /*
    j) Crie um teste para verificar se uma chamada POST /produtos sem um JSON e retorna o status 422
     e um conteúdo do tipo JSON contendo a propriedade msg igual “Nome e preço do produtos são obrigatórios”.
     */
    test('POST /produtos sem JSON deve retonrar 422 e um JSON com mensagem', async function(){
        const response = await request.post('/produtos');
        expect(response.status).toBe(422);
        expect(response.body).toHaveProperty('msg', "Nome e/ou preço do produto não informados");
        expect(response.headers['content-type']).toMatch(/json/);
   })
   /*
   k) Crie um teste para verificar se uma chamada PUT /produtos/1 com um JSON {“nome”: “uva verde”, “preco”: 18.00}
    retorna o status 200 e um conteúdo do tipo JSON contendo as propriedades id, nome e preco com os valores atualizados.
   */
    test('PUT /produtos/1 deve retornar 200 e um JSON com id, nome e preco com os valores atualizados', async function(){
        const response = await request.put('/produtos/1').send({nome: 'uva verde', preco: 18.00});
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('nome');
        expect(response.body).toHaveProperty('preco');
        expect(response.headers['content-type']).toMatch(/json/);
  })
  /*
  l) Crie um teste para verificar se uma chamada PUT /produtos/100 retorna o status 404 e um conteúdo do tipo JSON contendo
   a propriedade msg igual “Produto não encontrado”
  */
    test('PUT /produtos/100 deve retornar 404 e um JSON com uma propriedade msg', async function(){
        const response = await request.put('/produtos/100');
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('msg', "Produto não encontrado");
        expect(response.headers['content-type']).toMatch(/json/);
 })
 /*
 m) Crie um teste para verificar se uma chamada DELETE /produtos/1 retorna o status 204 e sem conteúdo.
 */
    test('DELETE /produtos/1 deve retornar 204', async function(){
        const response = await request.delete('/produtos/1');
        expect(response.status).toBe(204);
    })
    /*
    n) Crie um teste para verificar se uma chamada DELETE /produtos/100 retorna o status 404 e um conteúdo
     do tipo JSON contendo a propriedade msg igual “Produto não encontrado”
    */
    test('DELETE /produtos/100 deve retornar 404 e um json com mensagem', async function(){
        const response = await request.delete('/produtos/100');
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('msg', "Produto não encontrado");
   })
})