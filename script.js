document.getElementById('surpriseButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.remove('hidden');
    this.style.display = 'none'; // Sembunyikan tombol setelah diklik
});
