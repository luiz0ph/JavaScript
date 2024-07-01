document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            criarTabuada(); 
        }
    });
});

let btn = document.getElementById('btn_enviar');
btn.addEventListener('click', criarTabuada);

function criarTabuada() {
    let num = document.getElementById('num');
    let tabela = document.getElementById('tabela');
    let resultado = 0;

    let numero = Number(num.value);

    // Verificar se o campo foi preenchido
    if (num.value == '') {
        alert('Preencha o campo');
    } else {
        tabela.innerHTML =  `<tr> <th> Tabuada do ${numero} </th></tr>` // Resetar a tabela
            
        for (let i = 0; i <= 10; i++) {
            resultado = numero * i;
            tabela.innerHTML += `<tr>
                <td>
                    <strong>${numero} * ${i}</strong> = <strong> ${resultado} </strong>
                </td>
            </tr>`;
        }
    }
}
