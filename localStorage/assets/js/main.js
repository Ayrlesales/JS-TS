const inputNvTarefa = document.querySelector('.input-nova-tarefa');
const botao = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaTarefa() {
    inputNvTarefa.value = '';
    inputNvTarefa.focus();
}

function criaBotaoApagar(pegaLi) {
    pegaLi.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'apagar';
//    botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar tarefa')
    pegaLi.appendChild(botaoApagar);
}

function criaTarefa(textInput) {
    const pegaLi = criaLi();
    pegaLi.innerHTML = textInput;
    tarefas.appendChild(pegaLi);
    limpaTarefa();
    criaBotaoApagar(pegaLi);
    salvarTarefas();
}

botao.addEventListener('click', function(e) {
    e.preventDefault();
    if(!inputNvTarefa.value) return;
    criaTarefa(inputNvTarefa.value);
})

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas= [];

    for (let tarefa of liTarefas) {
        let tarefaText = tarefa.innerText;
        tarefaText = tarefaText.replace('apagar', '').trim();
        listaDeTarefas.push(tarefaText);
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();
