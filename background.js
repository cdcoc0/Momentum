const body = document.querySelector("body");

const IMG_NUM = 3;

/*function handleImgLoad() {
    console.log("img");
}*/

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/pic${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
    //image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();