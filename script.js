javascript:(function() {
    let count = 0;
    let interval = setInterval(() => {
        let btn = document.querySelector('button[type="submit"]:not([disabled])'); // Tombol "Tambahkan Teman" di m.facebook.com
        
        if (!btn) {
            window.scrollBy(0, 300); // Scroll ke bawah jika tombol belum muncul
            return;
        }

        btn.click();
        count++;
        console.log(`✅ Klik ${count} dari 50`);

        if (count >= 50) {
            clearInterval(interval);
            alert(`✅ Selesai! ${count} teman telah ditambahkan.`);
        }
    }, 3000);
})();
