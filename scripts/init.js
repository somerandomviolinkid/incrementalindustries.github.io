const startLoading = Date.now();
loadData();

document.getElementById("defaultTab").click();

//loads inventory
for (const i in resources) {
    //inventory square
    let currentInventorySquare = document.createElement("div");
    currentInventorySquare.className = "inventorySquare";
    currentInventorySquare.className += " " + resources[i].tag;
    currentInventorySquare.id = "inventorySquare" + i;
    document.getElementById("inventoryDiv").appendChild(currentInventorySquare);

    let currentInventorySquareID = currentInventorySquare.id;

    //text inside square
    let currentResourceCount = document.createElement("p");
    if (resources[i].singular === false) {
        currentResourceCount.innerHTML = resources[i].title + ": " + data.resources[i].amount.toFixed(data.settings.significantDigits) + " " + resources[i].unit;
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

    console.log("Successfully loaded data for " + i);

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

//loads building div
for (const v in buildings) {

    if (data.buildings[v].unlocked === true && data.buildings[v].built === false) {
        //building construction button

        //button itself
        let currentBuildingConstructionButton = document.createElement("button");
        currentBuildingConstructionButton.className = "buildingButton";
        currentBuildingConstructionButton.id = v.toString() + "BuildingButton";
        document.getElementById("mainBuildingDiv").appendChild(currentBuildingConstructionButton);

        let currentBuildingConstructionButtonID = currentBuildingConstructionButton.id;
        document.getElementById(currentBuildingConstructionButtonID).onclick = function () {
            openBuildingCraftingMenu(v.toString());
        }

        //text
        let currentBuildingText = document.createElement("p");
        currentBuildingText.innerHTML = "Build " + buildings[v].info.title.toString();
        document.getElementById(currentBuildingConstructionButtonID).appendChild(currentBuildingText);

        //image
        let currentBuildingImage = document.createElement("img");
        currentBuildingImage.className = "buildingImg";
        currentBuildingImage.src = "assets/" + v.toString() + ".png";
        document.getElementById(currentBuildingConstructionButtonID).appendChild(currentBuildingImage);

        console.log("Successfully loaded building data for " + v);

    } else if (data.buildings[v].built === true) {
        //building opening buttons 

        //button itself
        let currentBuildingOpeningButton = document.createElement("button");
        currentBuildingOpeningButton.className = "buildingButton";
        currentBuildingOpeningButton.id = v.toString() + "BuildingButton";
        document.getElementById("mainBuildingDiv").appendChild(currentBuildingOpeningButton);

        let currentBuildingOpeningButtonID = currentBuildingOpeningButton.id;
        document.getElementById(currentBuildingOpeningButtonID).onclick = function () {
            openBuildingInteriorMenu(v.toString());
        }

        //text
        let currentBuildingText = document.createElement("p");
        currentBuildingText.innerHTML = "Open " + buildings[v].info.title.toString();
        document.getElementById(currentBuildingOpeningButtonID).appendChild(currentBuildingText);

        //image
        let currentBuildingImage = document.createElement("img");
        currentBuildingImage.className = "buildingImg";
        currentBuildingImage.src = "assets/" + v.toString() + ".png";
        document.getElementById(currentBuildingOpeningButtonID).appendChild(currentBuildingImage);

        console.log("Successfully loaded building data for " + v);
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
document.getElementById("toolCraftingDiv").style.height = (rockHeight.toString()) + "px";
document.getElementById("craftingDiv").style.height = (rockHeight.toString()) + "px";

//loading time counter
const loadingTime = Date.now() - startLoading;
console.log("Loaded successfully in " + loadingTime + " ms.")