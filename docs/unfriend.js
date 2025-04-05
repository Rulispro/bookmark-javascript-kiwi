javascript:(function(){
    let index = 0;
    const maxUnfriends = 50;
    const delay = 3000;

    function unfriendNext() {
        const menuButtons = document.querySelectorAll('div[role="button"][aria-label][tabindex="0"]');

        if (index >= menuButtons.length || index >= maxUnfriends) {
            console.log('✅ Selesai unfriend ' + index + ' teman.');
            return;
        }

        const menuBtn = menuButtons[index];
        menuBtn.click();

        setTimeout(() => {
            const unfriendOption = Array.from(document.querySelectorAll('div[role="button"], a[role="button"]'))
                .find(el => el.innerText.includes("Hapus pertemanan") || el.innerText.includes("Unfriend"));

            if (unfriendOption) {
                unfriendOption.click();

                setTimeout(() => {
                    const yesBtn = document.querySelector('[aria-label="Yes"], [aria-label="Ya"]');
                    if (yesBtn) {
                        yesBtn.click();
                        console.log(`❌ Teman ke-${index + 1} telah di-unfriend.`);
                    } else {
                        console.log(`⚠️ Konfirmasi unfriend tidak ditemukan untuk teman ke-${index + 1}.`);
                    }

                    index++;
                    setTimeout(unfriendNext, delay);
                }, 1000);
            } else {
                console.log(`⚠️ Tidak menemukan opsi 'Unfriend' untuk teman ke-${index + 1}.`);
                index++;
                setTimeout(unfriendNext, delay);
            }
        }, 1000);
    }

    unfriendNext();
})();
