# 🎮 Jogo do Número Secreto

![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26-orange)
![CSS3](https://img.shields.io/badge/CSS3-1572B6-blue)

Um jogo interativo e divertido onde você deve adivinhar um número secreto entre 1 e 10. Desenvolvido com JavaScript puro, HTML5 e CSS3, este projeto demonstra conceitos fundamentais de programação web.

## 📋 Índice

- [Descrição do Projeto](#-descrição-do-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Jogar](#-como-jogar)
- [Instalação e Execução](#-instalação-e-execução)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Principais Aprendizados](#-principais-aprendizados)
- [Autor](#-autor)

## 🎯 Descrição do Projeto

O **Jogo do Número Secreto** é um desafio interativo onde o jogador deve descobrir um número aleatório entre 1 e 10. A cada tentativa, o sistema fornece dicas indicando se o palpite foi maior ou menor que o número secreto, guiando o jogador até a resposta correta.

O projeto foi desenvolvido para aplicar e consolidar conhecimentos em:
- Manipulação do DOM com JavaScript
- Eventos e interatividade
- Lógica de programação
- Design responsivo
- Integração de APIs externas

## ✨ Funcionalidades

### 🎲 Mecânicas do Jogo
- **Geração Aleatória**: Um novo número secreto é gerado a cada partida
- **Sistema de Dicas**: Informa se o palpite é maior ou menor que o número secreto
- **Contador de Tentativas**: Exibe quantas tentativas foram necessárias para acertar
- **Validação de Entrada**: Aceita apenas números entre 1 e 10
- **Reinício de Jogo**: Botão para iniciar uma nova partida

### 🎨 Interface e Experiência
- **Design Moderno**: Interface com gradiente azul e elementos visuais atrativos
- **Responsividade**: Adaptável a diferentes tamanhos de tela
- **Sintetização de Voz**: Feedback auditivo usando a Web Speech API
- **Animações**: Transições suaves e feedback visual
- **Tipografia**: Fontes personalizadas (Chakra Petch e Inter)

### 🔧 Funcionalidades Técnicas
- **Prevenção de Repetição**: Evita que o mesmo número seja sorteado consecutivamente
- **Limpeza Automática**: Campo de entrada é limpo após cada tentativa
- **Estados de Botão**: Botão "Novo Jogo" fica desabilitado durante o jogo
- **Console Logging**: Para debugging e acompanhamento dos números sorteados

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com gradientes, flexbox e media queries
- **JavaScript (ES6+)**: Lógica do jogo e manipulação do DOM
- **Web Speech API**: Sintetização de voz para feedback auditivo
- **Google Fonts**: Tipografia personalizada (Chakra Petch, Inter)
- **ResponsiveVoice.js**: Biblioteca para síntese de voz em português

## 🎮 Como Jogar

1. **Início**: O jogo gera automaticamente um número secreto entre 1 e 10
2. **Tentativa**: Digite um número no campo de entrada
3. **Feedback**: Clique em "Chutar" e receba dicas sobre seu palpite
4. **Dicas**: O sistema informa se o número secreto é maior ou menor
5. **Vitória**: Quando acertar, veja quantas tentativas foram necessárias
6. **Reinício**: Clique em "Novo Jogo" para jogar novamente

## 💻 Instalação e Execução

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para carregar fontes e bibliotecas externas)

### Execução Local

1. **Clone o repositório**
   ```bash
   git clone https://github.com/marlonfsantos/jogo-do-numero-secreto
   ```

2. **Acesse a pasta do projeto**
   ```bash
   cd jogo-do-numero-secreto
   ```

3. **Abra o arquivo index.html**
   - Duplo clique no arquivo `index.html`
   - Ou abra através do seu navegador preferido
   - Ou use um servidor local (recomendado)

## 📁 Estrutura do Projeto

```
jogo-do-numero-secreto/
├── index.html          # Estrutura principal da página
├── app.js             # Lógica do jogo em JavaScript
├── style.css          # Estilos e design responsivo
├── README.md          # Documentação do projeto
└── img/               # Recursos visuais
    ├── bg.png         # Imagem de fundo
    ├── code.png       # Elemento visual de código
    ├── ia.png         # Ilustração principal
    └── Ruido.png      # Textura de ruído
```

## 🧠 Principais Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados e consolidados os seguintes conceitos:

### 💻 Programação
- **Lógica Condicional**: Uso de `if/else` para comparações e validações
- **Funções**: Organização do código em blocos reutilizáveis
- **Arrays**: Controle de números já sorteados
- **Math.random()**: Geração de números aleatórios
- **Recursão**: Função que chama a si mesma para evitar repetições

### 🌐 Desenvolvimento Web
- **Manipulação do DOM**: Seleção e modificação de elementos HTML
- **Eventos**: Captura de cliques e interações do usuário
- **Validação**: Verificação de entrada do usuário
- **Responsividade**: Design adaptável a diferentes dispositivos

### 🎨 Design e UX
- **CSS Flexbox**: Layout flexível e responsivo
- **Gradientes**: Efeitos visuais modernos
- **Tipografia**: Uso de fontes personalizadas
- **Feedback Visual**: Estados de botões e elementos interativos

### 🔧 APIs e Integrações
- **Web Speech API**: Síntese de voz para acessibilidade
- **Google Fonts**: Integração de fontes externas
- **ResponsiveVoice.js**: Biblioteca para síntese de voz em português

## 👨‍💻 Autor

**Desenvolvido com ❤️ por [Seu Nome]**

Este projeto foi criado como parte do aprendizado em desenvolvimento web, demonstrando a aplicação prática de conceitos fundamentais de programação.

---

### 📞 Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/marlonfsantos)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/marlonfsantos)

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela no repositório!**
