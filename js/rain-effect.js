// rain-effect.js

document.addEventListener('DOMContentLoaded', () => {
    const rain = document.createElement('div');
    rain.classList.add('rain');
    document.body.appendChild(rain);

    const createRaindrop = () => {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}vw`;
        raindrop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
        rain.appendChild(raindrop);
        setTimeout(() => {
            raindrop.remove();
        }, 1000);
    };

    setInterval(createRaindrop, 30);
});
