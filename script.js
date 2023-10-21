//drawing board creation
const mainDiv = document.querySelector("#main");

const boardDiv = document.createElement("div");
boardDiv.setAttribute('style', 'width: 640px; height: 640px; display: flex; flex-direction: column;');
mainDiv.appendChild(boardDiv);

let pixelNum = prompt("Enter a number");

for(let i = 1; i<=pixelNum; i++){
    const boardDivRow = document.createElement('div');
    boardDiv.appendChild(boardDivRow);
    boardDivRow.setAttribute('style','display: flex; flex: 1;');
    for(let j = 1; j<=pixelNum; j++){
        const boardDivUnit = document.createElement('div');
        boardDivRow.appendChild(boardDivUnit);
        boardDivUnit.setAttribute('class', 'pixel');
        boardDivUnit.setAttribute('style', 'width: 100%; height: 100%; background: rgba(255,255,255,0.1); flex: 1;')
    }
}

const  boardUnits = document.querySelectorAll(".pixel");

// add overall eventlistener for drawing;
let mousePressed = false;

document.addEventListener('mousedown', () => {
        mousePressed = true;
})
document.addEventListener('mouseup', () => {
        mousePressed = false;
})
document.addEventListener('mouseleave', () => {
        mousePressed = false;
})   


//create color picker function; 
//asign eventlisteners to all div units;
const colorPicker = document.getElementById("color-picker");

let colorChoice = 'rgb(0,0,0)';

function hex2rgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
    }
    // hex2rgb @ https://stackoverflow.com/a/14101452

colorPicker.addEventListener("input", function() {
    colorChoice = `rgb(${hex2rgb(`${this.value}`)})`;
    console.log(colorChoice);
//    choosePen(colorChoice);
});


//create alpha adding algorithm to add 0.1 alpha each time; 

function getAlpha(color){
    let value1 = color.slice(0,color.length-1).split('(');
    console.log(value1);
    let value = value1[1].split(', ');
    console.log(value);
    let length = value.length;
    console.log(length);
    if(length === 3){
      return 1.0;
    }
    if(length === 4){
      return value[3]*1;
    }
};

//create function of drawing pen;
function pen(event,color){
    event.target.style.background= color;
};


//create function of marker pen;

function marker(event,color){
    let exColor = event.target.style.backgroundColor;
    let alpha = Math.min(0.1 + getAlpha(exColor),1);
    event.target.style.background = `${color.slice(0,color.length-1)},${alpha})`;
    
};

//create named functions for event listeners for removal in future;
function penMD(e){
    pen(e,colorChoice);
};
function penMO(e){
    if(mousePressed){
        pen(e,colorChoice);
    };
};

function markerMD(e){
    marker(e,colorChoice);
};
function markerMO(e){
    if(mousePressed){
        marker(e,colorChoice);
    };
};

//create choosing tool buttons
function choosePen(){
    for(let k=0; k<boardUnits.length; k++){
        boardUnits[k].addEventListener('mousedown', penMD);
        boardUnits[k].addEventListener('mouseover', penMO);
    }
}

function chooseMarker(){
    for(let k=0; k<boardUnits.length; k++){
        boardUnits[k].removeEventListener('mousedown', penMD);
        boardUnits[k].removeEventListener('mouseover', penMO);
        boardUnits[k].addEventListener('mousedown', markerMD);
        boardUnits[k].addEventListener('mouseover', markerMO);
    }
}


const penBtn = document.querySelector('#pen');
penBtn.addEventListener('click',()=>{
    choosePen(colorChoice)});
const markerBtn = document.querySelector('#marker');
markerBtn.addEventListener('click',()=>{
    chooseMarker(colorChoice)});
