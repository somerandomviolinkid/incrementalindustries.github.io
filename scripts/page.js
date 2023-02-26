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

    document.getElementById("craftingDiv").style.display = "none";
    document.getElementById("craftingMenuDiv").style.display = "block";

    //loop through crafting components
    let componentsText = "";
    for (const r in craftingRecipes[recipeName].components) {
        componentsText += craftingRecipes[recipeName].components[r].amount.toString() + " " + resources[craftingRecipes[recipeName].components[r].title].unit.toString() + " " + resources[craftingRecipes[recipeName].components[r].title].title.toString() + "<br />";
    }
    for (const s in craftingRecipes[recipeName].tools) {
        componentsText += "Requires " + craftingRecipes[recipeName].tools[s].display + "<br />";
    }

    //changes text and stuff inside crafting menu
    document.getElementById("craftingRecipeTitle").innerHTML = craftingRecipes[recipeName].info.title;
    document.getElementById("craftingRecipeImg").src = "assets/" + recipeName.toString() + ".png";

    //check if there's a description
    if (resources[recipeName].desc !== undefined) {
        document.getElementById("craftingRecipeDesc").innerHTML = resources[recipeName].desc;
    } else {
        document.getElementById("craftingRecipeDesc").innerHTML = "";
    }

    document.getElementById("craftingRecipeComponents").innerHTML = componentsText;
    document.getElementById("craftRecipeButton").innerHTML = "Craft " + craftingRecipes[recipeName].info.title;

    document.getElementById("craftRecipeButton").addEventListener("click", function () {
        craftItem(recipeName);
    });
}

function closeCraftingMenu() {
    document.getElementById("craftingDiv").style.display = "block";
    document.getElementById("craftingMenuDiv").style.display = "none";
}

closeCraftingMenu();

function closeSmeltingMenu() {

    document.getElementById("closeSmeltMenu").remove();

    for (const b of minerals) {
        let currentRemoveID = "smelt" + b + "Button";
        document.getElementById(currentRemoveID).remove();
    }

    document.getElementById("mineRock").style.display = "block";
    document.getElementById("crushRock").style.display = "block";
    document.getElementById("smeltRock").style.display = "block";
}

function openSmeltingMenu() {

    document.getElementById("mineRock").style.display = "none";
    document.getElementById("crushRock").style.display = "none";
    document.getElementById("smeltRock").style.display = "none";

    let closeSmeltingMenuButton = document.createElement("button");

    closeSmeltingMenuButton.className = "smeltButtons";
    closeSmeltingMenuButton.id = "closeSmeltMenu";
    let closeSmeltingMenuButtonID = closeSmeltingMenuButton.id;

    document.getElementById("rocksDiv").appendChild(closeSmeltingMenuButton);

    document.getElementById(closeSmeltingMenuButtonID).innerHTML = "Close smelting menu";

    document.getElementById(closeSmeltingMenuButtonID).onclick = function() {
        closeSmeltingMenu();
    }

    for (const b of minerals) {

        let currentSmeltingButton = document.createElement("button");

        currentSmeltingButton.className = "smeltButtons";
        currentSmeltingButton.id = "smelt" + b + "Button";
        let currentSmeltingButtonID = currentSmeltingButton.id;

        document.getElementById("rocksDiv").appendChild(currentSmeltingButton);
        document.getElementById(currentSmeltingButtonID).innerHTML = "Smelt " + b + "<br />Costs 0.1 " + b + " and 0.1 coal";
        document.getElementById(currentSmeltingButtonID).onclick = function() {
            smeltOre(b.toString());
        }
    }
}