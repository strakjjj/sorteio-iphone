document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('gridNumeros');
  let numeroSelecionado = null;

  // Gerar 50 cotas de exemplo (01 a 50)
  for (let i = 1; i <= 50; i++) {
    const numDiv = document.createElement('div');
    const numFormatado = String(i).padStart(2, '0');
    numDiv.classList.add('numero-cota');
    numDiv.innerText = numFormatado;

    numDiv.addEventListener('click', () => {
      document.querySelectorAll('.numero-cota').forEach(el => el.classList.remove('selecionado'));
      numDiv.classList.add('selecionado');
      numeroSelecionado = numFormatado;
    });

    grid.appendChild(numDiv);
  }

  // Ação ao enviar o formulário
  document.getElementById('formSorteio').addEventListener('submit', (e) => {
    e.preventDefault();

    if (!numeroSelecionado) {
      alert('Por favor, selecione um número da lista antes de prosseguir.');
      return;
    }

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;

    alert(`Obrigado, ${nome}! Você selecionou o número ${numeroSelecionado}. Próximo passo: Gerar PIX.`);
  });
});
