// Tempo inicial da contagem regressiva em segundos
let countdownTime = 20;

function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    const progressBar = document.getElementById("progress-bar");

    const interval = setInterval(() => {
        // Atualiza o contador de tempo
        countdownElement.textContent = `Você será redirecionado para a página inicial em ${countdownTime} segundos.`;

        // Calcula a largura da barra de progresso
        const progressPercent = ((20 - countdownTime) / 20) * 100;
        progressBar.style.width = progressPercent + "%";

        if (countdownTime === 0) {
            clearInterval(interval);
            redirectToHome(); // Função para redirecionar o usuário
        }

        countdownTime--;
    }, 1000);
}

// Função para redirecionar o usuário para a página inicial
function redirectToHome() {
    window.location.href = "profile.html";  // Altere para a URL da página inicial do seu site
}

// Função para gerar o efeito de confete
function createConfetti() {
    const confettiContainer = document.getElementById("confetti-container");

    for (let i = 0; i < 100; i++) { // Número de confetes
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Posicionamento aleatório
        confetti.style.left = Math.random() * 100 + "vw";

        // Alterna entre as cores royalblue e goldenrod
        const colors = ["royalblue", "yellowgeen", "red", "purple"];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Animação aleatória
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s"; // entre 2 e 5 segundos
        confetti.style.animationDelay = Math.random() * 2 + "s";

        confettiContainer.appendChild(confetti);
    }

    // Remove os confetes após 6 segundos
    setTimeout(() => {
        confettiContainer.innerHTML = "";
    }, 6000);
}

// Chama o efeito de confete ao carregar a página
window.onload = function () {
    createConfetti();
    startCountdown();
};
