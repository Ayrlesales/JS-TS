function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new error('x e y precisam ser números.')
    }
    return x + y;
}

//se ocorre algum erro dentro do bloco try cacth é executado
try {
console.log(soma(1, 2));
console.log(soma('1', 2));
} catch(error) {
    //n se lança o error, aqui foi só exemplo
    console.log(error);
    console.log('algo');
}



// try {

// } catch {

// } finally {

// }




// exemplo  um
//
// try {
//     console.log(naoExiste);
// } catch(e) {
//     console.log("'naoExiste' não existe");
// }