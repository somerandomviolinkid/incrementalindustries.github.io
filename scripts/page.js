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

//disables buttons
function disableButton(buttonName, cooldownMs) {
    function enableButton() {
        document.getElementById(buttonName).disabled = false;
    }
    document.getElementById(buttonName).disabled = true;
    setTimeout(enableButton, cooldownMs);
}

//updates specific inventory square
function updateResourceCount(resourceName) {
    if (resources[resourceName].singular === true) {
        document.getElementById(resourceName + "Count").innerHTML = resources[resourceName].title + ": " + data.resources[resourceName].amount.toFixed(0) + resources[resourceName].unit;
    } else {
        document.getElementById(resourceName + "Count").innerHTML = resources[resourceName].title + ": " + data.resources[resourceName].amount.toFixed(significantDigits) + resources[resourceName].unit;
    }

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

//opens crafting menu for crafts
function openCraftingMenu(recipeName) {

    document.getElementById("craftingDiv").style.display = "none";
    document.getElementById("craftingMenuDiv").style.display = "block";

    //loop through crafting components
    let componentsText = "";

    for (const r in craftingRecipes[recipeName].components) {
        let t = craftingRecipes[recipeName].components[r].title;
        if (craftingRecipes[recipeName].components[r].type === 'machine') {
            componentsText += craftingRecipes[recipeName].components[r].amount.toString() + " " + machines[t].unit.toString() + " " + machines[t].title.toString() + "<br />";
        } else {
            componentsText += craftingRecipes[recipeName].components[r].amount.toString() + " " + resources[t].unit.toString() + " " + resources[t].title.toString() + "<br />";
        }

    }
    for (const s in craftingRecipes[recipeName].tools) {
        componentsText += "Requires " + craftingRecipes[recipeName].tools[s].display + "<br />";
    }

    //changes text and stuff inside crafting menu
    document.getElementById("craftingRecipeTitle").innerHTML = craftingRecipes[recipeName].info.title;
    document.getElementById("craftingRecipeImg").src = "assets/" + recipeName.toString() + ".png";

    if (craftingRecipes[recipeName].info.type === 'machine') {
        //check if there's a description
        if (machines[recipeName].desc !== undefined) {
            document.getElementById("craftingRecipeDesc").innerHTML = machines[recipeName].desc;
        } else {
            document.getElementById("craftingRecipeDesc").innerHTML = "";
        }
    } else {
        //check if there's a description
        if (resources[recipeName].desc !== undefined) {
            document.getElementById("craftingRecipeDesc").innerHTML = resources[recipeName].desc;
        } else {
            document.getElementById("craftingRecipeDesc").innerHTML = "";
        }
    }

    document.getElementById("craftingRecipeComponents").innerHTML = componentsText;
    document.getElementById("craftRecipeButton").innerHTML = "Craft " + craftingRecipes[recipeName].info.title;

    let recipeCraftButton = document.getElementById("craftRecipeButton");
    recipeCraftButton.onclick = function () {
        craftItem(recipeName);
    };
}

function closeCraftingMenu() {
    document.getElementById("craftingDiv").style.display = "block";
    document.getElementById("craftingMenuDiv").style.display = "none";
}

closeCraftingMenu();

//opens smelting menu
function closeSmeltingMenu() {

    document.getElementById("closeSmeltMenu").remove();

    for (const b of minerals) {
        let currentRemoveID = "smelt" + b + "Button";
        document.getElementById(currentRemoveID).remove();
    }

    document.getElementById("mineRock").style.display = "block";
    document.getElementById("crushRock").style.display = "block";
    document.getElementById("smeltRock").style.display = "block";

    document.getElementById("rocksDiv").style.overflowY = "auto";
}

//closes smelting menu
function openSmeltingMenu() {

    document.getElementById("mineRock").style.display = "none";
    document.getElementById("crushRock").style.display = "none";
    document.getElementById("smeltRock").style.display = "none";

    document.getElementById("rocksDiv").style.overflowY = "scroll";

    let closeSmeltingMenuButton = document.createElement("button");

    closeSmeltingMenuButton.className = "smeltButtons";
    closeSmeltingMenuButton.id = "closeSmeltMenu";
    let closeSmeltingMenuButtonID = closeSmeltingMenuButton.id;

    document.getElementById("rocksDiv").appendChild(closeSmeltingMenuButton);

    document.getElementById(closeSmeltingMenuButtonID).innerHTML = "Close smelting menu";

    document.getElementById(closeSmeltingMenuButtonID).onclick = function () {
        closeSmeltingMenu();
    }

    for (const b of minerals) {

        let currentSmeltingButton = document.createElement("button");

        currentSmeltingButton.className = "smeltButtons";
        currentSmeltingButton.id = "smelt" + b + "Button";
        let currentSmeltingButtonID = currentSmeltingButton.id;

        let yieldText = "";

        let z = data.stats.smeltAmount;

        for (let c in rocksIndex[b].smeltYields) {
            yieldText += (rocksIndex[b].smeltYields[c].amount.toString() * z).toFixed(significantDigits) + " " + resources[rocksIndex[b].smeltYields[c].title].title + " ";
        }

        document.getElementById("rocksDiv").appendChild(currentSmeltingButton);
        document.getElementById(currentSmeltingButtonID).innerHTML = "Smelt " + b + "<br />Yields: " + yieldText + "<br />Costs " + z + " kg " + b + " and " + z + " kg coal";
        document.getElementById(currentSmeltingButtonID).onclick = function () {
            smeltOre(b.toString());
        }
    }
}

//highlights tab when something new happens
function defaultTabColor(tabName) {
    document.getElementById(tabName).style.color = "black";
}

function highlightTab(tabName) {
    document.getElementById(tabName).style.color = "red";
    setTimeout(defaultTabColor, 2500, tabName);
}

function notEnoughResourcesAlert(buttonName) {
    document.getElementById(buttonName).innerHTML = "Not enough resources!";
    function hideAlert() {
        document.getElementById(buttonName).innerHTML = "";
    }
    setTimeout(hideAlert, 1250);
}

function switchFuelSource() {

    if (fuelSource === 'coal') {
        fuelSource = 'charcoal';
    } else {
        fuelSource = 'coal';
    }

    document.getElementById("switchFuelsButton").innerHTML = "Current fuel source: " + fuelSource;
}

document.getElementById("switchFuelsButton").innerHTML = "Current fuel source: " + fuelSource;

let width = 0;

//progress bar
function updateProgressBar(totalTime, progressBarID) {
    document.getElementById(progressBarID).style.width = width + '%';
    width += (1 / (totalTime * 10 / (framerateMS)));
}

function resetProgressBar() {
    document.getElementById(progressBarID).style.width = 0 + '%';
    document.getElementById(progressBarID).style.visibility = "hidden";
    width = 0;
}
