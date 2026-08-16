// ===============================
// ZPHS BEERAMGUDA WEBSITE
// JavaScript
// ===============================


// Show message when website loads
window.addEventListener("load", function () {

    console.log("Welcome to ZPHS Beeramguda Website");

});


// ===============================
// NAVIGATION
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Opening: " + link.textContent);

    });

});


// ===============================
// CURRENT YEAR
// ===============================

const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML = `
    <h3>ZPHS Beeramguda</h3>
    <p>Education • Technology • Innovation • Excellence</p>
    <p>© ${year} ZPHS Beeramguda. All Rights Reserved.</p>
`;