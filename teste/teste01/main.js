function Calculadora() {
    // Armazenar as variaveis
    const paragrafo = document.getElementById("resultado");
    const valor = document.getElementById('valor');
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operador = document.getElementById("operador").value;
    let casasDecimais = 3;

    // Transforma os números em float
    let num1r = parseFloat(num1);
    let num2r = parseFloat(num2);

    // Verifica se tem algum número
    if (num1 === "" || num2 === "") {
        alert("Preencha os campos abaixo");
        return;
    }

    // Define a função para formatar o número
    function formatarNumero(resultado, casasDecimais) {
        return resultado.toLocaleString('pt-BR', { maximumFractionDigits: casasDecimais });
    }

    // Cor do valor
    valor.style.color = "#00ff00";

    // Se tentar dividir 0 por 0
    if (operador === "/" && num1r === 0 && num2r === 0) {

        // Transforma a cor do texto em vermelho
        paragrafo.style.color = "#ff0000";

        let resultado = "Error"

        // Formata e exibe o resultado
        let numeroFormatado = formatarNumero(resultado, casasDecimais);
        document.getElementById("resultado").innerHTML = numeroFormatado;

    } else {  
        // Executa a operação de acordo com o operador
        let resultado;
        switch (operador) {
            case "+":
                resultado = num1r + num2r;
                break;
            case "-":
                resultado = num1r - num2r;
                break;
            case "/":
                resultado = num1r / num2r;
                break;
            case "%":
                resultado = num1r % num2r;
                break;
            case "*":
                resultado = num1r * num2r;
                break;
            default:
                alert("Operador inválido");
                return;
        }

        // Formata e exibe o resultado
        let numeroFormatado = formatarNumero(resultado, casasDecimais);
        document.getElementById("valor").innerHTML = resultado;
        document.getElementById('resultado').innerHTML = "Resultado: ";
    }
}