//pop -> ultimo item ; shift -> priemiro item
//push -> ultimo item ; unshift -> primeiro item

const nomes = ['ayrles', 'babi', 'familia'];
const novo = [...nomes];
novo.pop();
//pop remove o ultimo elemto do array
console.log(nomes);
console.log(novo);
//neste exemplo novo é uma cópia de nomes ao usar o spread (...)

const nomes2 = ['ayrles', 'babi', 'familia'];
const removido = nomes2.pop();
console.log(nomes2, removido);

/** */

const nomes3 = ['ayrles', 'babi', 'familia'];
const removido3 = nomes3.shift();
console.log(nomes3, removido3);
//shift remove o primeiro item do array (reposiciona os valores do índices 0 , 1...)

const nomes4 = ['ayrles', 'babi', 'familia'];
nomes4.unshift('aloha');
console.log(nomes4);
//parece um push mas ao invés de add no final do array, é add no início (reposiciona os valores do índices 0 , 1...)

/** */

const nomes5 = ['ayrles', 'babi', 'familia', 'aloha', 'casa'];
const novo5 = nomes5.slice(1, 3);
console.log(novo5);

const nomes6 = ['ayrles', 'babi', 'familia', 'aloha', 'casa'];
const novo6 = nomes6.slice(0, -1);
console.log(novo6);
//slice "fatia" o array(de um ponto a outro)

/** */

const nomeString = 'Ayrles Sales';
const nomeStr = nomeString.split(' ');
console.log(nomeStr);
//split tranforma uma string em array de string especificando oq será usado para separar os intes, nesse caso, espaço branco

/** */

const nomes7 = ['ayrles', 'babi', 'familia', 'aloha', 'casa'];
const novo7 = nomes7.join(', ');
console.log(novo7);
//join une todos os valores do array especificando oq irá separar as palavras, nesse caso, uma vírgula e um espaço em branco