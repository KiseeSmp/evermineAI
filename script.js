const chat = document.getElementById("chat");
const input = document.getElementById("pesan");
const tombol = document.getElementById("kirim");
const model = document.getElementById("model");

tombol.addEventListener("click", kirimPesan);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        kirimPesan();
    }
});

function kirimPesan() {

    const pesan = input.value.trim();

    if (pesan === "") return;

    // Pesan pengguna
    chat.innerHTML += `
        <div style="text-align:right; margin:15px 0;">
            <div style="
                display:inline-block;
                background:#10a37f;
                padding:12px 16px;
                border-radius:12px;
                max-width:80%;
            ">
                ${pesan}
            </div>
        </div>
    `;

    input.value = "";

    // Balasan sementara
    setTimeout(() => {

        chat.innerHTML += `
            <div class="ai">
                <b>${model.value}</b><br><br>
                Saya belum terhubung ke API.<br>
                Kamu memilih model <b>${model.value}</b>.
            </div>
        `;

        chat.scrollTop = chat.scrollHeight;

    }, 600);

}
