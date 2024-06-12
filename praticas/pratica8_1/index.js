const readline = require('readline-sync');

const controlador = require('./controlador');

function exibirMenu(){
    console.log('AGENDA')
    console.log('1 - consultar contato');
    console.log('2 - Incluir contato');
    console.log('3 - Atualizar contato');
    console.log('4 - Remover contato');
    console.log('5 - Sair');
}

async function escolherOpcao(opcao){
    switch(opcao){
        case '1':
            {
                const nome = readline.question("Entre com o nome do contato: "); 
                const contato = await controlador.consultarContato(nome);
                console.log('Contato encontrado ', contato);
                break;
             }
        case '2':
            {
                const nome = readline.question("Entre com o nome do contato: "); 
                const email = readline.question("Entre com o email do contato: "); 
                const telefone = readline.question("Entre com o telefone do contato: ");
                const contato = await controlador.criarContato(nome, email, telefone);
                console.log("Contato adicionado ", contato); 
                break;
             }
        case '3':
            {
                const nome = readline.question("Entre com o nome do contato: "); 
                const email = readline.question("Entre com o email do contato: "); 
                const telefone = readline.question("Entre com o telefone do contato: ");
                const contato = await controlador.atualizarContato(nome, email, telefone);
                console.log("Contato atualizado ", contato);
                break;
             }
        case '4':
            {
                const nome = readline.question("Entre com o nome do contato: ");
                const contato = await controlador.removerContato(nome);
                console.log('Contato removido ', contato);
                break;
             }
        case '5':
            process.exit(0);
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}

async function main(){
    while(true){
        exibirMenu();
        const opcao = readline.question("Escolha uma opção: ");
        await escolherOpcao(opcao);
    }
}

main();