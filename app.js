let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let nomeJogador = '';
let configuracaoJogo = {};

// Carregar configurações do JSON
async function carregarConfiguracoes() {
    try {
        const response = await fetch('config.json');
        configuracaoJogo = await response.json();
        console.log('Configurações carregadas:', configuracaoJogo);
    } catch (error) {
        console.error('Erro ao carregar configurações:', error);
        // Configuração padrão caso o arquivo não seja encontrado
        configuracaoJogo = {
            dificuldades: {
                facil: { nome: "Fácil", numeroMaximo: 10, descricao: "Números de 1 a 10" },
                medio: { nome: "Médio", numeroMaximo: 30, descricao: "Números de 1 a 30" },
                dificil: { nome: "Difícil", numeroMaximo: 50, descricao: "Números de 1 a 50" }
            }
        };
    }
}

// Função para verificar se o DOM está carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado');
    carregarConfiguracoes();
    const botaoIniciar = document.querySelector('button[onclick="iniciarJogo()"]');
    console.log('Botão iniciar encontrado:', botaoIniciar);
    
    // Adicionar event listener para permitir Enter no input de chute
    const chuteInput = document.getElementById('chute-input');
    if (chuteInput) {
        chuteInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                verificarChute();
            }
        });
    }
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
    const dificuldadeSelect = document.getElementById('dificuldade');
    
    console.log('Inputs encontrados:', nomeInput, dificuldadeSelect);
    
    if (!nomeInput.value.trim()) {
        alert('Por favor, digite seu nome!');
        return;
    }
    
    nomeJogador = nomeInput.value.trim();
    const dificuldadeEscolhida = dificuldadeSelect.value;
    const configDificuldade = configuracaoJogo.dificuldades[dificuldadeEscolhida];
    
    if (!configDificuldade) {
        alert('Erro: Dificuldade não encontrada!');
        return;
    }
    
    numeroLimite = configDificuldade.numeroMaximo;
    
    console.log('Nome:', nomeJogador, 'Dificuldade:', dificuldadeEscolhida, 'Limite:', numeroLimite);
    
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
    
    // Adicionar event listener para Enter no input de chute
    const chuteInput = document.getElementById('chute-input');
    if (chuteInput) {
        chuteInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                verificarChute();
            }
        });
    }
    
    exibirMensagemInicial();
}

function verificarChute() {
    let chute = document.getElementById('chute-input').value;
    
    // Validar se um número foi inserido
    if (!chute || chute.trim() === '') {
        alert('Por favor, digite um número antes de chutar!');
        return;
    }
    
    // Validar se é um número válido
    let numeroChute = parseInt(chute);
    if (isNaN(numeroChute)) {
        alert('Por favor, digite apenas números!');
        return;
    }
    
    // Validar se está dentro do intervalo
    if (numeroChute < 1 || numeroChute > numeroLimite) {
        alert(`Por favor, digite um número entre 1 e ${numeroLimite}!`);
        return;
    }
    
    if (numeroChute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns ${nomeJogador}! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('#mensagem-jogo', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroChute > numeroSecreto) {
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







