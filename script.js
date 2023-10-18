const mainDiv = document.querySelector("#main");

const boardDiv = document.createElement("div");
boardDiv.setAttribute('style', 'width: 640px; height: 640px; background: red;');


// let pixelNum = prompt("Enter a number");

mainDiv.appendChild(boardDiv);

let mousePressed = false;


document.addEventListener('mousedown', () => {
        mousePressed = true;
        // console.log(mousePressed);
})
document.addEventListener('mouseup', () => {
        mousePressed = false;
        // console.log(mousePressed);
})
document.addEventListener('mouseleave', () => {
        mousePressed = false;
        // console.log(mousePressed);
})   


function penBlk(){
   
    if(mousePressed){
        boardDiv.style.background="blue";
    }
}


boardDiv.addEventListener('click', ()=>{
    boardDiv.style.background="blue";
});
boardDiv.addEventListener('mouseover', penBlk);

