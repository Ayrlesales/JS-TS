/* As chaves do map não tem padrão. ele contém como chave o que é definido explicitamente nele. Já o 
objeto, possui cahve padrão.

map aceita todos chaves de qualquer valor(string, number, funções, objetos...).
o object só aceita os valores das chaves serem strings


o map itera suas entradas, chaves, e valor na ordem em que foram inseridas*/

const pessoas = [
    { id: 3, nome: 'helena' },
    { id: 1, nome: 'maria' },
    { id: 2, nome: 'julia' }
] 

const novasPessoas = {}
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas[id] = {...pessoa}
}
console.log(novasPessoas)

console.log()

const novasPessoasMap = new Map()
for (const pessoa of pessoas){
    const { id } = pessoa
    novasPessoasMap.set(id, {...pessoa})
}
console.log(novasPessoasMap)