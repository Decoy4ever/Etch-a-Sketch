const divMain = document.querySelector(".main-container");
const divSlider = document.querySelector(".slider-container");
// gridCreated var used to keep track grid is created or not
let gridCreated = false;

let rainbowBtnPressed = false;

// style the container
divMain.style.height = "500px";
divMain.style.width = "500px";
const height = divMain.style.height;
const width = divMain.style.width;

// 1. Create a Grid
function createGrid(num){

    rainbowBtnPressed = false;
    divMain.style.backgroundColor = "white";

    // use for nested loop to print x number of div
    for(let row = 0; row < num; row ++){
        for(let col = 0; col < num; col ++){

            // create a div
            const divItem = document.createElement("div");

            // create att associated with the nested iv
            const itemAtt = document.createAttribute("class");

            // set the attributes
            itemAtt.value = "main-item";
            divItem.setAttributeNode(itemAtt);

            // Check if the rainbow button has been pressed
            if (rainbowBtnPressed) {
                // Set the default color to black
                divItem.style.backgroundColor = "black";
            }

            // add event listener to change color of div
            divItem.addEventListener("mouseover",defaultColor);
            divItem.addEventListener("mouseover",changeColor);

            // style the div
            divItem.style.height = `calc(${height}/${num})`;
            divItem.style.width = `calc(${width}/${num})`;


            divMain.appendChild(divItem);

            // set createdGrid to true once the grid is created
            gridCreated = true;
        }
    }
}

// 2. Change the color of the individual divs
function defaultColor(){
    this.style.backgroundColor = "black";
}

function changeColor() {
    if (rainbowBtnPressed) {
        const divItems = document.querySelectorAll(".main-item");

        divItems.forEach((divItem) => {
            // Check if the background color is black, then change to rainbow color
            if (divItem.style.backgroundColor === "black") {
                divItem.style.backgroundColor = getRandomColor();
            }
        });
    }
}

function randomNum(maxNum){
    return Math.floor(Math.random()*maxNum);
}

function getRandomColor(){
    const hue = randomNum(360);
    const saturation = randomNum(100);
    const lightness = randomNum(100);

    return `hsl(${hue}deg, ${saturation}%, ${lightness}%)`;
}

// 3. create a button that will send a user pop up and ask for the number of squares
function buttonSettings(){
    // create a gridBtn tag
    const gridBtn = document.createElement("button");
    const resetBtn = document.createElement("button");

    // grid button
    const gridBtnClass = document.createAttribute("class");
    const buttonText = document.createTextNode("Enter Grid Size");

    // reset button
    const resetBtnClass = document.createAttribute("class");
    const resetBtnText = document.createTextNode("Reset");

    gridBtnClass.value = "button";
    gridBtn.setAttributeNode(gridBtnClass);
    gridBtn.appendChild(buttonText);

    resetBtnClass.value = "reset-btn";
    resetBtn.setAttributeNode(resetBtnClass);
    resetBtn.appendChild(resetBtnText);

    // add event listener to the gridBtn
    gridBtn.addEventListener("click",inputGridSize);
    resetBtn.addEventListener("click",resetGrid);

    // style the gridBtn
    gridBtn.style.margin = "5px";
    resetBtn.style.margin = "5px";

    // append gridBtn the div container
    divSlider.appendChild(gridBtn);
    divSlider.appendChild(resetBtn);
    colorBtn();
}

function colorBtn(){
    const colorBtn = document.createElement("button");

    // change color button
    const colorBtnClass = document.createAttribute("class");
    const colorBtnText = document.createTextNode("Rainbow");

    colorBtnClass.value = "Rainbow";
    colorBtn.setAttributeNode(colorBtnClass);
    colorBtn.appendChild(colorBtnText);

    colorBtn.addEventListener("click",function(){
        // set the flag to true when rainbow button is pressed
       rainbowBtnPressed = true;
       changeColor();
    });

    colorBtn.style.margin = "5px";
    divSlider.appendChild(colorBtn);
}

function inputGridSize(num){
    // Always reset grid when button is clicked
    resetGrid();

    num = prompt("Enter a Grid Size between 2 - 100: ");
    if(num > 100)
    {
        alert("Creating Max: 100 x 100 Grid")
        createGrid(100);
    }
    else if(num < 2)
    {
        alert("Creating a Min: 2 x 2 Grid");
        createGrid(2);
    }
    else
    {
        createGrid(num);
    }
}

function resetGrid(){
    // reset grid only if it has been created
    if(gridCreated){
        while(divMain.hasChildNodes()){
            // delete all child nodes
            divMain.removeChild(divMain.firstChild);
        }
        divMain.style.backgroundColor = "white";

        // reset gridCreated to false
        gridCreated = false;
    }
}

buttonSettings();





