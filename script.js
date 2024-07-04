function Roll() {
    const diceImg = document.getElementById("diceMain")

    const randomNumber = Math.floor(Math.random() * (7 - 1)) + 1;

    if (randomNumber == 1) {
        diceImg.src = "../image/1.png";
    }
    else if (randomNumber == 2) {
        diceImg.src = "../image/2.png"
    }
    else if (randomNumber == 3) {
        diceImg.src = "../image/3.png"
    }
    else if (randomNumber == 4) {
        diceImg.src = "../image/4.png"
    }
    else if (randomNumber == 5) {
        diceImg.src = "../image/5.png"
    }
    else if (randomNumber == 6) {
        diceImg.src = "../image/6.png"
    }
}