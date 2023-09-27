//               -5       -4       -3       -2        -1
//                0        1        2        3         4
const nomes = ['Maria', 'José', 'Dinorah', 'Babi', 'Química'];

//nomes.splice(índice, delete, addElem1, addElem2, addElem3 )

// métodos que podem ser usados no lugar do DELETE:                
//                                                 Number.MAX_VALUE 

// métodos que podem ser usados no lugar do ÍNDICE:                
//                                                 nomes.length  



//para testar algum abaixo, comentar os demais e deixar apenas oq quer testar
const removidos = nomes.splice(3, 1);
console.log(nomes, removidos); 

const removidos1 = nomes.splice(3, 2);
console.log(nomes, removidos1);


const adicionados = nomes.splice(3, 0, 'Ana');
console.log(nomes);


const RemovEadd = nomes.splice(1, 2, 'Mãe', 'Pai');
console.log(nomes, RemovEadd);


