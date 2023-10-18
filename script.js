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

function penBlue(node){
    node.style.background="blue";
}


let colorChoice = prompt("color:");

function colorPen(color){
    for(let k=0; k<boardUnits.length; k++){
        boardUnits[k].addEventListener('click', function(e){
            e.target.style.background= color;
        });
        boardUnits[k].addEventListener('mouseover', (e)=>{
        if(mousePressed){
            e.target.style.background= color;
        }
    });
    }
}

colorPen(colorChoice);
