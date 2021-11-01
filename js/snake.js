const grid = document.querySelector(".grid");
const startBtn = document.querySelector("#start");
let gameScore = document.querySelector("#score");
//* storing created elements in an array
const syntheticElementsArray = [];
let currentSnake = [2,1,0];


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
    currentSnake.unshift(currentSnake[0]+1);
    syntheticElementsArray[currentSnake[0]].classList.add("snake");
};

moveSnake();
