// Seleção de elementos
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// Variáveis de estado
let isJumping = false;
let lastJumpTime = 0;

// Função de pulo
const jump = () => {
    if (!isJumping) {
        isJumping = true;
        mario.style.bottom = '180px'; // Define a altura do salto
        setTimeout(() => {
            mario.style.bottom = '0'; // Retorna à posição inicial após o salto
            isJumping = false;
        }, 400);
    }
}

// Loop principal do jogo
const gameLoop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseInt(window.getComputedStyle(mario).bottom);

    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
        // Colisão detectada
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(gameLoop);
    }
}, 10);

// Adiciona um event listener para o evento keydown
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') { // Verifica se a tecla pressionada é a tecla de espaço (ou qualquer outra tecla desejada)
        jump(); // Chama a função jump() quando a tecla de espaço é pressionada
    }
});
