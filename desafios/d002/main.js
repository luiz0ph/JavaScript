document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            verificarIdade(); // Alterar o nome da função chamada
        }
    });
});

function verificarIdade() { // Função chamada ao clicar no botão verificar
    let anoNascimento = document.querySelector('input#ano').value;
    let res = document.getElementById('res');

    let novo = new Date;
    let anoAtual = novo.getFullYear(); // Pega o ano atual

    // Verifica os campos
    if (anoNascimento == '' || anoNascimento > anoAtual || anoNascimento <= 1900) {
        alert('Resultado invalido');
    } else {
        let sexo = document.getElementsByName('sexo');
        let idade = Number(anoAtual - anoNascimento); // Calcular idade
        let genero;
        let img = document.getElementById('foto');
        img.style.display = 'block';

        if (sexo[0].checked) {
            genero = 'Homem'; // Caso seja masculino

            if (idade >= 0 && idade <= 10) {
                // bebe
                img.setAttribute('alt', 'Foto de um bebe masculino');
                img.setAttribute('src', 'img/bebe_m.jpg')
            } else if (idade > 10 && idade <= 21) {
                // Jovem
                img.setAttribute('alt', 'Foto de um jovem masculino');
                img.setAttribute('src', 'img/jovem_m.jpg');
            } else if (idade > 21 && idade <= 60) {
                // Adulto
                img.setAttribute('alt', 'Foto de um adulto masculino');
                img.setAttribute('src', 'img/adulto_m.jpg')
            } else {
                // Idoso
                img.setAttribute('alt', 'Foto de um idoso masculino');
                img.setAttribute('src', 'img/idoso_m.jpg');
            }
        } else {
            genero = 'Mulher'; // Caso seja feminino

            if (idade >= 0 && idade <= 10) {
                // bebe
                img.setAttribute('alt', 'Foto de um bebe feminino');
                img.setAttribute('src', 'img/bebe_f.jpg')
            } else if (idade > 10 && idade <= 21) {
                // Jovem
                img.setAttribute('alt', 'Foto de uma jovem feminino');
                img.setAttribute('src', 'img/jovem_f.jpg');
            } else if (idade > 21 && idade <= 60) {
                // Adulta
                img.setAttribute('alt', 'Foto de uma adulta feminino');
                img.setAttribute('src', 'img/adulto_f.jpg')
            } else {
                // Idosa
                img.setAttribute('alt', 'Foto de uma idosa feminino');
                img.setAttribute('src', 'img/idoso_f.jpg');
            }
        }
        
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade} anos</strong>`;
    }
}