const lang = navigator.language; // Check the preferred language in the browser
console.log(lang);

const langEn = document.getElementsByClassName("en");// get all elements in the "en" class
const langFi = document.getElementsByClassName("fi"); // get all elements in the "fi" class
// future proofing const langSv = document.getElementsByClassName("sv"); //get all elements in the "sv" class
//future proofing const langRu = document.getElementsByClassName("ru"); //get all elements in the "ru" class



/* ENGLISH */

// function for hiding English elements
function hideEn() {
    // loop through all the English elements and hide them
    for (let i = 0; i < langEn.length; i++) {
        langEn[i].style.display = "none";
    }
}
// function for showing English elements
function showEn() {
    // loop through all the English elements and show them
    for (let i = 0; i < langEn.length; i++) {
        langEn[i].style.display = "block";
    }
}


/* FINNISH */

// function for hiding Finnish elements
function hideFi() {
    for (let i = 0; i < langFi.length; i++) {
        langFi[i].style.display = "none";
    }
}
// function for showing Finnish elements
function showFi() {
    // loop through all the Finnish elements and show them
    for (let i = 0; i < langFi.length; i++) {
        langFi[i].style.display = "block";
    }
}


/* SWEDISH */

// function for hiding Swedish elements
function hideSv() {
    // loop through all the Swedish elements and hide them
    for (let i = 0; i < langSv.length; i++) {
        langSv[i].style.display = "none";
    }
}
// function for showing Swedish elements
function showSv() {
    // loop through all the Swedish elements and show them
    for (let i = 0; i < langSv.length; i++) {
        langSv[i].style.display = "block";
    }
}


/* RUSSIAN */

// function for hiding all the Russian elements
function hideRu() {
    // loop through all the Russian elements and hide them
    for (let i = 0; i < langRu.length; i++) {
        langRu[i].style.display = "none";
    }
}
//function for showing all the Russian elements
function showRu() {
    // loop through all the Russian elements and show them
    for (let i = 0; i < langRu.length; i++) {
        langRu[i].style.display = "block";
    }
}



// Set the language to English
function langToEn() {
    hideFi();
    //hideSv();
    //hideRu();
    showEn();
}

// Set the language to Finnish
function langToFi() {
    hideEn();
    //hideSv();
    //hideRu();
    showFi();
}

/*
// Set the language to Swedish
function langToSv() {
    hideEn();
    hideFi();
    hideRu();
    showSv();
}
*/

/*
// Set the language to Russian
function langToRu() {
    hideEn();
    hideFi();
    hideSv();
    showRu();
}*/


// Automatically set page language according to preferred browser language
switch (lang) {
    case "en-US":
        langToEn();
        console.log("lang is set to US English");
        break;
    case "en-GB":
        langToEn();
        console.log("lang is set to UK English");
        break;
    case "fi":
        langToFi();
        console.log("lang is set to Finnish");
        break;
    case "sv":
        langToSv();
        console.log("lang is set to Swedish");
        break;
     case "sv-fi":
        langToSv();
        console.log("lang is set to Swedish");
        break;
     case "sv-se":
        langToSv();
        console.log("lang is set to Swedish");
        break;
     case "sv-FI":
        langToSv();
        console.log("lang is set to Swedish");
        break;
    case "sv-SV":
        langToSv();
        console.log("lang is set to Swedish");
        break;
    case "ru":
        langToRu();
        console.log("lang is set to Russian");
        break;
}