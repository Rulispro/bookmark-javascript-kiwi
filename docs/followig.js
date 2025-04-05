javascript:(function(){
    let index = 0;
    const maxFollow = 50;
    const delay = 2000;

    function followNext() {
        const followButtons = Array.from(document.querySelectorAll('button'))
            .filter(btn => btn.innerText === 'Follow' || btn.innerText === 'Ikuti');

        if (index >= followButtons.length || index >= maxFollow) {
            console.log(`✅ Selesai follow ${index} akun.`);
            return;
        }

        followButtons[index].click();
        console.log(`➕ Follow akun ke-${index + 1}`);
        index++;

        setTimeout(followNext, delay);
    }

    followNext();
})();
