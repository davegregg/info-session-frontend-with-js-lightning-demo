let playButton = document.querySelector("form > button")

function handleClick (event) {
    console.log(colorPicker.value)
    player.style.backgroundColor = colorPicker.value // Rewrite this line in front of the attendees, focusing on the reading order of the words in the line. Don't overlook the punctuation marks. Draw a bit of attention to them, but assure the attendees that they'll get used to grammar before long.
}

function handleKeypress (event) {
    // Start with the body of this function empty
    // Focus on the simple logic flow
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

// These lines should be pre-written.
// Draw attention to the names of the callbacks:
// these I picked for myself. For most of the OTHER "words"
// in this code, they are common to all HTML elements
// and can be found with IntelliSense in VS Code
// and online with a quick search.
playButton.addEventListener("click", handleClick)
document.addEventListener("keydown", handleKeypress)
