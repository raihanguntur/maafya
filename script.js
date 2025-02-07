// Memutar audio saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    const surpriseAudio = document.getElementById('surpriseAudio');

    if (surpriseAudio) {
        surpriseAudio.play().catch(error => {
            console.log("Pemutaran audio diblokir oleh browser:", error);
        });
    }
});

// Event untuk tombol kejutan
document.getElementById('surpriseButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.remove('hidden');
    this.style.display = 'none'; // Sembunyikan tombol setelah diklik
});
