const browserLang = navigator.language; // Check the preferred language in the browser
let languages = { //List of supported browser languages and the corresponding in-page language setting name
    "en-US": "en",
    "en-GB": "en",
    "en": "en",
    "en-us": "en",
    "en-gb": "en",
    "fi": "fi",
    //Future proofing
    //"sv": "sv",
    //"sv-fi": "sv",
    //"sv-se": "sv",
    //"sv-sv": "sv",
    //"sv-FI": "sv",
    //"sv-SE": "sv",
    //"sv-SV": "sv",
    //"ru": "ru"
}
let selectedLang = null //Variable for the currently shown language name
function setLanguage(lang){ //Function to set the page language
    if(selectedLang != null){
        let elementsToHide = document.getElementsByClassName(selectedLang)
        for(let i = 0; i < elements.length; i++){
            elementsToHide[i].style.display = "hidden"
        }
    }
    let elementsToShow = document.getElementsByClassName(lang)
    for(let i = 0; i < elements.length; i++){
        elementsToShow[i].style.display = "visible"
    }
    selectedLang = lang
}
//Automatically set the page language based on browser language
if(languages[browserLang] != undefined){
    selectedLang(languages[browserLang])
}else { 
    selectedLang("en") //Default language
}
