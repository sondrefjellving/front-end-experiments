const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pwContainer1 = document.getElementById("pw-el1")
let pwContainer2 = document.getElementById("pw-el2")
let password1;
let password2;


function resetPasswords() {
    password1 = ""
    password2 = ""
}

function printPasswords() {
    resetPasswords()
    let pwLength = document.getElementById("pw-length").value;
    if (checkPWLength(pwLength)) {
        generatePasswords(pwLength)
        document.getElementById("pw-length").style.border = "1px solid #273549"
    } else {
        document.getElementById("pw-length").style.border = "1px solid #E11D48"
    }

    pwContainer1.textContent = password1
    pwContainer2.textContent = password2
}

function generatePasswords(passwordLength) {
    for (let i = 0; i < passwordLength; i++) {
        password1 += getRandomCharacter()
        password2 += getRandomCharacter()
    }
}

function getRandomCharacter() {
    return characters[getRandomNumber()]
}

function getRandomNumber() {
    return Math.floor( Math.random()*characters.length )
}

function checkPWLength(pwLength) { // returns true if length is good
    return (pwLength > 1 && pwLength <= 30)
}