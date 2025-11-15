
// Part 7B – Enhanced Vault UI

function vaultFilter(room) {
    const list = JSON.parse(localStorage.getItem("photo_vault") || "[]");
    const div = document.getElementById("vault-enhanced");
    div.innerHTML = "";
    list.filter(p => room === "" || p.room === room).forEach(p => {
        div.innerHTML += `
        <div class='card' style="display:inline-block;margin:10px;">
            <img src="${p.url}" onclick="vaultPopup('${p.url}')" 
            style="width:140px;height:140px;object-fit:cover;border-radius:6px;cursor:pointer;">
            <p><b>${p.room}</b> – Ref: ${p.ref}</p>
        </div>`;
    });
}

function vaultPopup(url) {
    const modal = document.getElementById("vault-modal");
    const img = document.getElementById("vault-modal-img");
    img.src = url;
    modal.style.display = "block";
}

function vaultClose() {
    document.getElementById("vault-modal").style.display = "none";
}
