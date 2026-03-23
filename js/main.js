const container = document.getElementById('flowers-container');

function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';

    // Posición aleatoria
    flower.style.top = Math.random() * 100 + '%';
    flower.style.left = Math.random() * 100 + '%';

    // Movimiento flotante
    flower.style.animationDuration = (Math.random() * 3 + 6) + 's';
    flower.style.animationDelay = Math.random() * 3 + 's';

    // Pétalos
    for (let i = 0; i < 6; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        flower.appendChild(petal);
    }

    const center = document.createElement('div');
    center.className = 'center';

    const stem = document.createElement('div');
    stem.className = 'stem';

    flower.appendChild(center);
    flower.appendChild(stem);

    container.appendChild(flower);

    // forzar reflow para que la animación funcione
    requestAnimationFrame(() => {
        flower.classList.add('show');
    });

   // eliminacion de las flores 
    setTimeout(() => {
        flower.classList.remove('show');
        flower.classList.add('hide');

       
        setTimeout(() => {
            flower.remove();
        }, 1000); // igual al transition
    }, 5000);
}

// numero de flores
//for (let i = 0; i < 20; i++) {
    //createFlower();
//}

let count = 0;

const interval = setInterval(() => {
    createFlower();
    count++;

    if (count >= 500) clearInterval(interval);
}, 500);










// PARTÍCULAS
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    particle.style.top = Math.random() * 100 + '%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 2 + 3) + 's';

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 6000);
}

setInterval(createParticle, 150);



// TYPEWRITER
const button = document.getElementById('play-btn');
const message = document.querySelector('.message');
const music = document.getElementById('bg-music');

let started = false;

button.addEventListener('click', () => {
    if (started) return;
    started = true;

    //  música
    music.volume = 0.3;
    music.play();

    // ocultar botón
    button.style.display = 'none';

    // mostrar mensaje
    message.classList.remove('hidden');
    message.classList.add('show-message');

    const fullText = message.textContent;
    message.textContent = '';

    let index = 0;

    
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.marginLeft = '2px';

    message.appendChild(cursor);

   
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 500);

    // ✍️ función de escritura
    function typeWriter() {
        if (index < fullText.length) {
            const char = fullText.charAt(index);

            // insertar antes del cursor
            cursor.insertAdjacentText('beforebegin', char);

            index++;

            setTimeout(typeWriter, getDelay(char));
        }
    }

    //  p (más lento)
    function getDelay(char) {
        if (char === '.') return 900;
        if (char === ',') return 500;
        if (char === '\n') return 1200;
        return 160; // velocidad base más lenta
    }

    
    setTimeout(typeWriter, 800);
});
