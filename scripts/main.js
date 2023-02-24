function craftItem(item) {
    let allowCraft = false;
    for (let x in craftingRecipes[item].components) {
        if (data.resources[craftingRecipes[item].components[x].title] >= craftingRecipes[item].components[x].amount) {
            allowCraft = true;
            console.log(x + " success")
        } else {
            return "craft failed";
        }
    }

    if (allowCraft == true) {
        for (let x in craftingRecipes[item].components) {
            data.resources[craftingRecipes[item].components[x].title].amount -= craftingRecipes[item].components[x].amount;
        }
        console.log(data.resources);
        data.resources[item].amount += craftingRecipes[item].info.yield;

        return "craft succesful";
    }
}