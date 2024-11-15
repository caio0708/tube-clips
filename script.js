function toggleDescription(element) {
    // Alterna a classe 'open' no item
    element.classList.toggle('open');
    
    // Também altera o texto do ícone (se necessário)
    const icon = element.querySelector('.feature-icon');
    if (element.classList.contains('open')) {
        icon.textContent = '-';  // Ícone de "fechar"
    } else {
        icon.textContent = '+';  // Ícone de "abrir"
    }
}
