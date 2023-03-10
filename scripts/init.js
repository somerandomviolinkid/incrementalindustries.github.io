const startLoading = Date.now();
loadData();

document.getElementById("defaultTab").click();

//loads inventory
for (const i in resources) {
    //inventory square
    let currentInventorySquare = document.createElement("div");
    currentInventorySquare.className = "inventorySquare";
    currentInventorySquare.id = "inventorySquare" + i;
    document.getElementById("inventoryDiv").appendChild(currentInventorySquare);

    let currentInventorySquareID = currentInventorySquare.id;

    //text inside square
    let currentResourceCount = document.createElement("p");
    if (resources[i].singular === undefined) {
        currentResourceCount.innerHTML = resources[i].title + ": " + data.resources[i].amount.toFixed(significantDigits) + " " + resources[i].unit;
    } else {
        currentResourceCount.innerHTML = resources[i].title + ": " + data.resources[i].amount.toFixed(0) + " " + resources[i].unit;
    }

    currentResourceCount.id = i + "Count";
    currentResourceCount.className = "resourceCount";
    document.getElementById(currentInventorySquareID).appendChild(currentResourceCount);

    //image
    let currentResourceImage = document.createElement("img");
    currentResourceImage.src = "assets/" + i.toString() + ".png";
    document.getElementById(currentInventorySquareID).appendChild(currentResourceImage);

    console.log("Successfully loaded data for " + i)

}

//loads crafting recipes
for (const m in craftingRecipes) {

    if (craftingRecipes[m].info.type === 'machine' && data.resources[m.toString()].crafted === true && machines[m].oneTime === true) {
        console.log("Player has already crafted " + m);
    } else {

        //button for crafting recipe
        let currentCraftingRecipeButton = document.createElement("button");
        currentCraftingRecipeButton.className = "craftingRecipeButton";
        currentCraftingRecipeButton.id = m.toString() + "RecipeButton";
        document.getElementById("craftingDiv").appendChild(currentCraftingRecipeButton);

        let currentCraftingRecipeButtonID = currentCraftingRecipeButton.id;
        document.getElementById(currentCraftingRecipeButtonID).onclick = function () {
            openCraftingMenu(m.toString());
        }

        //crafting recipe title text
        let currentCraftingRecipeTitle = document.createElement("p");
        currentCraftingRecipeTitle.innerHTML = craftingRecipes[m].info.title;
        document.getElementById(currentCraftingRecipeButtonID).appendChild(currentCraftingRecipeTitle);

        //image
        let currentRecipeImage = document.createElement("img");
        currentRecipeImage.src = "assets/" + m.toString() + ".png";
        document.getElementById(currentCraftingRecipeButtonID).appendChild(currentRecipeImage);

        console.log("Successfully loaded recipe for " + m);
    }

}

//pickaxe crafting loading
for (let h = 1; h < data.tools.pickaxe.length; h++) {
    if (data.tools.pickaxe[h] || !data.tools.pickaxe[h - 1]) {
        document.getElementById("pickaxeTier" + (h).toString() + "Button").style.display = 'none';

    }
}

//axe crafting loading
for (let i = 1; i < data.tools.axe.length; i++) {
    if (data.tools.axe[i] || !data.tools.axe[i - 1]) {
        document.getElementById("axeTier" + (i) + "Button").style.display = 'none';
    }
}

//hammer crafting loading
for (let j = 1; j < data.tools.hammer.length; j++) {
    if (data.tools.hammer[j] || !data.tools.hammer[j - 1]) {
        document.getElementById("hammerTier" + (j) + "Button").style.display = 'none';
    }
}

//starts saving process
setInterval(saveData, 15000);

updateInformationDiv();

//looks at screen resolution and decides how big inventory div should be
console.log("screen resolution is: " + screen.width + " x " + screen.height);
document.getElementById("inventoryDiv").style.height = screen.height * (16 / 27) + "px";

const rockHeight = document.getElementById("woodDiv").offsetHeight;
console.log(rockHeight);

document.getElementById("rocksDiv").style.height = rockHeight.toString() + "px";
document.getElementById("woodDiv").style.height = rockHeight.toString() + "px";
document.getElementById("toolCraftingDiv").style.height = (rockHeight.toString() * 1.1) + "px";
document.getElementById("craftingDiv").style.height = (rockHeight.toString() * 1.1) + "px";

//loading time counter
const loadingTime = Date.now() - startLoading;
console.log("Loaded successfully in " + loadingTime + " ms.")