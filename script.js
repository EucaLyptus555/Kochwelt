async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

function calc() {

    let a = +document.getElementById('personen').value;
    let Menge = getArray('Menge');
    for (i = 0; i < 12; i++) {
        
            Menge[i] = a * Menge[i];
            if (Menge[i] == 0){
                Menge[i]='';
            }
    }
    

    

    for (i=0;i<Menge.length;i++) {
        document.getElementById(i).innerHTML = Menge[i];
    }
        

    
}

function setArray(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function getArray(key) {
    return JSON.parse(localStorage.getItem(key));
}

function buildArray (){
    let Menge = new Array();
    for (i = 0; i < 12; i++) {
        Menge[i]=document.getElementById(i).innerHTML;
    }
    setArray('Menge', Menge);
}