javascript:(function(){
    const maxFollow = parseInt(prompt("Mau follow berapa akun?"), 10);
    const delay = parseInt(prompt("Berapa jeda antar klik? (dalam ms)"), 10);

    if (isNaN(maxFollow) || isNaN(delay)) {
        alert("Input tidak valid. Harus angka.");
        return;
    }

    let index = 0;
    const followButtons = Array.from(document.querySelectorAll('button'))
        .filter(btn => (btn.innerText === 'Follow' || btn.innerText === 'Ikuti') && btn.offsetParent !== null);

    function followNext() {
        if (index >= followButtons.length || index >= maxFollow) {
            console.log(`✅ Selesai follow ${index} akun.`);
            return;
        }

        const btn = followButtons[index];
        btn.scrollIntoView({behavior: "smooth"});
        btn.click();
        console.log(`➕ Follow akun ke-${index + 1}`);
        index++;

        setTimeout(followNext, delay);
    }

    followNext();
})();
