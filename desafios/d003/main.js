document.addEventListener('DOMContentLoaded', () => { 
    function iniciarPasso() {
        let inicio = document.getElementById('inicio');
        let final = document.getElementById('final');
        let passo = document.getElementById('passo');
        let resultado = document.getElementById('res');

        resultado.innerHTML = '';

        if (inicio.value == '' || final.value == '' || passo.value == '') {
            alert('Preencha os campos');
            return;
        }

        if (parseInt(passo.value) <= 0) {
            alert('Passo Invalido! Considerando passo = 1');
            passo.value = parseInt(1);
        }

        let i = parseInt(inicio.value);
        if ( i < parseInt(final.value)) {
            do {
                resultado.innerHTML += i + ' 👉 ';
                i += parseInt(passo.value);
            } while (i <= parseInt(final.value));

        } else {
            do {
                resultado.innerHTML += i + ' 👉 ';
                i -= parseInt(passo.value);
            } while (i >= parseInt(final.value));
        }

        resultado.innerHTML += "🏴";
    }

    let btn = document.getElementById('btn_enviar');
    btn.addEventListener('click', iniciarPasso);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            iniciarPasso(); 
        }
    });
});