
function rangeSlider(){

    const slider = document.querySelector(".slider");
    const output = document.querySelector(".slide-text");
    output.innerText = slider.value;

    slider.oninput = function() {
        output.innerText = this.value;
      }  
}

rangeSlider();





