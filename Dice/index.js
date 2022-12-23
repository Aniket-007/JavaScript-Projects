function start() {
    
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    var randomDiceImage = "dice" + randomNumber + ".png";
    var randomImageSrc = "images/" + randomDiceImage;
    var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc)


    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomImageSrc1 = "images/" + randomDiceImage1;
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc1)


    if (randomImageSrc === randomImageSrc1) {
        document.querySelector("h1").innerHTML = "Match tie";
    } else if (randomNumber > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 1 Win :)";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 win :)";
    }
}