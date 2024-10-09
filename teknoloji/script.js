// "Daha Fazlasını Keşfet" butonuna tıklandığında içerik bölümünü göster
document.getElementById("learn-more-btn").addEventListener("click", function() {
    const contentSection = document.querySelector('.content');
    contentSection.classList.toggle('hidden');

    // Sayfa kaydırma animasyonu
    contentSection.scrollIntoView({ behavior: 'smooth' });
});
