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

//Variables
let gameArray = []

//Código
let ctn1 = document.getElementById('conteiner1');
ctn1.addEventListener("click", function () {
        if (ctn1.firstChild == null) {
            createXorO(ctn1);
        }
    });

let ctn2 = document.getElementById("conteiner2");
ctn2.onclick = () => {
    if (ctn2.firstChild == null) {
            createXorO(ctn2);
        }
};

let ctn3 = document.getElementById("conteiner3");
ctn3.onclick = () => {
    if (ctn3.firstChild == null) {
            createXorO(ctn3);
        }
};

let ctn4 = document.getElementById("conteiner4");
ctn4.onclick = () => {
    if (ctn4.firstChild == null) {
            createXorO(ctn4);
        }
};

let ctn5 = document.getElementById("conteiner5");
ctn5.onclick = () => {
    if (ctn5.firstChild == null) {
            createXorO(ctn5);
        }
};

let ctn6 = document.getElementById("conteiner6");
ctn6.onclick = () => {
    if (ctn6.firstChild == null) {
            createXorO(ctn6);
        }
};

let ctn7 = document.getElementById("conteiner7");
ctn7.onclick = () => {
    if (ctn7.firstChild == null) {
            createXorO(ctn7);
        }
};

let ctn8 = document.getElementById("conteiner8");
ctn8.onclick = () => {
    if (ctn8.firstChild == null) {
            createXorO(ctn8);
        }
};

let ctn9 = document.getElementById("conteiner9");
ctn9.onclick = () => {
    if (ctn9.firstChild == null) {
            createXorO(ctn9);
        }
};