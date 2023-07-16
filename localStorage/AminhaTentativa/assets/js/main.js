const botao = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

botao.addEventListener('submit', (e) => {
    e.preventDefault();
    lancaValorInput();
})

function lancaValorInput(e) {
    e.preventDefault();
    const inputNvTarefa = document.querySelector('.input-nova-tarefa').value;
    console.log(inputNvTarefa.value);

}
