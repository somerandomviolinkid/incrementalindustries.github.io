//item crafting
function craftItem(item) {
    let allowCraft = false;

    for (let x in craftingRecipes[item].components) {
        if (data.resources[craftingRecipes[item].components[x].title] >= craftingRecipes[item].components[x].amount) {
            allowCraft = true;
            console.log(x + " success");
        } else {
            return "craft failed";
        }
    }

    for (let y in craftingRecipes[item].tools) {
        if (data.tools[craftingRecipes[item].tools[y].title][craftingRecipes[item].tools[y].tier]) {
            allowCraft = true;
            console.log(x + " success");
        }
    }

    if (allowCraft == true) {
        for (let x in craftingRecipes[item].components) {
            data.resources[craftingRecipes[item].components[x].title].amount -= craftingRecipes[item].components[x].amount;
        }

        setTimeout(data.resources[item].amount += craftingRecipes[item].info.yield, craftingRecipes[item].info.timeS * 1000);
        
        closeCraftingMenu();

        return "craft succesful";
    }
}