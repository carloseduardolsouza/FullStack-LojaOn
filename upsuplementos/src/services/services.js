function formatarCurrency(numero) {
    // Converter para número, se possível
    const numeroComoNumero = parseFloat(numero);
  
    // Verificar se o número é válido
    if (isNaN(numeroComoNumero)) {
      return 'Número inválido';
    }
  
    // Formatar o número como moeda brasileira (BRL)
    const numeroFormatado = numeroComoNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return numeroFormatado;
}
export default {
    formatarCurrency,
}