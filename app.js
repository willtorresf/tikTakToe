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

function createXorO (ctn,position) {
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

    testArray[position] = classShow
}

function createBtn () {
    
    setTimeout(function(){
        let newGame = confirm("Terminó el juego, quieren juegar nuevamente?")
        if (newGame){
            window.location.reload();
        }
    },500) 
}

function checkWin() {
    if ((testArray[0] == testArray[1]) && (testArray[0] == testArray[2])){
        ctn1.className = "winLine1";
        ctn2.className = "winLine1";
        ctn3.className = "winLine1";
        createBtn();
    } else if ((testArray[3] == testArray[4]) && (testArray[3] == testArray[5])){
        ctn4.className = "winLine1";
        ctn5.className = "winLine1";
        ctn6.className = "winLine1";
        createBtn(); 
    } else if ((testArray[6] == testArray[7]) && (testArray[6] == testArray[8])){
        ctn7.className = "winLine1";
        ctn8.className = "winLine1";
        ctn9.className = "winLine1";
        createBtn();
    } else if ((testArray[0] == testArray[3]) && (testArray[0] == testArray[6])) {
        ctn1.className = "winLine2";
        ctn4.className = "winLine2";
        ctn7.className = "winLine2";
        createBtn();
    } else if ((testArray[1] == testArray[4]) && (testArray[1] == testArray[7])){
        ctn2.className = "winLine2";
        ctn5.className = "winLine2";
        ctn8.className = "winLine2";
        createBtn(); 
    } else if ((testArray[2] == testArray[5]) && (testArray[2] == testArray[8])){
        ctn3.className = "winLine2";
        ctn6.className = "winLine2";
        ctn9.className = "winLine2";
        createBtn();
    } else if ((testArray[0] == testArray[4]) && (testArray[0] == testArray[8])){
        ctn1.className = "winLine4";
        ctn5.className = "winLine4";
        ctn9.className = "winLine4";
        createBtn();
    } else if ((testArray[2] == testArray[4]) && (testArray[2] == testArray[6])){
        ctn3.className = "winLine3";
        ctn5.className = "winLine3";
        ctn7.className = "winLine3";
        createBtn();
    }
}

//Variables
let gameArray = []
let testArray = ["a","b","c","d","e","f","g","h","i","j"]
let ctn1 = document.getElementById('conteiner1');
let ctn2 = document.getElementById("conteiner2");
let ctn3 = document.getElementById("conteiner3");
let ctn4 = document.getElementById("conteiner4");
let ctn5 = document.getElementById("conteiner5");
let ctn6 = document.getElementById("conteiner6");
let ctn7 = document.getElementById("conteiner7");
let ctn8 = document.getElementById("conteiner8");
let ctn9 = document.getElementById("conteiner9");

//eventos
ctn1.addEventListener("click", function () {
        if (ctn1.firstChild == null) {
            createXorO(ctn1,0);
            checkWin()
            console.log(main)
        }
    });

ctn2.onclick = () => {
    if (ctn2.firstChild == null) {
            createXorO(ctn2,1);
            checkWin()
        }
};

ctn3.onclick = () => {
    if (ctn3.firstChild == null) {
            createXorO(ctn3,2);
            checkWin()
        }
};

ctn4.onclick = () => {
    if (ctn4.firstChild == null) {
            createXorO(ctn4,3);
            checkWin()
        }
};

ctn5.onclick = () => {
    if (ctn5.firstChild == null) {
            createXorO(ctn5,4);
            let XorOctn5 = ctn5.firstChild;
            XorOctn5.id = "ctn5";
            checkWin()
        }
};

ctn6.onclick = () => {
    if (ctn6.firstChild == null) {
            createXorO(ctn6,5);
            checkWin();
        }
};

ctn7.onclick = () => {
    if (ctn7.firstChild == null) {
            createXorO(ctn7,6);
            checkWin();
        }
};

ctn8.onclick = () => {
    if (ctn8.firstChild == null) {
            createXorO(ctn8,7);
            checkWin();
        }
};

ctn9.onclick = () => {
    if (ctn9.firstChild == null) {
            createXorO(ctn9,8);
            checkWin();
        }
};