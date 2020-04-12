const body = document.querySelector('body');
const form = document.querySelector('#sizePicker');
const submit = document.querySelector('#submit');
const color = document.querySelector('#colorPicker');
let canvas = document.querySelector('#pixelCanvas');

function createTable() {
    const table = document.createElement('table')
    table.id = 'pixelCanvas';
    return table
} 

submit.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (canvas) {
        canvas.remove()
    }
    
    canvas = createTable();
    canvas.style.display = 'flex';

    body.appendChild(canvas);

    const height = document.querySelector('#inputHeight').value;
    const width = document.querySelector('#inputWidth').value;
    makeGrid(height, width);
})

  

function makeRows(numRow){
    const rows = [];
    for (r = 0; r < numRow; r++) {
        const row = document.createElement("tr");
        row.id = `${0}`
        row.className = "row";
        rows.push(row)
    };
    return rows;
}

function makeColumns(rowsArray, numCols){
    for (let i = 0; i < rowsArray.length; i++) {
        const row = rowsArray[i]; 
        row.innerHTML = `<td id=${i*10}></td>`.repeat(numCols)
        
        canvas.appendChild(row); 
    };
}

function makeGrid(rows, columns) {
    const rowsArray = makeRows(rows);
    makeColumns(rowsArray, columns);
}

canvas.addEventListener('click', (event) => {
    const cell = event.target;
    cell.style.backgroundColor = color.value;
})
