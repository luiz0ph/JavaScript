function mascaraCartaoCredito(value) {
    // Remove os caracteres não numéricos
    const regex = /\D+/g;
    value = value.replace(regex, "");
  
    // Formata o número do cartão
    let resultado = "";
    for (let i = 0; i < value.length; i++) {
      if ((i + 1) % 4 === 0 && i > 0) {
        resultado += " ";
      }
      resultado += value[i];
    }
    return resultado;
  }
  
  const numero_cartao = document.getElementById('numero_cartao');
  numero_cartao.addEventListener('input', () => {
    const valorFormatado = mascaraCartaoCredito(numero_cartao.value);
    numero_cartao.value = valorFormatado;
  });
  