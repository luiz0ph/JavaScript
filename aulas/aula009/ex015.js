let agora = new Date();
let dia_semana = agora.getDay(); // Pega o dia da semana
/*
    0 == Domingo
    1 == Segunda
    2 == Terça
    3 == Quarta
    4 == Quinta
    5 == Sexta
    6 == Sabádo

    o JavaScript devolve o número do dia da semana
*/

// Não esquecer o BREAK dentro do switch
switch (dia_semana) {
    case 0: // Domingo, dia 0
        console.log('Domingo');
        break
    case 1: // Segunda, dia 1
        console.log('Segunda-feira');
        break
    case 2:  // Terça, dia 2
        console.log('Terça-feira')
        break
    case 3: // Quarta, dia 3
        console.log('Quarta-feira');
        break
    case 4: // Quinta, dia 4
        console.log('Quinta-feira');
        break
    case 5: // Sexta, dia 5
        console.log('Sexta-feira');
        break
    case 6: // Sábado, dia 6
        console.log('Sábado');
        break
    default: // Menssagem de erro
        console.log('Erro')
        break
}