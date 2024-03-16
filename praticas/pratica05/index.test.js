const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

describe('Teste da API /produtos', function(){
    test('Deve retornar 200 no GET /produtos e um json.',async function(){
        const response = await request.get("/produtos");
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('Deve retornar 200 e um json no GET /produtos/1', async function(){
        const response = await request.get("/produtos/1");
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);        
    })

    test('Deve retornar 404 e um json no GET /produtos/100', async function(){
        const response = await request.get("/produtos/100");
        expect(response.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('Deve retornar 201 e um json no POST /produtos', async function(){
        const response = (await request.post('/produtos')).send({"nome": "uva", "preco": 20.00})
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('Deve retornar 422 e um json no POST /produtos sem um json', async function(){
        const response = await request.post('/produtos').send({});
        expect(response.status).toBe(422);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('Deve retornar 200 e um json no PUT /produtos/1', async function(){
        const response = await request.put('/produtos').send({"nome": "uva verde", "preco": 18.00});
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('Deve retornar 404 e um json no PUT /produtos/100',async function(){
        const response = await request.put('/produtos/100');
        expect(response.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('Deve retornar 204 sem conteudo no DELETE /produtos/1',async function(){
        const response = await request.delete('/produtos/1');
        expect(response.status).toBe(204);
        expect(response.body).toEqual({});
    })

    test('Deve retornar 404 e um json no DELETE /produtos/100', async function(){
        const response = await request.delete('/produtos/100');
        expect(response.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    })
});