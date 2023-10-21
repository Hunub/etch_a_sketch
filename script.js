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
        boardDivUnit.setAttribute('style', 'width: 100%; height: 100%; background: white; flex: 1;')
    }
}

const  boardUnits = document.querySelectorAll(".pixel");

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

const colorPicker = document.getElementById("color-picker");

let colorChoice;

function hex2rgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
    }
    // hex2rgb @ https://stackoverflow.com/a/14101452

colorPicker.addEventListener("input", function() {
    colorChoice = `rgb(${hex2rgb(`${this.value}`)})`;
    console.log(colorChoice);
    colorPen(colorChoice);
});

function pen(event,color){
    event.target.style.background= color;
};

function colorPen(color){
    for(let k=0; k<boardUnits.length; k++){
        boardUnits[k].addEventListener('mousedown', (e)=>{
            pen(e,color);
        });
        boardUnits[k].addEventListener('mouseover', (e)=>{
        if(mousePressed){
            pen(e,color);
        }
    });
    }
}


let alpha = 0;



function marker(element,color){
    let exColor = element.target.style.color;
    console.log(exColor);
    element.target.style.background= color;
};

function addAlpha(string){
    return string + "1.0";
};
