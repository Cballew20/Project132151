let $ = function (id) { return document.getElementById(id); };
let imageMem = [];

function cycleImages(imageArray, elementId) {
    let i = 0;
    let el = $(elementId);

    function toggleImages() {
        el.src = imageArray[i];
        i = (i + 1) % imageArray.length;
    }

    setInterval(toggleImages, 3 + 1000);
}

function preloadImages(imageArray, index) {
    index = index || 0;

    if (imageArray && imageArray.length > index) {

        let img = new Image();
        img.src = imageArray[index];

        img.onload = function () {
            preloadImages(imageArray, index + 1);
        }

        imageMem.push(img);
    }
}

function enlarge(img) {
    img.style.height = "600px";
    img.style.width = "auto";
    img.parentElement.parentElement.style.zIndex= "5";
    img.style.position = "fixed"
}

function reduce(img){
    img.style.height = "auto";
    img.style.width = "160px";
    img.parentElement.parentElement.style.zIndex= "-1";
    img.style.position = "";
}