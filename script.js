document.addEventListener("DOMContentLoaded", function () {
    const surpriseAudio = document.getElementById('surpriseAudio');

    if (surpriseAudio) {
        surpriseAudio.muted = true; // Mulai dalam keadaan mute
        surpriseAudio.play().then(() => {
            surpriseAudio.muted = false; // Unmute setelah berhasil diputar
        }).catch(error => console.log("Pemutaran audio diblokir oleh browser:", error));
    }
});


// Event untuk tombol kejutan
document.getElementById('surpriseButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.remove('hidden');
    this.style.display = 'none'; // Sembunyikan tombol setelah diklik
});
