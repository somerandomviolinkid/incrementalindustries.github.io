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
    document.getElementById(resourceName + "Count").innerHTML = resources[resourceName].title + ": " + data.resources[resourceName].amount.toFixed(significantDigits) + resources[resourceName].unit;
}

//amount gained then resource name
//thanks to asterisk man and escapee for bug fixes and rewriting this
function visualGains(data) {
    let infoDiv = document.getElementById("informationDiv");

    for (const y of data) {

        let currentVisualGain = document.createElement("p");
        currentVisualGain.className = "visualGain";
        infoDiv.appendChild(currentVisualGain);

        currentVisualGain.innerHTML = (y.isPositive ? "+" : "-") + " " + y.amountGained.toFixed(significantDigits) + " " + y.resourceName;

        function removeVisualGain() {
            currentVisualGain.remove();
        }

        setTimeout(removeVisualGain, visualGainTimeout);
    }
}

//updates stuff on resources menu
function updateInformationDiv() {
    document.getElementById("miningAmountCount").innerHTML = "Mining amount: " + data.stats.mineAmount;
    document.getElementById("choppingAmountCount").innerHTML = "Crushing amount: " + data.stats.crushAmount;
    document.getElementById("crushingAmountCount").innerHTML = "Chopping amount: " + data.stats.chopAmount;
    document.getElementById("smeltingAmountCount").innerHTML = "Smelting amount: " + data.stats.smeltAmount;
}

updateInformationDiv();

//opens crafting menu for crafts
function openCraftingMenu(recipeName) {
    console.log(recipeName);
    document.getElementById("craftingDiv").style.display = "none";
    document.getElementById("craftingMenuDiv").style.display = "block";

    let componentsText = "";
    for (r in craftingRecipes[recipeName].components) {
        componentsText += craftingRecipes[recipeName].components[r].amount.toString() + " " + resources[craftingRecipes[recipeName].components[r].title].title.toString() + "<br />";
    }

    document.getElementById("craftingRecipeTitle").innerHTML = craftingRecipes[recipeName].info.title;
    document.getElementById("craftingRecipeImg").src = "assets/" + recipeName.toString() + ".png";
    document.getElementById("craftingRecipeComponents").innerHTML = componentsText;
    document.getElementById("craftRecipeButton").innerHTML = "Craft " + craftingRecipes[recipeName].info.title;

    document.getElementById("craftRecipeButton").addEventListener("click", function() {
        craftItem(recipeName);
    });
}

function closeCraftingMenu() {
    document.getElementById("craftingDiv").style.display = "block";
    document.getElementById("craftingMenuDiv").style.display = "none";
}

closeCraftingMenu();