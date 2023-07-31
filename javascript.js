function createBox(){

    //method to create a box and add it to the 16x16 grid
    
    /*const newDiv = document.createElement("div");
    newDiv.id = 'box';

    const newContent = document.createTextNode("BOX");


    // add the text node to the newly created div
    newDiv.appendChild(newContent);

      // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("box");
    document.body.insertBefore(newDiv, currentDiv);*/



    const newDiv = document.createElement("div");
    newDiv.classList.add('box'); // Add the 'box' class to the new div
    const newContent = document.createTextNode("   ");
    newDiv.appendChild(newContent);
    const container = document.querySelector('.container');
    container.appendChild(newDiv);
}


for(let i=0; i < 16; i++){
    createBox();
    for(let j=0;j<15;j++)
        createBox();
}