// Fungsi mengisi caption di kotak "Tulis sesuatu..." di grup Facebook
function isiCaption(caption) {
    // Ambil semua elemen textbox
    const captionBoxes = document.querySelectorAll('div[role="textbox"]');

    // Pilih textbox kedua (untuk "Tulis sesuatu...")
    const captionBox = captionBoxes[1];

    if (captionBox) {
        captionBox.focus(); // Fokus ke textbox
        captionBox.innerText = caption; // Isi teks caption
        captionBox.dispatchEvent(new InputEvent('input', { bubbles: true }));
        console.log("✅ Caption berhasil diisi:", caption);
    } else {
        console.log("❌ Kotak caption tidak ditemukan.");
    }
}

// Jalankan fungsi dengan caption yang diinginkan
isiCaption("📢 Ini adalah postingan otomatis di grup Facebook!");
