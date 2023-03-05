//manual item crafting
function craftItem(item) {
    for (let x in craftingRecipes[item].components) {
        if (data.resources[craftingRecipes[item].components[x].title].amount >= craftingRecipes[item].components[x].amount) {
            console.log(x + " success");
        } else {
            notEnoughResourcesAlert('craftingAlert');
            return;
        }
    }

    if (craftingRecipes[item].tools !== undefined) {
        for (let y in craftingRecipes[item].tools) {
            if (data.tools[craftingRecipes[item].tools[y].title][craftingRecipes[item].tools[y].tier]) {
                console.log(x + " success");
            } else {
                notEnoughResourcesAlert('craftingAlert');
                return;
            }
        }
    }

    for (let x in craftingRecipes[item].components) {
        data.resources[craftingRecipes[item].components[x].title].amount -= craftingRecipes[item].components[x].amount;
    }

    setTimeout(data.resources[item].amount += craftingRecipes[item].info.yield, craftingRecipes[item].info.timeS * 1000);

    closeCraftingMenu();

    if (machines[item].oneTime !== undefined) {
        if (machines[item].oneTime === true) {
            document.getElementById(item.toString() + "RecipeButton").style.display = "none";
            data.resources[item].crafted = true;
        }
    }

    if (machines[item].boost !== undefined) {
        if (machines[item].boost === true) {
            data.stats[machines[item].boostName] = machines[item].boostAmount;
            updateInformationDiv();
        }
    }

    if (machines[item].toolUnlock !== undefined) {
        data.tools[machines[item].toolName] = true;
    }

    return "craft succesful";
}