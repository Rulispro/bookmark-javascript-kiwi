 javascript:(function() {
    let count = 0;
    const maxCount = 50;
    const intervalTime = 5000; // Jeda 5 detik
    
    const interval = setInterval(() => {
        let btn = document.querySelector('[aria-label="Confirm"]') || 
                  document.querySelector('[aria-label="Konfirmasi"]'); 

        if (btn) { 
            btn.click(); 
            count++; 
            console.log(`✅ Konfirmasi ke-${count}`); 

            if (count >= maxCount) { 
                clearInterval(interval);
                console.log('🎉 Selesai! 50 pertemanan telah dikonfirmasi.'); 
            }
        } else { 
            console.log('🔍 Tidak ada tombol Confirm, scrolling ke bawah...'); 
            window.scrollBy(0, 500); 
        } 
    }, intervalTime);
})();
