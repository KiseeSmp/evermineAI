const chat = document.getElementById("chat");
const input = document.getElementById("pesan");
const tombol = document.getElementById("kirim");

tombol.addEventListener("click", kirimPesan);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        kirimPesan();
    }
});

function kirimPesan(){

    let teks = input.value.trim();

    if(teks === ""){
        return;
    }

    // Pesan pengguna
    chat.innerHTML += `
        <div style="text-align:right;margin:15px 0;">
            <div style="
                display:inline-block;
                background:#10a37f;
                padding:12px;
                border-radius:12px;
                max-width:80%;
            ">
                ${teks}
            </div>
        </div>
    `;

    input.value = "";

    // Balasan AI sementara
    setTimeout(function(){

        chat.innerHTML += `
            <div class="ai">
                Maaf, saya belum terhubung ke AI. Ini masih tahap pengembangan 😊
            </div>
        `;

        chat.scrollTop = chat.scrollHeight;

    },800);

    chat.scrollTop = chat.scrollHeight;

}
