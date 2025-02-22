// Inicializar o array de amigos
let amigos = [];

// Função para adicionar um amigo ao array e atualizar a lista
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let valorEntrada = document.querySelector('#amigo').value.trim();

    // Verificar se o valor de entrada está vazio
    if (valorEntrada === '') {
        alert('Por favor, insira um nome!');
    } else if (amigos.includes(valorEntrada)) {
        alert('Esse amigo já foi adicionado!');
    } else {
        // Adicionar o valor ao array de amigos
        amigos.push(valorEntrada);

        // Limpar o campo de entrada
        document.querySelector('#amigo').value = '';

        // Atualizar a lista de amigos
        atualizarListaAmigos();

        // Ativar o botão "Sortear amigo" se houver mais de um amigo na lista
        if (amigos.length > 1) {
            document.querySelector('#botaoSortear').disabled = false;
        }
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    // Obter o elemento da lista
    let lista = document.querySelector('#listaAmigos');

    // Limpar a lista existente
    lista.innerHTML = '';

    // Percorrer o array de amigos e criar elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento <li> para cada amigo
        let item = document.createElement('li');
        item.textContent = amigos[i];

        // Adicionar o novo elemento <li> à lista
        lista.appendChild(item);
    }
}

// Função para sortear um amigo secreto
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
    resultado.innerHTML = ''; // Limpar resultado anterior

    let sorteados = [...amigos]; // Copiar array de amigos

    // Embaralhar array
    sorteados.sort(() => Math.random() - 0.5);

    // Adicionar pares de amigo secreto à lista de resultados
    for (let i = 0; i < sorteados.length; i++) {
        let amigo = sorteados[i];
        let amigoSecreto = sorteados[(i + 1) % sorteados.length];

        let item = document.createElement('li');
        item.textContent = `${amigo} tirou ${amigoSecreto}`;

        resultado.appendChild(item);
    }

    // Ativar o botão "Reiniciar"
    document.querySelector('#botaoReiniciar').disabled = false;
}

// Função para reiniciar a lista de amigos e o resultado do sorteio
function reiniciar() {
    // Perguntar ao usuário se ele tem certeza de que deseja reiniciar
    let confirmacao = confirm('Tem certeza que deseja reiniciar o sorteio?');

    // Se o usuário confirmar, prosseguir com a reinicialização
    if (confirmacao) {
        // Limpar o array de amigos
        amigos = [];

        // Limpar a lista de amigos na interface
        document.querySelector('#listaAmigos').innerHTML = '';

        // Limpar o resultado do sorteio na interface
        document.querySelector('#resultado').innerHTML = '';

        // Desativar os botões "Reiniciar" e "Sortear amigo"
        document.querySelector('#botaoReiniciar').disabled = true;
        document.querySelector('#botaoSortear').disabled = true;
    }
}
