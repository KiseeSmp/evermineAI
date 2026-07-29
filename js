// ======================================
// evermineAI V5 Flash Pro
// app.js
// ======================================

const chat = document.getElementById("chat");
const input = document.getElementById("pesan");
const kirim = document.getElementById("kirim");
const model = document.getElementById("model");
const newChat = document.querySelector(".new-chat");

// ===============================
// Tombol Kirim
// ===============================

kirim.addEventListener("click", kirimPesan);

// ===============================
// Enter
// ===============================

input.addEventListener("keydown", function(e){

    if(e.key === "Enter"){
        kirimPesan();
    }

});

// ===============================
// Chat Baru
// ===============================

newChat.addEventListener("click", function(){

    chat.innerHTML = `

        <div class="message ai">

            <div class="bubble">

                <h2>👋 Chat Baru</h2>

                <br>

                Halo!

                <br><br>

                Saya siap membantu Anda.

                <br><br>

                Silakan mulai percakapan baru.

            </div>

        </div>

    `;

});

// ===============================
// Kirim Pesan
// ===============================

function kirimPesan(){

    let teks = input.value.trim();

    if(teks==="") return;

    tambahPesanUser(teks);

    input.value="";

    input.focus();

    setTimeout(function(){

        balasAI(teks);

    },800);

}

// ===============================
// Bubble User
// ===============================

function tambahPesanUser(teks){

    chat.innerHTML += `

        <div class="message user">

            <div class="bubble">

                ${teks}

            </div>

        </div>

    `;

    scrollBawah();

}

// ===============================
// Bubble AI
// ===============================

function tambahPesanAI(teks){

    chat.innerHTML += `

        <div class="message ai">

            <div class="bubble">

                ${teks}

            </div>

        </div>

    `;

    scrollBawah();

}

// ===============================
// Scroll
// ===============================

function scrollBawah(){

    chat.scrollTop = chat.scrollHeight;

}

// ===============================
// AI Demo
// ===============================

function balasAI(prompt){

    const namaModel = model.value;

    let jawaban = "";

    const p = prompt.toLowerCase();

    if(p.includes("halo")){

        jawaban = `
        👋 Halo!

        Saya <b>${namaModel}</b>.

        Senang bertemu dengan Anda.
        `;

    }

    else if(p.includes("siapa kamu")){

        jawaban = `
        🤖 Saya adalah
        <b>evermineAI V5 Flash Pro</b>.

        Saat ini saya masih berjalan dalam mode demo.
        `;

    }

    else if(p.includes("terima kasih")){

        jawaban = `
        😊 Sama-sama.

        Senang bisa membantu.
        `;

    }

    else{

        jawaban = `
        🤖 <b>${namaModel}</b>

        <br><br>

        Saya menerima pesan:

        <br><br>

        <b>"${prompt}"</b>

        <br><br>

        Saat ini aplikasi masih menggunakan mode demo.

        <br><br>

        Nanti kita akan menghubungkannya ke:

        <br>

        ✅ Gemini API

        <br>

        ✅ OpenAI API

        <br>

        ✅ Claude API

        <br>

        ✅ DeepSeek API

        <br>

        sehingga AI bisa benar-benar menjawab.
        `;

    }

    tambahPesanAI(jawaban);

}
