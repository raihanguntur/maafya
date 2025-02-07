document.getElementById('surpriseButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    const backgroundMusic = document.getElementById('backgroundMusic');

    surpriseMessage.classList.remove('hidden');
    backgroundMusic.play(); // Memutar lagu
    this.style.display = 'none'; // Sembunyikan tombol setelah diklik
});
