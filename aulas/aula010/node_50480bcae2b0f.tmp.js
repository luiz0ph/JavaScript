// Estrutura de repetição com variavel de controle
let piramede = '*';
while (piramede.length < 6) {
    console.log(piramede)
    piramede += '*';
}

while (piramede.length > 0) {
    console.log(piramede);
    piramede.replace('*', ' ');
}