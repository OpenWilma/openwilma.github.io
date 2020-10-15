let langEn = document.getElementsByClassName("en");// get all elements in the "en" class
let langFi = document.getElementsByClassName("fi"); // get all elements in the "fi" class

// Set the language to English
function langToEn() {
    // loop through all the Finnish elements and hide them
    for (let i = 0; i < langFi.length; i++) {
        langFi[i].style.display = "none";
    }
    // loop through all the English elements and show them
    for (let i = 0; i < langEn.length; i++) {
        langEn[i].style.display = "block";
    }
}

// Set the language to Finnish
function langToFi() {
    // loop through all the English elements and hide them
    for (let i = 0; i < langEn.length; i++) {
        langEn[i].style.display = "none";
    }
    // loop through all the Finnish elements and show them
    for (let i = 0; i < langFi.length; i++) {
        langFi[i].style.display = "block";
    }
}