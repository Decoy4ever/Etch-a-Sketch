const divMain = document.querySelector(".main-container");
const divSlider = document.querySelector(".slider-container");

// style the container
divMain.style.height = "500px";
divMain.style.width = "500px";
const height = divMain.style.height;
const width = divMain.style.width;

// 1. Create a Grid
function createGrid(num){

    // use for nested loop to print x number of div
    for(let row = 0; row < num; row ++){
        for(let col = 0; col < num; col ++){

            // create a div
            const divItem = document.createElement("div");

            // create att associated with the div
            const itemAtt = document.createAttribute("class");

            // set the attributes
            itemAtt.value = "main-item";
            divItem.setAttributeNode(itemAtt);

            // add event listener to change color of div
            divItem.addEventListener("mouseover",changeColor);

            // style the div
            divItem.style.height = `calc(${height}/${num})`;
            divItem.style.width = `calc(${width}/${num})`;

            // append an item-div to the main
            divMain.appendChild(divItem);
        }
    }
}

// 2. Change the color of the individual divs
function changeColor(){
    this.style.backgroundColor = "black";
}

// 3. create a button that will send a user pop up and ask for the number of squares
function buttonSettings(){
    // create a gridBtn tag
    const gridBtn = document.createElement("button");
    const resetBtn = document.createElement("button");


    const classButton = document.createAttribute("class");
    const buttonText = document.createTextNode("Enter Grid Size");

    const resetBtnClass = document.createAttribute("class");
    const resetBtnText = document.createTextNode("Reset");

    classButton.value = "button";
    gridBtn.setAttributeNode(classButton);
    gridBtn.appendChild(buttonText);

    resetBtnClass.value = "reset-btn";
    resetBtn.setAttributeNode(resetBtnClass);
    resetBtn.appendChild(resetBtnText);

    // add event listener to the gridBtn
    gridBtn.addEventListener("click",inputGridSize);
    resetBtn.addEventListener("click",resetGrid);

    // style the gridBtn
    gridBtn.style.margin = "5px";

    // append gridBtn the div container
    divSlider.appendChild(gridBtn);
    divSlider.appendChild(resetBtn);
}

function inputGridSize(num){

   num = prompt("Enter a Grid Size between 2 - 100: ");

   if(num > 100)
   {
       createGrid(100);
   }

    resetGrid();

    // call the createGrid function
    createGrid(num);
}

// create a rest button that resets the grid to its original grid
// create a function called reset
// change the color back to white
function resetGrid(){
    // while user enters input
    while(divMain.hasChildNodes()){
        // delete the existing nodes
        divMain.removeChild(divMain.firstChild);

        // change color to white
        divMain.style.backgroundColor = "white";
    }
}

// create a color button changes the color of the div into different colors

buttonSettings();





