let playButton = document.querySelector("form > button")

function handleClick (event) {
    console.log(colorPicker.value)
    // When the user clicks on the "Play!" button, 
    // how do we update the color of the winner message
    // based on the user-selected color from the color picker?
    winnerMessage.style.color = colorPicker.value
    winnerMessage.style.textShadow = `0px 0px 5px ${colorPicker.value}`
}

function handleKeypress (event) {
    // What do we want to happen when the user presses a key on their keyboard?
    if (event.key === "ArrowRight") {
        moveRight()
    }

    if (event.key === "ArrowLeft") {
        moveLeft()
    }

    if (event.key === "ArrowUp") {
        moveUp()
    }

    if (event.key === "ArrowDown") {
        moveDown()
    }
}

playButton.addEventListener("click", handleClick)
document.addEventListener("keydown", handleKeypress)
