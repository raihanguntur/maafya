document.getElementById('surpriseButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    const surpriseAudio = document.getElementById('surpriseAudio');

    surpriseMessage.classList.remove('hidden');
    this.style.display = 'none'; // Sembunyikan tombol setelah diklik

    // Memutar audio secara otomatis
    if (surpriseAudio) {
        surpriseAudio.play().catch(error => console.log("Pemutaran audio diblokir oleh browser:", error));
    }
});
