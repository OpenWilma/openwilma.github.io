const browserLang = navigator.language; // Check the preferred language in the browser
if (browserLang.includes('-')) browserLang = browserLang.split('-')[0];   
let languages = { //List of supported browser languages and the corresponding in-page language setting name, first part of the navigator.language string
    "en": "en",
    "fi": "fi",
    "ru": "ru"
    //Future proofing
    //"sv": "sv",
}
let selectedLang = null //Variable for the currently shown language name
let cachedStates = {}
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
function setLang(lang){ //Function to set the page language
    if(selectedLang != null){
        let elementsToHide = document.getElementsByClassName(selectedLang)
        for(let i = 0; i < elementsToHide.length; i++){
            if(elementsToHide[i].dataset.uuid == undefined){
                let id = uuidv4()
                cachedStates[selectedLang].push({id: id, state: (elementsToHide[i].style.display != "" ? elementsToHide[i].style.display : "block")})
                elementsToHide[i].dataset.uuid = id
            }
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
            for(let i2 = 0; i2 < elementsToHide2.length; i2++){
                if(elementsToHide2[i2].dataset.uuid == undefined){
                    let id = uuidv4()
                    cachedStates[toHide[i]].push({id: id, state: (elementsToHide2[i2].style.display != "" ? elementsToHide2[i2].style.display : "block")})
                    elementsToHide2[i2].dataset.uuid = id
                }
                elementsToHide2[i2].style.display = "none"
            }
        }
    }
    let elementsToShow = document.getElementsByClassName(lang)
    for(let i = 0; i < elementsToShow.length; i++){
        if(elementsToShow[i].dataset.uuid != undefined){
            let state = null
            for(let a = 0; a < cachedStates[lang].length; a++){
                if(cachedStates[lang][i].id == elementsToShow[i].dataset.uuid){
                    state = cachedStates[lang][i].state
                    break
                }
            }
            if(state != null){
                //Valid state
                elementsToShow[i].style.display = state
            }
        }else {
            elementsToShow[i].style.display = "block" //Default
        }
    }
    selectedLang = lang
}
//Setup the cache
let ar = Object.keys(languages)
for(let i = 0; i < ar.length; i++){
    if(cachedStates[languages[ar[i]]] == undefined) cachedStates[languages[ar[i]]] = [] //Create an array for each language
}
//Automatically set the page language based on browser language
if(languages[browserLang] != undefined){
    setLang(languages[browserLang])
}else { 
    setLang("en") //Default language
}
//-
