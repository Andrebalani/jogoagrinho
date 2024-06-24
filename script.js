// Exemplo básico de interação com o jogo

// Botão de explorar
document.getElementById('exploreButton').addEventListener('click', function() {
    alert('Você está explorando a vila!');
    // Aqui poderia ser adicionada uma função para mostrar mais detalhes da vila, interações com personagens, etc.
});

// Botão de executar código
document.getElementById('runButton').addEventListener('click', function() {
    // Captura o código digitado pelo jogador
    let code = document.getElementById('codeArea').value;

    // Executa o código (simulação)
    try {
        eval(code); // Avalia o código (atenção: eval() é usado aqui apenas para fins de exemplo simples)
        document.getElementById('output').innerHTML = 'Código executado com sucesso!';
    } catch (error) {
        document.getElementById('output').innerHTML = 'Erro ao executar o código: ' + error.message;
    }
});