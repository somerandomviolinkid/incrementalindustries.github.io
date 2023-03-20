//all of the stuff that is used throughout the entire game??
//manual item crafting
function craftItem(item) {

    const craftingTime = craftingRecipes[item].info.timeS * 1000;

    for (let x in craftingRecipes[item].components) {
        if (data.resources[craftingRecipes[item].components[x].title].amount >= craftingRecipes[item].components[x].amount) {
            console.log(x + " success");
        } else if (machines[craftingRecipes[item].components[x].title] !== undefined) {
            if (data.resources[craftingRecipes[item].components[x].title].crafted === true) {
                console.log(x + " success");
            } else {
                notEnoughResourcesAlert('craftingAlert');
                return;
            }
        } else {
            notEnoughResourcesAlert('craftingAlert');
            return;
        }

    }

    if (craftingRecipes[item].tools !== undefined) {
        for (let y in craftingRecipes[item].tools) {
            if (data.tools[craftingRecipes[item].tools[y].title]) {
                console.log(y + " success");
            } else {
                notEnoughResourcesAlert('craftingAlert');
                return;
            }
        }
    }

    for (let x in craftingRecipes[item].components) {
        data.resources[craftingRecipes[item].components[x].title].amount -= craftingRecipes[item].components[x].amount;
    }

    //disables buttons
    disableButton('craftingMenuClose', craftingTime);
    disableButton('craftRecipeButton', craftingTime);
    const tabLinks = document.getElementsByClassName("tabLink");
    for (let l = 0; l < tabLinks.length; l++) {
        disableButton(tabLinks[l].id, craftingTime);
    }

    //progress bar
    document.getElementById("craftingProgressBarContainer").style.visibility = "visible";
    let progressBarInterval = setInterval(updateProgressBar, framerateMS, craftingRecipes[item].info.timeS, 'craftingProgressBar');

    //yields items
    function yieldItems() {
        data.resources[item].amount += craftingRecipes[item].info.yield;
        clearInterval(progressBarInterval);
        resetProgressBar('craftingProgressBar');

        if (machines[item].oneTime !== undefined) {
            if (machines[item].oneTime === true) {
                closeCraftingMenu();
            }
        }
    }

    setTimeout(yieldItems, craftingTime);
    if (resources[item] !== undefined) {
        updateResourceCount(item);
    }

    if (craftingRecipes[item].info.type === 'manual') {
        return;
    }

    //checks if the crafting recipe can only be crafting once
    if (machines[item].oneTime !== undefined) {
        if (machines[item].oneTime === true) {
            document.getElementById(item.toString() + "RecipeButton").style.display = "none";
            data.resources[item].crafted = true;
        }
    }

    //furnace boost
    if (machines[item].boost !== undefined) {
        if (machines[item].boost === true) {
            data.stats[machines[item].boostName] = machines[item].boostAmount;
            updateInformationDiv();
        }
    }

    //tool unlock
    if (machines[item].toolUnlock !== undefined) {
        data.tools[machines[item].toolName] = true;
        console.log(data.tools[machines[item].toolName]);
    }

    return "craft succesful";
}

//building building function
function buildBuilding(building) {

    const buildingTime = buildings[building].info.timeS * 1000;

}