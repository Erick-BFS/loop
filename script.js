// while
console.log('while')

let tabuada = 3;
let contador = 1;

while (contador <= 10) {
    let resultado = tabuada * contador;
    console.log(tabuada + ' x ' + contador + ' = ' + resultado) 
    contador++;
}

// for
console.log('for')

for(let contador = 0; contador <= 10; contador++) {
    let resultado = tabuada * contador;
    console.log(tabuada + ' x ' + contador + ' = ' + resultado)
}

// do
console.log('do while')

let contador3 = 0;
do {
    let resultado = tabuada * contador3;
    console.log(tabuada + ' x ' + contador3 + ' = ' + resultado)
    contador3++
} while(contador3 <= 10);