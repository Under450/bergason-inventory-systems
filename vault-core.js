
// Part 7A – Core Photo Vault Engine (safe load version)

let PHOTO_VAULT = JSON.parse(localStorage.getItem("photo_vault") || "[]");

function vaultAdd(url, room, ref) {
    PHOTO_VAULT.push({ url, room, ref });
    localStorage.setItem("photo_vault", JSON.stringify(PHOTO_VAULT));
}

function vaultRender() {
    const div = document.getElementById("vault-core");
    div.innerHTML = "";
    PHOTO_VAULT.forEach(p => {
        div.innerHTML += `
        <div class='card'>
            <p><b>Room:</b> ${p.room}</p>
            <p><b>Ref:</b> ${p.ref}</p>
            <a href="${p.url}" target="_blank">
                <img src="${p.url}" style="width:130px;border-radius:6px;">
            </a>
        </div>`;
    });
}
