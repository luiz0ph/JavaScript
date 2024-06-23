function carregar() {
    var hora_data = document.getElementById('hora_data');
    let saud = document.getElementById('saudacao');
    let img = document.getElementById('img_dia');
    let Agora = new Date();
    let hora = Agora.getHours(); // Pega a hora atual
    let dia = Agora.getDate(); // Pega o dia de hoje
    let mes = Agora.getMonth(); // Pega o mês atual

    // Mostra o nome do Mês
    switch (mes) {
        case 0:
            mes = 'Janeiro';
            break
        case 1:
            mes = 'Fevereiro';
            break
        case 2:
            mes = 'Março';
            break
        case 3:
            mes = 'Maio';
            break
        case 4:
            mes = 'Abril';
            break
        case 5:
            mes = 'Junho';
            break
        case 6:
            mes = 'Julho';
            break
        case 7:
            mes = 'Agosto';
            break
        case 8:
            mes = 'Setembro';
            break
        case 9:
            mes = 'Outubro';
            break
        case 10:
            mes = 'Novembro';
            break
        case 11:
            mes = 'Dezembro'
            break
        default:
            mes = 'Mês Invalido';
            break
    }

    hora_data.innerHTML = `Agora são ${hora} horas. <br> Do dia ${dia} de ${mes}`;


    if (hora > 0 && hora <= 12) { // Caso esteja de Manhã
        document.body.style.backgroundColor = '#C9B88B';
        img.src = 'img/img_manha.jpg';
        saud.innerHTML = 'Bom Dia';
    } else if (hora > 12 && hora <= 18) { // Caso esteja de tarde
        document.body.style.backgroundColor = '#A37862';
        img.src = 'img/img_tarde.jpg';
        saud.innerHTML = 'Boa Tarde';
    } else { // Caso esteja de noite
        document.body.style.backgroundColor = '#454847';
        img.src = 'img/img_noite.jpg';
        saud.innerHTML = 'Boa noite';
    }
}