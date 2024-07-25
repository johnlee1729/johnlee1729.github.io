document.getElementById('musicForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const photo = document.getElementById('photoUpload').files[0];
    const song = document.getElementById('songInput').value;

    console.log('Photo:', photo);
    console.log('Song:', song);

// Trigger the animation
createAnimation();

function createAnimation() {
    const container = document.getElementById('animationContainer');
    container.innerHTML = ''; // Clear previous animations

    for (let i = 0; i < 50; i++) {
        const elem = document.createElement('span');
        elem.className = i % 2 === 0 ? 'note' : 'heart';
        elem.textContent = i % 2 === 0 ? '♫' : '♥';
        container.appendChild(elem);

        const randomX = Math.random() * window.innerWidth;
        const staggeredDelay = 0.1 * (i % 5); // Stagger the start times slightly
        elem.style.left = randomX + 'px';
        elem.style.animationDelay = staggeredDelay + 's';
    }
}
});

