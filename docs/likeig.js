javascript:(function(){
    let index = 0;
    const delay = 2500;

    function likeNext() {
        const likeButtons = document.querySelectorAll('svg[aria-label="Like"][width="24"]');
        if (index >= likeButtons.length) {
            console.log("✅ Semua post di halaman sudah di-like.");
            return;
        }

        likeButtons[index].parentNode.click();
        console.log(`❤️ Like post ke-${index + 1}`);
        index++;

        setTimeout(likeNext, delay);
    }

    likeNext();
})();
