const data = new Date();
const dia = data.getDay();
let diaSemana;

/*
if (dia === 0) { 
    diaSemana = 'domingo' 
} 
else if (dia === 1) { 
    diaSemana = 'segunda' 
} 
else if (dia === 2) { 
    diaSemana = 'terça' 
} 
else if (dia === 3) { 
    diaSemana = 'quarta' 
} else if (dia === 4) { 
    diaSemana = 'quinta' 
} else if (dia === 5) { 
    diaSemana = 'sexta' 
} else if (dia === 6) { 
    diaSemana = 'sábado' 
}
*/

switch (dia) {
    case 0:
        diaSemana = 'domingo';
        break;
    case 1:
        diaSemana = 'segunda';
        break;
    case 2:
        diaSemana = 'terça';
        break;
    case 3:
        diaSemana = 'quarta';
        break;
    case 4:
        diaSemana = 'quinta';
        break;
    case 5:
        diaSemana = 'sexta';
        break;
    case 6:
        diaSemana = 'sábado';
        break;
    default:
        diaSemana = '';
}

console.log(diaSemana);