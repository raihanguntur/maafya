document.getElementById('enableAudio').addEventListener('click', function() {
    const surpriseAudio = document.getElementById('surpriseAudio');
    surpriseAudio.play().catch(error => console.log("Pemutaran audio diblokir:", error));
    this.style.display = 'none'; // Sembunyikan tombol setelah diklik
});

// Event untuk tombol kejutan
document.getElementById('surpriseButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.remove('hidden');
    this.style.display = 'none'; // Sembunyikan tombol setelah diklik
});
