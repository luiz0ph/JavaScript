let valores = [8, 1, 7, 4, 2, 9];

console.log(valores);
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

let achar = valores.indexOf(4); // Indice 3
console.log(`O numero 4 está na posição ${achar}`);

let naoAchou = valores.indexOf(3); // Indice -1, não encontrou
console.log(`O numero 3 está na posição ${naoAchou}`);



// for(let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
// }