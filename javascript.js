function createBox(boxSize){

  const container = document.querySelector('.container');

    const newDiv = document.createElement("div");
    newDiv.classList.add('box'); // Add the 'box' class to the new div

  //now set box sizes:
  newDiv.style.width = `${boxSize}px`;
  newDiv.style.height = `${boxSize}px`;


    const newContent = document.createTextNode("   ");
    newDiv.appendChild(newContent);


    newDiv.addEventListener("mouseover", () => {
            changeColor(newDiv);
      
    });

    container.appendChild(newDiv);

}

function changeColor(element){ //function to change the background color of the boxes to black when hovered
  element.style.backgroundColor = "black"; 

}

function resetGrid() {
  const container = document.querySelector('.container');
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
      box.style.backgroundColor = "white";
  });
}

function createNewGrid(size, boxSize){
  const container = document.querySelector('.container');
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        createBox(boxSize);
    }
  }
}

function applySize(){
  const gridSizeInput = document.getElementById('gridSizeInput');
  const newSize = parseInt(gridSizeInput.value);

  if (!isNaN(newSize) && newSize > 0) {
    resetGrid();

    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear the existing grid

    let boxSize = 560 / newSize; // Recalculate box size
    createNewGrid(newSize, boxSize);
 } 



}




//event listener to reset button:
const reset = document.getElementById('reset');
reset.addEventListener('click', resetGrid);

const applySizeButton = document.getElementById('applySizeButton');
applySizeButton.addEventListener('click', applySize);




