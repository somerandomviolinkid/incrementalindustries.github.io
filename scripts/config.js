//setting changes functions
//significant digits change
document.getElementById("sigFigSliderLabel").innerHTML = "Significant digits: " + data.settings.significantDigits;
document.getElementById("sigFigSlider").value = data.settings.significantDigits;

let sigFigSlider = document.getElementById("sigFigSlider");

sigFigSlider.oninput = function () {
    const startSigFigChange = Date.now();
    document.getElementById("sigFigSliderLabel").innerHTML = "Significant digits: " + this.value;
    data.settings.significantDigits = this.value;

    for (const f in resources) {
        updateResourceCount(f);
    }

    console.log(data.settings.significantDigits);
    saveData();

    const endSigFigChange = Date.now() - startSigFigChange;
    console.log("Changed significant digits in " + endSigFigChange + " ms.");
}

sigFigSlider.value = data.settings.significantDigits.toString();

//ms per frame change
let mspfSlider = document.getElementById("mspfSlider");
let mspfSliderDisplay = document.getElementById("mspfSliderLabel");