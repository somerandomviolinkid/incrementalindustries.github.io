//what do you think this does
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

//makes random values within a predictable range easier to code
function randomNumberRange(seed, factor) {
    return randomNumber(seed - (seed * factor), seed + (seed * factor));
}

//hides or shows all elements of a class
function changeClassDisplay(className, display) {
    const elements = document.getElementsByClassName(className);
    for (let a = 0; a < elements.length; a++) {
        document.getElementById(elements[a].id).style.display = display;
    }
}