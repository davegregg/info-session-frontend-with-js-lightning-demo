let map = [
    "█████████████████████",
    "█░░░█░░░░░█░░░░░█░█░█",
    "█░█░█░███░█████░█░█░█",
    "█░█░█░░░█░░░░░█░█░░░█",
    "█░███████░█░███░█░█░█",
    "█░░░░░░░░░█░░░░░█░█░█",
    "█░███░█████░█████░█░█",
    "█░█░░░█░░░█░█░░░░░█░█",
    "█░█████░█░█░█░███░█░F",
    "S░░░░░█░█░█░█░█░█░███",
    "█████░█░█░█░█░█░█░█░█",
    "█░░░░░█░█░█░░░█░█░█░█",
    "█░███████░█████░█░█░█",
    "█░░░░░░░█░░░░░░░█░░░█",
    "█████████████████████",
]

let form = document.querySelector("form")
form.addEventListener("submit", event => event.preventDefault())
let colorPicker = form.querySelector("[type='color']")
let playerName = form.querySelector("[name='player-name']")

let maze = document.querySelector("#maze")
let player = document.createElement("div")
player.id = "player"

let winnerMessageElement = document.querySelector("#winning-message-box")

function createRow (rowMap) {
    let rowElement = document.createElement("div")
    rowElement.classList.add("row")

    rowMap
        .split("")
        .forEach(createCell(rowElement))
    
    maze.append(rowElement)
}

function createCell (rowElement) {
    return function (cellCharacter) {
        let cellElement = document.createElement("div")
        cellElement.classList.add("cell")
        cellElement.dataset.cellType = cellCharacter

        if (cellCharacter === "S") {
            cellElement.append(player)
        }

        rowElement.append(cellElement)
    }
}

map.forEach(createRow)
