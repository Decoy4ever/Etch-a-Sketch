// 1. create range slider
// function rangeSlider(){
//
//     const slider = document.querySelector(".slider");
//     const output = document.querySelector(".slide-text");
//     output.innerText = slider.value;
//
//     slider.oninput = function() {
//         output.innerText = this.value;
//       }
// }

// 2. create a grid
function printGrid(num){
    const divMain = document.querySelector(".main-container");

    for(let row = 0; row < num; row ++){
        for(let col = 0; col<num; col ++){

            const divItem = document.createElement("div");
            const itemAtt = document.createAttribute("class");
            itemAtt.value = "main-item";
            divItem.setAttributeNode(itemAtt);

            // style the div
            divItem.style.width = "30px";
            divItem.style.height = "30px";
            divItem.style.display = "flex";
            divItem.style.flexGrow = "1";
            divMain.appendChild(divItem);
        }
    }
}
// create a div using div
// get div container from main
// append a div to the main
// use for loop to print x number of div
printGrid(16)
// rangeSlider();





