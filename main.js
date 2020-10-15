let langEn = document.getElementsByClassName("en");// get all elements in the "en" class
let langFi = document.getElementsByClassName("fi"); // get all elements in the "fi" class

console.log("skripti toimii");

// Make the English elements visible and hide the Finnish elements
function langToEn() {
    for (let i = 0; i < langEn.length; i++) {
        langEn[i].style.display = "block";
    }
    for (let i = 0; i < langFi.length; i++) {
        langFi[i].style.display = "none";
    }
    console.log("language is now set to English");
}

// Make the Finnish elements visible and hide the English elements
function langToFi() {
    for (let i = 0; i < langEn.length; i++) {
        langEn[i].style.display = "none";
    }
    for (let i = 0; i < langFi.length; i++) {
        langFi[i].style.display = "block";
    }
    console.log("language is now set to Finnish");
}