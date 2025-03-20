javascript:(function () {
    let count = 0;
    const totalClicks = 50;
    const intervalTime = 3000; // 3 detik

    const intervalId = setInterval(function () {
        let tombolSuka = 
            document.querySelector('button[aria-label="Suka"]') ||
            document.querySelector('button[aria-label="Like"]') ||
            document.querySelector('button[data-testid="reaction_profile_like"]') ||
            document.querySelector('div[aria-label="Suka"]') ||
            document.querySelector('div[aria-label="Like"]');

        if (tombolSuka) {
            tombolSuka.click();
            count++;
            console.log(`Tombol Suka diklik ke-${count}`);
        } else {
            console.log("Tombol Suka tidak ditemukan.");
        }

        if (count >= totalClicks) {
            clearInterval(intervalId);
            console.log("Total 50 klik telah tercapai. Interval dihentikan.");
        }
    }, intervalTime);
})();
