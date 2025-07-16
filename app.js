let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let nomeJogador = '';

// Função para verificar se o DOM está carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado');
    const botaoIniciar = document.querySelector('button[onclick="iniciarJogo()"]');
    console.log('Botão iniciar encontrado:', botaoIniciar);
});

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    if (campo) {
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('#mensagem-jogo', `Olá ${nomeJogador}! Escolha um número entre 1 e ${numeroLimite}`);
}

function iniciarJogo() {
    console.log('Função iniciarJogo chamada');
    const nomeInput = document.getElementById('nome-jogador');
    const numeroMaxInput = document.getElementById('numero-maximo');
    
    console.log('Inputs encontrados:', nomeInput, numeroMaxInput);
    
    if (!nomeInput.value.trim()) {
        alert('Por favor, digite seu nome!');
        return;
    }
    
    nomeJogador = nomeInput.value.trim();
    numeroLimite = parseInt(numeroMaxInput.value);
    
    console.log('Nome:', nomeJogador, 'Limite:', numeroLimite);
    
    // Atualizar o input de chute com o novo limite
    document.getElementById('chute-input').max = numeroLimite;
    
    // Esconder configuração e mostrar jogo
    const configuracao = document.getElementById('configuracao-inicial');
    const jogo = document.getElementById('jogo');
    
    configuracao.classList.add('oculto');
    jogo.classList.remove('oculto');
    jogo.classList.add('visivel');
    
    // Reiniciar variáveis do jogo
    listaDeNumerosSorteados = [];
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    
    exibirMensagemInicial();
}

function verificarChute() {
    let chute = document.getElementById('chute-input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns ${nomeJogador}! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('#mensagem-jogo', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('#mensagem-jogo', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('#mensagem-jogo', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.getElementById('chute-input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}







