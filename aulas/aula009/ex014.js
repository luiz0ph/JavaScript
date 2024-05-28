let agora = new Date(); // Data
let hora = agora.getHours(); // Pega a hora atual
console.log(`Agora são ${hora} horas.`);

// Se a hora estiver entre 00 e 06 == "Boa madrugada"
if (hora >= 0 && hora <= 6) {
    console.log('Boa madrugada');
} else if (hora <= 12) {
    console.log('Bom dia');
} else if (hora <= 18) {
    console.log('Boa Tarde');
} else {
    console.log('Boa noite');
}
