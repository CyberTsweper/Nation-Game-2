// Nation Game V2

// Nation Game Specs

const NationGameVersion = "2.0";

// Divisions
const DIV_Landing = document.getElementById("Landing");

// Text
const LandingTitle = document.getElementById("Landing_Title");

// On Ready

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM CONTENT LOADED!! :O");

    // Init

    LandingTitle.innerText = "Nation Game " + NationGameVersion;
});