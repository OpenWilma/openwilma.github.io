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
function setLang(lang){ //Function to set the page language
    if(selectedLang != null){
        let elementsToHide = document.getElementsByClassName(selectedLang)
        for(let i = 0; i < elementsToHide.length; i++){
            elementsToHide[i].style.display = "none"
        }
    }else {
        let ar = Object.keys(languages)
        let toHide = []
        for(let i = 0; i < ar.length; i++){
            if(languages[ar[i]] != lang){
                toHide.push(languages[ar[i]])
            }
        }
        for(let i = 0; i < toHide.length; i++){
            let elementsToHide2 = document.getElementsByClassName(toHide[i])
            for(let i = 0; i < elementsToHide2.length; i++){
                elementsToHide2[i].style.display = "none"
            }
        }
    }
    let elementsToShow = document.getElementsByClassName(lang)
    for(let i = 0; i < elementsToShow.length; i++){
        elementsToShow[i].style.display = "visible"
    }
    selectedLang = lang
}
//Automatically set the page language based on browser language
if(languages[browserLang] != undefined){
    setLang(languages[browserLang])
}else { 
    setLang("en") //Default language
}
