const divMain = document.querySelector(".main-container");

// style the container
divMain.style.height = "500px";
divMain.style.width = "500px";
const height = divMain.style.height;
const width = divMain.style.width;

// 1. Create a Grid
function printGrid(num){

    // use for loop to print x number of div
    for(let row = 0; row < num; row ++){
        for(let col = 0; col<num; col ++){

            // create a div 
            const divItem = document.createElement("div");

            // create att assoicated with the div
            const itemAtt = document.createAttribute("class");

            // set the attributes
            itemAtt.value = "main-item";
            divItem.setAttributeNode(itemAtt);

            // add event listener
            divItem.addEventListener("mouseover",changeColor);

            // style the div
            divItem.style.height = `calc(${height}/${num})`;
            divItem.style.width = `calc(${width}/${num})`;
   
            // append a itemdiv to the main
            divMain.appendChild(divItem);
        }
    }
}

// 3. create a buttons to change the color of the indivdual divs in the grid
function changeColor(){
    this.style.backgroundColor = "black";
}

printGrid(16);
// rangeSlider();





