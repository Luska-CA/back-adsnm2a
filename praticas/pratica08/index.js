const readline = require('readline-sync');
const controlador = require('./controlador');

async function menu(){
    console.log('1. Adicionar contato');
    console.log('2. Buscar contato');
    console.log('3. Atualizar contato');
    console.log('4. Remover contato');
    console.log('5. Sair');
}

async function escolherOpcao(opcao){
    switch(opcao){
        case 1: 
            nome = readline.question("Digite o nome: ");
            email = readline.question("Digite o email: ");
            telefone = readline.question("Digite o telefone: ");
            await controlador.adicionarContato(nome, email, telefone);
            break;
        
        case 2: 
            nome = readline.question("Digite o nome para buscar: ");
            const contato = controlador.buscarContato(nome);
            console.log(contato.nome);
            console.log(contato.email);
            console.log(contato.telefone);
            break;
        
        case 3:
            nome = readline.question("Digite o nome: ");
            email = readline.question("Digite o email: ");
            telefone = readline.question("Digite o telefone: ");
            controlador.atualizarContato(nome, email, telefone);
            break;
        
        case 4: 
            nome = readline.question("Digite o nome: ");
            controlador.removerContato(nome);
            break;

        case 5:
            process.exit();
    }
}

async function main(){
    while(true){
        menu();
        var opcao = parseInt(readline.question("Escolha uma opcao: "))
        await escolherOpcao(opcao);
    }
}

main()