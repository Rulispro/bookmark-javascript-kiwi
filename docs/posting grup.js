javascript:(function() {
    console.log("🚀 Script dimulai...");

    let savedGroups = localStorage.getItem("fb_group_list");
    let groupLinks = savedGroups ? JSON.parse(savedGroups) : [];

    if (groupLinks.length === 0) {
        let input = prompt("Masukkan link grup Facebook (pisahkan dengan koma ,):");
        if (!input) return;
        groupLinks = input.split(",").map(link => link.trim());
        localStorage.setItem("fb_group_list", JSON.stringify(groupLinks));
        localStorage.setItem("fb_group_index", "0");
    }

    let currentIndex = parseInt(localStorage.getItem("fb_group_index") || "0", 10);
    if (currentIndex >= groupLinks.length) {
        alert("✅ Semua grup sudah diproses!");
        localStorage.removeItem("fb_group_list");
        localStorage.removeItem("fb_group_index");
        return;
    }

    function postToGroup() {
        console.log(`📌 Memproses grup ke-${currentIndex + 1}: ${groupLinks[currentIndex]}`);

        let captionBox = document.querySelector('div[contenteditable="true"]');
        if (captionBox) {
            captionBox.innerText = "📢 Ini adalah postingan otomatis!";
            captionBox.dispatchEvent(new Event('input', { bubbles: true }));
            console.log("✍️ Caption diisi.");
        } else {
            console.log("❌ Tidak menemukan kotak caption.");
        }

        let postButton = document.querySelector('button[type="submit"]') || document.querySelector('[aria-label="Post"]');
        if (postButton) {
            setTimeout(() => {
                postButton.click();
                console.log("🚀 Postingan dikirim.");
                moveToNextGroup();
            }, 3000);
        } else {
            console.log("❌ Tombol posting tidak ditemukan.");
            moveToNextGroup();
        }
    }

    function moveToNextGroup() {
        currentIndex++;
        localStorage.setItem("fb_group_index", currentIndex);

        if (currentIndex >= groupLinks.length) {
            alert("✅ Semua grup sudah diproses!");
            localStorage.removeItem("fb_group_list");
            localStorage.removeItem("fb_group_index");
            return;
        }

        setTimeout(() => {
            console.log(`🔄 Beralih ke grup berikutnya: ${groupLinks[currentIndex]}`);
            window.location.href = groupLinks[currentIndex];
        }, 10000);
    }

    if (window.location.href.includes("facebook.com/groups")) {
        setTimeout(postToGroup, 5000);
    } else {
        console.log("🔄 Membuka grup pertama...");
        window.location.href = groupLinks[currentIndex];
    }
})();
  
