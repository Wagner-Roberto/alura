document.addEventListener('DOMContentLoaded', () => {
    const capivara = document.getElementById('capivara');
    const gameContainer = document.getElementById('gameContainer');

    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;
    const capivaraWidth = capivara.clientWidth;
    const capivaraHeight = capivara.clientHeight;

    let x = (containerWidth - capivaraWidth) / 2;
    let y = (containerHeight - capivaraHeight) / 2;

    capivara.style.left = `${x}px`;
    capivara.style.top = `${y}px`;

    const speed = 5; // Velocidade do movimento
    let keys = {};

    document.addEventListener('keydown', (event) => {
        keys[event.key] = true;
    });

    document.addEventListener('keyup', (event) => {
        keys[event.key] = false;
    });

    function updatePosition() {
        if (keys['w'] && y - speed >= 0) y -= speed;
        if (keys['a'] && x - speed >= 0) x -= speed;
        if (keys['s'] && y + speed <= containerHeight - capivaraHeight) y += speed;
        if (keys['d'] && x + speed <= containerWidth - capivaraWidth) x += speed;

        capivara.style.left = `${x}px`;
        capivara.style.top = `${y}px`;

        requestAnimationFrame(updatePosition);
    }

    updatePosition();
});

