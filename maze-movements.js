function canMoveTo (cell) {
    return cell && cell.dataset.cellType !== "█"
}

function finishCellReached (cell) {
    return cell && cell.dataset.cellType === "F"
}

function youWon () {
    winnerMessageElement.classList.add("you-won")
    winnerMessageElement.prepend(`${playerName.value}, `)
}

function moveRight () {
    let currentCell = player.parentElement
    let cellToTheRight = currentCell.nextElementSibling

    if (canMoveTo(cellToTheRight)) {
        cellToTheRight.append(player)
    }

    if (finishCellReached(cellToTheRight)) {
        youWon()
    }
}

function moveLeft () {
    let currentCell = player.parentElement
    let cellToTheLeft = currentCell.previousElementSibling

    if (canMoveTo(cellToTheLeft)) {
        cellToTheLeft.append(player)
    }

    if (finishCellReached(cellToTheLeft)) {
        youWon()
    }
}

function moveUp() {
    let currentCell = player.parentElement
    let currentRow = player.parentElement.parentElement
    let rowAbove = currentRow.previousElementSibling

    let cellIndex = Array.from(currentRow.children).findIndex(element => element === currentCell)
    let cellAbove = rowAbove.children[cellIndex]

    if (canMoveTo(cellAbove)) {
       cellAbove.append(player)
    }

    if (finishCellReached(cellAbove)) {
        youWon()
    }
}

function moveDown () {
    let currentCell = player.parentElement
    let currentRow = player.parentElement.parentElement
    let rowBelow = currentRow.nextElementSibling

    let cellIndex = Array.from(currentRow.children).findIndex(element => element === currentCell)
    let cellBelow = rowBelow.children[cellIndex]
    
    if (canMoveTo(cellBelow)) {
        cellBelow.append(player)
    }

    if (finishCellReached(cellBelow)) {
        youWon()
    }
}
