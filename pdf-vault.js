
// Part 7C – PDF Vault Integration

async function addVaultToPDF(doc, startY = 120) {
    const vault = JSON.parse(localStorage.getItem("photo_vault") || "[]");
    let y = startY;

    doc.setFontSize(18);
    doc.text("Photo Vault", 40, y);
    y += 30;

    for (let p of vault) {
        if (y > 760) {
            doc.addPage();
            y = 60;
        }

        doc.setFontSize(12);
        doc.text(`${p.room} – Ref: ${p.ref}`, 40, y);

        try {
            const img = await toBase64(p.url);
            doc.addImage(img, "JPEG", 40, y + 10, 150, 150);
        } catch(e) {
            doc.text("[Image load error]", 40, y + 20);
        }

        y += 180;
    }
}

async function toBase64(url) {
    const res = await fetch(url);
    const blob = await res.blob();
    return new Promise(resolve => {
        const r = new FileReader();
        r.onloadend = () => resolve(r.result);
        r.readAsDataURL(blob);
    });
}

window.PDF_VAULT = { addVaultToPDF };
