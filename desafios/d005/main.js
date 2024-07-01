let tabela = document.querySelector('table#tabela');
let btnAdcionar = document.querySelector('button#btn_adcionar');
let btnFinalizar = document.querySelector('button#btn_finalizar');

// Adciona um ouvinte de click no botão
btnAdcionar.addEventListener('click', adcionarNumero);

// Cria o array
let valores = [];
// Armazena o valor do input num
let num = document.querySelector('input#num').value;

// Adciona o número ao clicar no enter
document.querySelector('input#num').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adcionarNumero();
    }
});

function adcionarNumero() {
    // Atualiza o valor do input
    num = document.querySelector('input#num').value;
    
    // Verifica as especificações
    if (num == '' || valores.indexOf(num) != -1 || num < 1 || num > 100) {
        // Alerta de erro
        alert('Numero invalido!');
    } else {
        // Adciona o número
        valores.push(num);
        
        // Adciona os valores na tabela
        tabela.innerHTML += `<tr> <td> Valor ${num} adcionado </td> </tr>`

        res.innerHTML = '';
    }
}

let res = document.getElementById('res');

btnFinalizar.addEventListener('click', finalizar);

function finalizar() {
    res.innerHTML = '';
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);
    let soma = 0;

    for(let i = 0; i < valores.length; i++) {
        soma += Number(valores[i]);
    }

    let media = (soma / Number(valores.length)).toFixed(2);

    res.innerHTML += `<h2> Ao todo temos ${valores.length} Números </h2>`;
    res.innerHTML += `<h2> O maior valor informado foi ${maior} </h2>`;
    res.innerHTML += `<h2> O menor valor informado foi ${menor} </h2>`;
    res.innerHTML += `<h2> A soma de todos os valores é de ${soma} </h2>`;
    res.innerHTML += `<h2> A média dos valores é de ${media} </h2>`
}