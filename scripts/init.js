const startLoading = Date.now();
loadData();

console.log("screen resolution is: " + screen.width + " x " + screen.height);
document.getElementById("inventoryDiv").style.height = screen.height * (16/27) + "px";

for (i in data.resources) {
    //inventory square
    let currentInventorySquare = document.createElement("div");
    currentInventorySquare.className = "inventorySquare";
    currentInventorySquare.id = "inventorySquare" + i;
    document.getElementById("inventoryDiv").appendChild(currentInventorySquare);

    let currentInventorySquareID = currentInventorySquare.id;

    //text inside square
    let currentResourceCount = document.createElement("p");
    if (resources[i].type === 'countable') {
        currentResourceCount.innerHTML = resources[i].title + ": " + data.resources[i].amount;
    } else if (resources[i].type === 'uncountable') {
        currentResourceCount.innerHTML = resources[i].title + ": " + data.resources[i].amount.toFixed(3) + " kg";
    } else if (resources[i].type === 'liquid') {
        currentResourceCount.innerHTML = resources[i].title + ": " + data.resources[i].amount.toFixed(3) + " L";
    }
    currentResourceCount.id = i + "Count";
    document.getElementById(currentInventorySquareID).appendChild(currentResourceCount);

    //image
    let currentResourceImage = document.createElement("img");
    currentResourceImage.src = "assets/" + i.toString() + ".png";
    document.getElementById(currentInventorySquareID).appendChild(currentResourceImage);

    console.log("Successfully loaded data for " + i)

}

//checks if player has tools or not
if (data.tools.ironPickaxe == true) {
    document.getElementById('ironPickaxeCraft').style.display = 'none';
}
if (data.tools.ironAxe == true) {
    document.getElementById('ironAxeCraft').style.display = 'none';
}
if (data.tools.ironHammer == true) {
    document.getElementById('ironHammerCraft').style.display = 'none';
}

const loadingTime = Date.now() - startLoading;
console.log("Loaded successfully in " + loadingTime + " ms.")