<audio id="myaudio">
  <source src="audio/music.mp3" type="audio/mpeg">
</audio>

document.getElementById('surpriseButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    const backgroundMusic = document.getElementById('backgroundMusic');

    surpriseMessage.classList.remove('hidden');
    backgroundMusic.play(); // Memutar lagu
    this.style.display = 'none'; // Sembunyikan tombol setelah diklik
});
