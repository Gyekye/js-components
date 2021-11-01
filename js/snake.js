const grid = document.querySelector(".grid");
const startBtn = document.querySelector("#start");
let gameScore = document.querySelector("#score");
//* storing created elements in an array
const syntheticElementsArray = [];
let currentSnake = [2,1,0];
let direction = 1;
let width = 10;


function createGrid(){

    //* createing elements with the .createElement method
    for(let i =0; i<100; i++){
        let syntheticDiv = document.createElement("div");
        //* adds styling to the div
        syntheticDiv.classList.add("square");
        grid.appendChild(syntheticDiv);
        //* adds created dic to array[]
        syntheticElementsArray.push(syntheticDiv);

    }
};

createGrid();
//* Creating the snake
currentSnake.forEach(index => syntheticElementsArray[index].classList.add("snake"));


function moveSnake(){
    let snakeTail = currentSnake.pop();
    syntheticElementsArray[snakeTail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0]+direction);
    syntheticElementsArray[currentSnake[0]].classList.add("snake");
};

moveSnake();
let timerId = setInterval(moveSnake, 1000)


// 39 is right arrow
// 38 is for the up arrow
// 37 is for the left arrow
// 40 is for the down arrow

function control(e) {
    if (e.keyCode === 39) {
        console.log('right pressed')
        direction = 1
    } else if (e.keyCode === 38) {
        console.log('up pressed')
        direction = -width
    } else if (e.keyCode === 37) {
        console.log('left pressed')
        direction = -1
    } else if (e.keyCode === 40) {
        console.log('down pressed')
        direction = +width
    }
}
document.addEventListener('keyup', control)