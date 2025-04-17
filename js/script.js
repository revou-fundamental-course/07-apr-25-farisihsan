function validateForm() {
    const nama = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birthday"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
    const now = new Date();
    const timeString = now.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });


    if (nama == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

   setSenderUI(timeString, nama, birthDate, gender, messages);

   document.querySelector('.form-result-container').style.display = 'block';
   document.querySelector('.welcome-text').style.display = 'block';
    // const elements = document.querySelectorAll('.form-result-container, .welcome-text');

    // elements.forEach(function(el) {
    //     el.style.display = 'block';
    // });


   return false;
}

function setSenderUI(timeString, nama, birthDate, gender, messages) {
    document.getElementById("time").innerHTML = timeString;
    document.getElementById("welcome-name").innerHTML = nama;
    document.getElementById("sender-full-name").innerHTML = nama;
    document.getElementById("sender-birthday").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("show");
}