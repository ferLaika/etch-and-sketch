function createBox(){

    //method to create a box and add it to the 16x16 grid
 

    const newDiv = document.createElement("div");
    newDiv.classList.add('box'); // Add the 'box' class to the new div
    const newContent = document.createTextNode("   ");
    newDiv.appendChild(newContent);


      // Set up event listeners for drawing effect - when hover but also pressing pen down
      newDiv.addEventListener("mousedown", () => {
        isDrawing = true;
    });

    newDiv.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    newDiv.addEventListener("mousemove", () => {
        if (isDrawing) {
            changeColor(newDiv);
        }
    });

    const container = document.querySelector('.container');
    container.appendChild(newDiv);

}

function changeColor(element){ //function to change the background color of the boxes to black when hovered
  element.style.backgroundColor = "black";
}


for(let i=0; i < 16; i++){
    createBox();
    for(let j=0;j<15;j++)
        createBox();
}


