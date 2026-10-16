console.log("script.js connected successfully");

// ---------- Session 1 ----------
let availablemats = 20;

const available = document.getElementById("availablemats");
const bookbtn = document.getElementById("bookbtn");
const message = document.getElementById("message");

bookbtn.addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value;

    if (name === "" || email === "" || age === "") {
        message.textContent = "Please fill in name, email and age";
        return;
    }

    if (availablemats > 0) {
        availablemats--;
        available.textContent = availablemats;

        const bookingcode = "GYM" + Math.floor(1000 + Math.random() * 9000);
        message.textContent = "BOOKING SUCCESSFUL! YOUR BOOKING CODE IS " + bookingcode;
    } else {
        message.textContent = "SORRY NO MATS AVAILABLE";
    }
});

let availablemats2 = 20;

const available2 = document.getElementById("availablemats2");
const bookbtn2 = document.getElementById("bookbtn2");
const message2 = document.getElementById("message2");

bookbtn2.addEventListener("click", function () {
    const name = document.getElementById("name2").value.trim();
    const email = document.getElementById("email2").value.trim();
    const age = document.getElementById("age2").value;

    if (name === "" || email === "" || age === "") {
        message2.textContent = "Please fill in name, email and age";
        return;
    }

    if (availablemats2 > 0) {
        availablemats2--;
        available2.textContent = availablemats2;

        const bookingcode = "GYM" + Math.floor(1000 + Math.random() * 9000);
        message2.textContent = "BOOKING SUCCESSFUL! YOUR BOOKING CODE IS " + bookingcode;
    } else {
        message2.textContent = "SORRY NO MATS AVAILABLE";
    }
});


let availablemats3 = 20;

const available3 = document.getElementById("availablemats3");
const bookbtn3 = document.getElementById("bookbtn3");
const message3 = document.getElementById("message3");

bookbtn3.addEventListener("click", function () {
    const name = document.getElementById("name3").value.trim();
    const email = document.getElementById("email3").value.trim();
    const age = document.getElementById("age3").value;

    if (name === "" || email === "" || age === "") {
        message3.textContent = "Please fill in name, email and age";
        return;
    }

    if (availablemats3 > 0) {
        availablemats3--;
        available3.textContent = availablemats3;

        const bookingcode = "GYM" + Math.floor(1000 + Math.random() * 9000);
        message3.textContent = "BOOKING SUCCESSFUL! YOUR BOOKING CODE IS " + bookingcode;
    } else {
        message3.textContent = "SORRY NO MATS AVAILABLE";
    }
});

// ---------- Session 4 ----------
let availablemats4 = 20;

const available4 = document.getElementById("availablemats4");
const bookbtn4 = document.getElementById("bookbtn4");
const message4 = document.getElementById("message4");

bookbtn4.addEventListener("click", function () {
    const name = document.getElementById("name4").value.trim();
    const email = document.getElementById("email4").value.trim();
    const age = document.getElementById("age4").value;

    if (name === "" || email === "" || age === "") {
        message4.textContent = "Please fill in name, email and age";
        return;
    }

    if (availablemats4 > 0) {
        availablemats4--;
        available4.textContent = availablemats4;

        const bookingcode = "GYM" + Math.floor(1000 + Math.random() * 9000);
        message4.textContent = "BOOKING SUCCESSFUL! YOUR BOOKING CODE IS " + bookingcode;
    } else {
        message4.textContent = "SORRY NO MATS AVAILABLE";
    }
});