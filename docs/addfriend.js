javascript:(function(){ 
    let count = 0; 
    const maxCount = 50; 
    const intervalTime = 3000; 

    function addFriends() { 
        let addButton = document.querySelector('[aria-label="Add Friend"]') || 
                        document.querySelector('[aria-label="Tambahkan Teman"]'); 

        if (addButton) { 
            addButton.click(); 
            count++; 
            console.log(`✅ Menambahkan teman ke-${count}`); 

            if (count >= maxCount) { 
                console.log('🎉 Selesai! Total 50 teman telah ditambahkan.'); 
                return; 
            } 
        } else { 
            console.log('🔍 Tidak ada tombol Add Friend, scrolling ke bawah...'); 
            window.scrollBy(0, 500); 
        } 

        setTimeout(addFriends, intervalTime); 
    } 

    addFriends(); 
})();
