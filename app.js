// Inicializar o array de amigos
let amigos = [];

// Função para adicionar um amigo ao array e atualizar a lista
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let valorEntrada = document.querySelector('#amigo').value;

    // Verificar se o valor de entrada está vazio
    if (valorEntrada.trim() === '') {
        alert('Por favor, insira um nome!');
    } else {
        // Adicionar o valor ao array de amigos
        amigos.push(valorEntrada);

        // Limpar o campo de entrada
        document.querySelector('#amigo').value = '';

        // Atualizar a lista de amigos
        atualizarListaAmigos();
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
}
