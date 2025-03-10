﻿# Sorteio-do-amigo-secreto

Este projeto é um simples aplicativo de sorteio de amigo secreto. Os usuários podem adicionar nomes a uma lista e sortear pares de amigos secretos. Há também uma funcionalidade para reiniciar a lista e os resultados do sorteio.

## Funcionalidades

- Adicionar amigos à lista
- Sortear amigos secretos
- Reiniciar lista e resultados
- Bloquear nomes duplicados
- Permitir sorteio apenas se o número de amigos for par

## Requisitos

- Um navegador web moderno (Chrome, Firefox, Safari, etc.)

## Como Usar

1. Clone este repositório para sua máquina local.
2. Abra o arquivo `index.html` em um navegador web.
3. Adicione nomes à lista de amigos utilizando o campo de entrada e clique no botão "Adicionar amigo".
4. Quando houver mais de um amigo na lista e a quantidade de amigos for par, você pode clicar no botão "Sortear amigo" para sortear os pares.
5. Para reiniciar a lista e os resultados, clique no botão "Reiniciar".

## Estrutura do Projeto

```plaintext
Amigo-secreto/
├── index.html
├── script.js
└── style.css

```Exemplo JavaScript
let amigos = [];
function adicionarAmigo() {
    let valorEntrada = document.querySelector('#amigo').value.trim();
    if (valorEntrada === '') {
        alert('Por favor, insira um nome!');
    } else if (amigos.includes(valorEntrada)) {
        alert('Esse amigo já foi adicionado!');
    } else {
        amigos.push(valorEntrada);
        document.querySelector('#amigo').value = '';
        atualizarListaAmigos();
        if (amigos.length > 1 && amigos.length % 2 === 0) {
            document.querySelector('#botaoSortear').disabled = false;
        }
    }
}
function atualizarListaAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, adicione pelo menos dois amigos para realizar o sorteio.');
        return;
    }
    if (amigos.length % 2 !== 0) {
        alert('A quantidade de amigos deve ser par para realizar o sorteio.');
        return;
    }
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    let sorteados = [...amigos];
    sorteados.sort(() => Math.random() - 0.5);
    for (let i = 0; i < sorteados.length; i++) {
        let amigo = sorteados[i];
        let amigoSecreto = sorteados[(i + 1) % sorteados.length];
        let item = document.createElement('li');
        item.textContent = `${amigo} tirou ${amigoSecreto}`;
        resultado.appendChild(item);
    }
    document.querySelector('#botaoReiniciar').disabled = false;
}
function reiniciar() {
    let confirmacao = confirm('Tem certeza que deseja reiniciar o sorteio?');
    if (confirmacao) {
        amigos = [];
        document.querySelector('#listaAmigos').innerHTML = '';
        document.querySelector('#resultado').innerHTML = '';
        document.querySelector('#botaoReiniciar').disabled = true;
        document.querySelector('#botaoSortear').disabled = true;
    }
}
