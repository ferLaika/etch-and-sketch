function createBox(){
    const newDiv = document.createElement("div");

    const newContent = document.createTextNode("BOX");


    // add the text node to the newly created div
    newDiv.appendChild(newContent);

      // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("box");
    document.body.insertBefore(newDiv, currentDiv);
}


for(let i=0; i < 16; i++){
    createBox();
    for(let j=0; j < 16; j++){
        createBox();
    }
}