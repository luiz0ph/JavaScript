let num = [1, 3, 9, 2, 7]; 
console.log(num);
console.log(`Meu Vetor contem esses elementos ${num}`);
let pos = 0;
for (pos = 0 ; pos < num.length; pos++) {
    console.log(num[pos]);
}

console.log(`Meu primeiro elemento é: ${num[0]}`);
console.log(`Meu ultimo elemento é: ${num[4]}`);
console.log(`O Vetor tem ${num.length} Elementos`);
console.log(`O Vetor em ordem crescente fica assim: ${num.sort()}`);
console.log(num);

for (pos = 0; pos < num.length; pos++) {
    console.log(num[pos]);
}