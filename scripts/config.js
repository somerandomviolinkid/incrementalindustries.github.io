//setting changes functions
//significant digits change
let sigFigSlider = document.getElementById("sigFigSlider");
let sigFigSliderLabel = document.getElementById("sigFigSliderLabel");

sigFigSliderLabel.innerHTML = "Significant digits: " + data.settings.significantDigits;
sigFigSlider.value = data.settings.significantDigits.toString();

sigFigSlider.oninput = function () {
    const startSigFigChange = Date.now();
    sigFigSliderLabel.innerHTML = "Significant digits: " + this.value;
    data.settings.significantDigits = this.value;

    for (const f in resources) {
        updateResourceCount(f);
    }

    const endSigFigChange = Date.now() - startSigFigChange;
    console.log("Changed significant digits in " + endSigFigChange + " ms.");
}

//ms per frame change
let mspfSlider = document.getElementById("mspfSlider");
let mspfSliderLabel = document.getElementById("mspfSliderLabel");

mspfSliderLabel.innerHTML = "Milliseconds per frame: " + data.settings.mspf;
mspfSlider.value = data.settings.mspf.toString();

mspfSlider.oninput = function () {
    const startMspfChange = Date.now();
    mspfSliderLabel.innerHTML = "Milliseconds per frame: " + this.value;
    data.settings.mspf = this.value;
    
    const endMspfChange = Date.now() - startMspfChange;
    console.log("Changed significant digits in " + endMspfChange + " ms.");
}

//visual gain timeout chance
let vgTimeoutSlider = document.getElementById("vgTimeoutSlider");
let vgTimeoutSliderLabel = document.getElementById("vgTimeoutSliderLabel");

vgTimeoutSliderLabel.innerHTML = "Visual gain timeout (milliseconds): " + data.settings.visualGainTimeout;
vgTimeoutSlider.value = data.settings.visualGainTimeout.toString();

vgTimeoutSlider.oninput = function () {
    const startvgTimeoutChange = Date.now();
    vgTimeoutSliderLabel.innerHTML = "Visual gain timeout (milliseconds): " + this.value;
    data.settings.visualGainTimeout = this.value;
    
    const endvgTimeoutChange = Date.now() - startvgTimeoutChange;
    console.log("Changed visual gains timeout in " + endvgTimeoutChange + " ms.");
}