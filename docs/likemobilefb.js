javascript:(function() {
    function autoLike() {
        let buttons = document.querySelectorAll('div[role="button"][aria-label*="like"]'); 
        
        if (buttons.length === 0) {
            console.log("❌ Tidak ada tombol Like ditemukan.");
            return;
        }

        let count = 0;
        let index = 0;

        let interval = setInterval(() => {
            if (index >= buttons.length) {
                clearInterval(interval);
                console.log("🎉 Selesai! Semua tombol Like telah diklik.");
                return;
            }

            buttons[index].click();
            console.log(`✔ Klik tombol Like ke-${++count}`);
            index++;
        }, 7000); // Klik setiap 7 detik
    }

    autoLike();
})();
