const grid = document.querySelector(".grid-container");
const gridSize = document.querySelector(".grid-size");
const [gridSizeSlider, colorSelector] = document.querySelectorAll("input");
const [clearBoardButton, rainbowButton, colorButton] = document.querySelectorAll("button")

let rainbowMode = true;
rainbowButton.onclick = (_) => rainbowMode = true;
colorButton.onclick = (_) => rainbowMode = false;
clearBoardButton.onclick = (_) => callGridGeneration();

const setBackgroundColor = (event) => (event.target.style.backgroundColor = rainbowMode ? `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
                                                                                        : colorSelector.value)
function generateGrid(size) {

    let elements = [];

    for (let _ = 0; _ < size**2; _++) {

        let element = document.createElement('div');
        element.style.backgroundColor = '#fff';
        element.addEventListener('mouseenter', setBackgroundColor)
        elements.push(element);
    }
    
    grid.replaceChildren(...elements);
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

const changeSizeText = (_) => gridSize.textContent = `Grid Size: ${gridSizeSlider.value}x${gridSizeSlider.value}`;
const callGridGeneration = (_) => generateGrid(gridSizeSlider.value);
gridSizeSlider.addEventListener('mousemove', changeSizeText);
gridSizeSlider.addEventListener('change', callGridGeneration);

generateGrid(16);