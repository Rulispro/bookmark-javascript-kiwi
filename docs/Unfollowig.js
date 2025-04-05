javascript:(function(){
    let index = 0;
    const maxUnfollow = 50;
    const delay = 2500;

    function unfollowNext() {
        const buttons = Array.from(document.querySelectorAll('button'))
            .filter(btn => btn.innerText === 'Following' || btn.innerText === 'Mengikuti');

        if (index >= buttons.length || index >= maxUnfollow) {
            console.log(`✅ Selesai unfollow ${index} akun.`);
            return;
        }

        buttons[index].click();
        console.log(`➖ Unfollow akun ke-${index + 1}`);

        setTimeout(() => {
            const confirmBtn = Array.from(document.querySelectorAll('button'))
                .find(btn => btn.innerText === 'Unfollow' || btn.innerText === 'Berhenti Mengikuti');

            if (confirmBtn) {
                confirmBtn.click();
            }

            index++;
            setTimeout(unfollowNext, delay);
        }, 1000);
    }

    unfollowNext();
})();
