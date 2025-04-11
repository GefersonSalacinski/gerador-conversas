const mensagensDiv = document.getElementById('mensagens');
const inputMensagem = document.getElementById('input-mensagem');
const sendButton = document.getElementById('send-button');

// Enviar Mensagem
sendButton.addEventListener('click', () => {
    const mensagemText = inputMensagem.value.trim();
    if (mensagemText) {
        const mensagemElement = document.createElement('div'); // Corrigido para 'mensagemElement'
        mensagemElement.className = 'mensagem';
        mensagemElement.textContent = mensagemText;
        mensagensDiv.appendChild(mensagemElement);

        saveMensagem(); // Salvar mensagem no localStorage
        inputMensagem.value = ''; // Limpar o campo de entrada
        mensagensDiv.scrollTop = mensagensDiv.scrollHeight; // Rolagem para baixo
    }
});

// Salvar mensagem no localStorage
function saveMensagem() {
    const mensagens = Array.from(mensagensDiv.children).map(mensagem => mensagem.textContent);
    localStorage.setItem('mensagens', JSON.stringify(mensagens));
}

// Carregar mensagens ao iniciar
window.addEventListener('load', () => {
    const mensagens = JSON.parse(localStorage.getItem('mensagens')) || [];
    mensagens.forEach(mensagemText => {
        const mensagemElement = document.createElement('div'); // Corrigido para 'mensagemElement'
        mensagemElement.className = 'mensagem';
        mensagemElement.textContent = mensagemText;
        mensagensDiv.appendChild(mensagemElement);
    });
    mensagensDiv.scrollTop = mensagensDiv.scrollHeight; // Rolagem para baixo
});