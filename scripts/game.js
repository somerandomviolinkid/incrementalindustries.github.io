//all of the manual beginning game stuff

function craftTool(toolName, toolTier, buttonName) {
    if (data.resources[toolTier].amount >= toolCraftingRecipes[toolName].materialAmount && data.resources.wood.amount >= toolCraftingRecipes[toolName].woodAmount) {
        data.resources[toolTier].amount -= toolCraftingRecipes[toolName].materialAmount;
        data.resources.wood.amount -= toolCraftingRecipes[toolName].woodAmount;
        document.getElementById(buttonName).style.display = 'none';
    }
}

function mineRock() {
    const z = randomNumber(data.stats.mineAmount * 0.75, data.stats.mineAmount * 1.25);
    data.resources.rock.amount += z;

    disableButton('mineRock', 1000);
    updateResourceCount('rock');
    const visualGainData1 = [{ amountGained: z, resourceName: 'rock', isPositive: true }];
    visualGains(visualGainData1);
}

function chopWood() {
    const z = randomNumber(data.stats.chopAmount * 0.75, data.stats.chopAmount * 1.25);
    data.resources.wood.amount += z;

    disableButton('chopWood', 1000);
    updateResourceCount('wood');
    const visualGainData2 = [{ amountGained: z, resourceName: 'wood', isPositive: true }];
    visualGains(visualGainData2);
}

function crushRock() {
    if (data.resources.rock.amount >= data.stats.crushAmount) {

        let totalCrushedOres = 0;
        let visualGainData3 = [];

        for (i in rocksIndex) {

            const z = randomNumber(rocksIndex[i].chanceNormal * 0.75, rocksIndex[i].chanceNormal * 1.25);
            const x = rocksIndex[i].title.toString();

            data.resources[x].amount += z;
            totalCrushedOres += z;

            updateResourceCount(x);
            visualGainData3.push({ amountGained: z, resourceName: rocksIndex[i].title.toString(), isPositive: true })
        }



        data.resources.stone.amount += (data.stats.crushAmount - totalCrushedOres) * 0.75;
        data.resources.rock.amount -= data.stats.crushAmount;

        visualGainData3.push({ amountGained: (data.stats.crushAmount - totalCrushedOres) * 0.75, resourceName: 'stone', isPositive: true });
        visualGainData3.push({ amountGained: (data.stats.crushAmount), resourceName: 'rock', isPositive: false });

        visualGains(visualGainData3);

        disableButton('crushRock', 1000);

        updateResourceCount('rock');
        updateResourceCount('stone');

    }

}

function smeltOre(oreType) {
    if (data.resources[oreType].amount >= data.stats.smeltAmount && data.resources.coal.amount >= data.stats.smeltAmount) {

        let visualGainData4 = [];

        data.resources[oreType].amount -= data.stats.smeltAmount;
        data.resources.coal.amount -= data.stats.smeltAmount;

        visualGainData4.push({ amountGained: data.stats.smeltAmount, resourceName: oreType, isPositive: false });
        visualGainData4.push({ amountGained: data.stats.smeltAmount, resourceName: 'coal', isPositive: false });

        for (x in rocksIndex[oreType].smeltYields) {

            data.resources[rocksIndex[oreType].smeltYields[x].title].amount += rocksIndex[oreType].smeltYields[x].amount * data.stats.smeltAmount;
            updateResourceCount(rocksIndex[oreType].smeltYields[x].title);

            visualGainData4.push({ amountGained: (rocksIndex[oreType].smeltYields[x].amount * data.stats.smeltAmount), resourceName: rocksIndex[oreType].smeltYields[x].title, isPositive: true });

        }

        updateResourceCount('coal');
        updateResourceCount(oreType);

        visualGains(visualGainData4);

        const smeltButtons = document.getElementsByClassName("smeltButtons");
        for (let l = 0; l < smeltButtons.length; l++) {
            disableButton(smeltButtons[l].id, 5000);
        }
    }
}

