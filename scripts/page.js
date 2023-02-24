//tab function
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultTab").click();

function disableButton(buttonName, cooldownMs) {
    function enableButton() {
        document.getElementById(buttonName).disabled = false;
    }
    document.getElementById(buttonName).disabled = true;
    setTimeout(enableButton, cooldownMs);
}

function updateResourceCount(resourceName) {
    if (resources[resourceName].type === 'countable') {
        document.getElementById(resourceName + "Count").innerHTML = resources[resourceName].title + ": " + data.resources[resourceName].amount;
    } else if (resources[resourceName].type === 'uncountable') {
        document.getElementById(resourceName + "Count").innerHTML = resources[resourceName].title + ": " + data.resources[resourceName].amount.toFixed(3) + " kg";
    } else if (resources[resourceName].type === 'liquid') {
        document.getElementById(resourceName + "Count").innerHTML = resources[resourceName].title + ": " + data.resources[resourceName].amount.toFixed(3) + " L";
    }
}

//amount gained then resource name
function visualGains() {
    document.getElementById("visualGain").style.visibility = 'visible';

    for (let x of arguments) {
        document.getElementById("visualGain").innerHTML = "+ " + x.amountGained.toFixed(3) + " " + x.resourceName + "<br />";
    }

    function hideText() {
        document.getElementById("visualGain").style.visibility = 'hidden';  
    }

    setTimeout(hideText, 750);
}

//updates stuff on resources menu
function updateInformationDiv() {
    document.getElementById("miningAmountCount").innerHTML = "Mining amount: " + data.stats.mineAmount;
    document.getElementById("choppingAmountCount").innerHTML = "Crushing amount: " + data.stats.crushAmount;
    document.getElementById("crushingAmountCount").innerHTML = "Chopping amount: " + data.stats.chopAmount;
    document.getElementById("smeltingAmountCount").innerHTML = "Smelting amount: " + data.stats.smeltAmount;
}

updateInformationDiv();
