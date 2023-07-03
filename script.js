window.addEventListener('DOMContentLoaded', (event) => {
    makeCells();
});
function makeCells(cells) {
    cells = cells || 16;

    let cellWidth = 40/cells + "rem";
    let cellHeight = 40/cells + "rem";
    
    const container = document.getElementById("container");

    let cell = [];
    
    for (i = 0; i < cells; i++) {
        cell[i] = document.createElement("div");
        container.appendChild(cell[i]);
        
        for(j = 0; j < cells; j++){
            const containerDiv = document.createElement("div");

            const classAttribute = document.createAttribute("class");
            
            classAttribute.value = "grid-item";
            
            containerDiv.setAttributeNode(classAttribute);
            
            const widthHeightAttribute = document.createAttribute("style")
            widthHeightAttribute.value = `width: ${cellWidth}; height: ${cellHeight};`;

            containerDiv.setAttributeNode(widthHeightAttribute);
            cell[i].appendChild(containerDiv);
        }
    }
    onload();
}


function setGrid() {
    var res = prompt("Set the resolution: 1 - 100");
    if (res == null) {
        alert("You cancelled!");
        return;
    }
    res = parseInt(res);

    if (res > 0 & res <= 100) {
        const container = document.getElementById("container");
        while (container.firstChild) container.removeChild( container.firstChild);
        makeCells(res);
    } else {
        alert("Error! Choose a resolution between 1 - 100")
    }
}

function onload() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'black';
        });
    });
}