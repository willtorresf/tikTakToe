//Funciones
function XorO () {
    let xArray = gameArray.filter((item) => item === 1);

    let oArray = gameArray.filter((item) => item === 0);

    if (xArray.length == oArray.length) {
        return gameArray.push(1);
    } else if (xArray.length > oArray.length) {
        return gameArray.push(0);
    } else {
        return gameArray.push(1);
    }
}

function createXorO (ctn) {
    XorO()
    let last = gameArray[gameArray.length - 1];
    let classShow = ''
    
    if (last === 1) {
        classShow = 'xPart'
    } else {
        classShow = 'oPart'
    }

    const create = document.createElement("div");
    create.className = classShow
    ctn.appendChild(create);
}

let gameArray = []

console.log(gameArray);

let ctn1 = document.getElementById('conteiner1')

console.log(ctn1)

ctn1.addEventListener("click", createXorO(ctn1))

let ctn2 = document.getElementById("conteiner2");

ctn2.addEventListener("click", createXorO(ctn2));

let ctn3 = document.getElementById("conteiner3");

ctn3.addEventListener("click", createXorO(ctn3));

let ctn4 = document.getElementById("conteiner4");

ctn4.addEventListener("click", createXorO(ctn4));

let ctn5 = document.getElementById("conteiner5");

ctn5.addEventListener("click", createXorO(ctn5));

let ctn6 = document.getElementById("conteiner6");

ctn6.addEventListener("click", createXorO(ctn6));

let ctn7 = document.getElementById("conteiner7");

ctn7.addEventListener("click", createXorO(ctn7));

let ctn8 = document.getElementById("conteiner8");

ctn8.addEventListener("click", createXorO(ctn8));

let ctn9 = document.getElementById("conteiner9");

ctn9.addEventListener("click", createXorO(ctn9));

