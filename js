// ===========================
// evermineAI V5 Flash Pro
// app.js
// ===========================

const chat = document.getElementById("chat");
const input = document.getElementById("pesan");
const kirim = document.getElementById("kirim");
const model = document.getElementById("model");
const newChat = document.querySelector(".new-chat");

// Event
kirim.addEventListener("click", kirimPesan);

input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        kirimPesan();
    }
});

newChat.addEventListener("click", chatBaru);

// Chat Baru
function chatBaru(){

    chat.innerHTML = `
    <div class="message ai">
        <div class="bubble">
            👋 Halo! Mulai percakapan baru.
        </div>
    </div>
    `;

}

// Kirim Pesan
async function kirimPesan(){

    const teks = input.value.trim();

    if(teks === "") return;

    tambahPesan(teks,"user");

    input.value = "";

    const jawaban = await kirimKeAI(teks);

    tambahPesan(jawaban,"ai");

}
// ===========================
// CHAT
// ===========================

function tambahPesan(teks, tipe){

    chat.innerHTML += `
    <div class="message ${tipe}">
        <div class="bubble">
            ${teks}
        </div>
    </div>
    `;

    chat.scrollTop = chat.scrollHeight;

}
// ===========================
// MODEL
// ===========================

function namaModel(){

    return model.value;

}
// ===========================
// API
// ===========================

async function kirimKeAI(pesan){

    return `
    🤖 <b>${namaModel()}</b>

    <br><br>

    Kamu mengirim:

    <br>

    <b>${pesan}</b>

    <br><br>

    API belum dihubungkan.
    `;

}
// ===========================
// STORAGE
// ===========================

function simpan(){

}

function load(){

}
