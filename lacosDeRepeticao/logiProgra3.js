const min = 0;
const max = 100;

function recebeNum() {

    const r = (Math.floor(Math.random() * (max - min) + min));

    if (Number.isInteger(r / 3)) {
        console.log(r, 'Fizz')
    } 
    
    if (Number.isInteger(r / 5)) {
        console.log(r, 'Buzz')
    }

    if (Number.isInteger(r / 3) && Number.isInteger(r / 5)) {
        console.log(r, 'FizzBuzz')
    } 
        
    console.log(r)
    
}

recebeNum()





// const divNum = 15;

// function recebeNum(divNum) {
//     if (Number.isInteger(divNum / 3)) {
//         console.log('Fizz')
//     } 
    
//     if (Number.isInteger(divNum / 5)) {
//         console.log('Buzz')
//     }

//     if (Number.isInteger(divNum / 3 && divNum / 5)) {
//         console.log('FizzBuzz')
//     } 
    
//     else { 
//         console.log(divNum)
//     }
// }

// recebeNum(divNum)