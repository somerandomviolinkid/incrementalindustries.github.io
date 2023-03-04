//manual item crafting
function craftItem(item) {
for (let x in craftingRecipes[item].components) {
        if (data.resources[craftingRecipes[item].components[x].title] >= craftingRecipes[item].components[x].amount) {
            console.log(x + " success");
        } else {
            notEnoughResourcesAlert('craftingAlert');
            return;
        }
    }

    for (let y in craftingRecipes[item].tools) {
        if (data.tools[craftingRecipes[item].tools[y].title][craftingRecipes[item].tools[y].tier]) {
            console.log(x + " success");
        } else {
            notEnoughResourcesAlert('craftingAlert');
            return;
        }
    }

    for (let x in craftingRecipes[item].components) {
        data.resources[craftingRecipes[item].components[x].title].amount -= craftingRecipes[item].components[x].amount;
    }

    setTimeout(data.resources[item].amount += craftingRecipes[item].info.yield, craftingRecipes[item].info.timeS * 1000);

    closeCraftingMenu();

    if (resources[item].oneTime === true) {
        document.getElementById(item.toString() + "RecipeButton").style.display = "none";
        data.resources[item].crafted = true;
    }

    if (resources[item].boost === true) {
        data.stats[resources[item].boostName] = resources[item].boostAmount;
        updateInformationDiv();
    }

    return "craft succesful";
}