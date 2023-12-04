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

    // style the container
    divMain.style.height = "500px";
    divMain.style.width = "500px";
    const height = divMain.style.height;
    const width = divMain.style.width;
    // console.log("height: " + height);
    // console.log("wdith: " + width);

    // use for loop to print x number of div
    for(let row = 0; row < num; row ++){
        for(let col = 0; col<num; col ++){

            // create a div 
            const divItem = document.createElement("div");
            const itemAtt = document.createAttribute("class");
            itemAtt.value = "main-item";
            divItem.setAttributeNode(itemAtt);

            // style the div
            divItem.style.height = `calc(${height}/${num})`;
            const divHeight = divItem.style.height;
            // console.log(divHeight);

            divItem.style.width = `calc(${width}/${num})`;
            const divWidth = divItem.style.width;
            // console.log(divWidth);

            // append a itemdiv to the main
            divMain.appendChild(divItem);
        }
    }
}

printGrid(16)
// rangeSlider();





