function sendWhistle(containerElement) {
    const whistle = document.createElement('i');
    whistle.className = 'fas fa-bullhorn whistle-particle';
    whistle.style.left = Math.random() * 100 + '%';
    whistle.style.top = '50%';

    containerElement.appendChild(whistle);

    // Remove after animation
    setTimeout(() => whistle.remove(), 1000);
}

// Logic to trigger on card click (for demo purposes)
document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', function () {
        sendWhistle(this);
        console.log("Whistled for the movie!");
    });
});