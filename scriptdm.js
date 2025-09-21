function CloseEyes() {
    var element = document.body;
    element.classList.toggle("LightsOff");

    var image = document.getElementsByClassName("enbydreamer")[0]
    if (image.src.includes("TheDreamer.png")) {
        image.src = "assets/TheDreamer2.png";
    } else {
        image.src = "assets/TheDreamer.png";
    }
}