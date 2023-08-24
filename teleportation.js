document.addEventListener("DOMContentLoaded", function () {
    const elementToTeleport = document.getElementById("elementToTeleport")
    const leftContainer = document.getElementById("leftContainer")
    const rightContainer = document.getElementById("rightContainer")

    function teleportLoop() {
        setTimeout(function () {
            if (elementToTeleport.parentElement === leftContainer) {
                rightContainer.appendChild(elementToTeleport)
            } else {
                leftContainer.appendChild(elementToTeleport)
            }
            teleportLoop() // Recursive call
        }, 1000) // Delay for teleportation
    }

    teleportLoop() // Start the infinite loop
})