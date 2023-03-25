//all of the manual one time thingy stuff i dont fucking know
function craftTool(toolName, boostName, toolMaterial, toolTier, buttonName, nextButtonName) {
    if (data.resources[toolMaterial].amount >= toolCraftingRecipes[toolName].materialAmount && data.resources.stick.amount >= toolCraftingRecipes[toolName].stickAmount) {

        data.resources[toolMaterial].amount -= toolCraftingRecipes[toolName].materialAmount;
        data.resources.stick.amount -= toolCraftingRecipes[toolName].stickAmount;

        data.tools[toolName][toolTier] = true;
        data.stats[boostName] = toolsBoost[toolTier];

        document.getElementById(buttonName).style.display = 'none';

        if (nextButtonName !== undefined) {
            document.getElementById(nextButtonName).style.display = 'block';
        }

        updateInformationDiv();
        updateResourceCount('stick');
        updateResourceCount(toolMaterial);
    } else {
        notEnoughResourcesAlert('toolCraftingAlert');
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

function crushRock() {
    if (data.resources.rock.amount >= data.stats.crushAmount) {

        let totalCrushedOres = 0;
        let visualGainData2 = [];

        for (i in rocksIndex) {

            const z = randomNumber(rocksIndex[i].chanceNormal * 0.75 * data.stats.crushAmount, rocksIndex[i].chanceNormal * 1.25 * data.stats.crushAmount);
            const x = rocksIndex[i].title.toString();

            data.resources[x].amount += z;
            totalCrushedOres += z;

            updateResourceCount(x);
            visualGainData2.push({ amountGained: z, resourceName: rocksIndex[i].title.toString(), isPositive: true })
        }



        data.resources.stone.amount += (data.stats.crushAmount - totalCrushedOres) * 0.75;
        data.resources.rock.amount -= data.stats.crushAmount;

        visualGainData2.push({ amountGained: (data.stats.crushAmount - totalCrushedOres) * 0.75, resourceName: 'stone', isPositive: true });
        visualGainData2.push({ amountGained: (data.stats.crushAmount), resourceName: 'rock', isPositive: false });

        visualGains(visualGainData2);

        disableButton('crushRock', 1000);

        updateResourceCount('rock');
        updateResourceCount('stone');

    } else {
        notEnoughResourcesAlert('resourcesAlert');
    }

}

function smeltOre(oreType) {
    if (data.resources[oreType].amount >= data.stats.smeltAmount && data.resources[fuelSource].amount >= data.stats.smeltAmount && data.stats.smeltAmount > 0) {

        let visualGainData3 = [];

        data.resources[oreType].amount -= data.stats.smeltAmount;
        data.resources[fuelSource].amount -= data.stats.smeltAmount;

        visualGainData3.push({
            amountGained: data.stats.smeltAmount,
            resourceName: oreType, isPositive: false
        });

        visualGainData3.push({
            amountGained: data.stats.smeltAmount,
            resourceName: fuelSource, isPositive: false
        });

        for (x in rocksIndex[oreType].smeltYields) {

            data.resources[rocksIndex[oreType].smeltYields[x].title].amount += rocksIndex[oreType].smeltYields[x].amount * data.stats.smeltAmount;
            updateResourceCount(rocksIndex[oreType].smeltYields[x].title);

            visualGainData3.push({
                amountGained: (rocksIndex[oreType].smeltYields[x].amount * data.stats.smeltAmount),
                resourceName: rocksIndex[oreType].smeltYields[x].title,
                isPositive: true
            });

        }

        updateResourceCount(fuelSource);
        updateResourceCount(oreType);

        visualGains(visualGainData3);

        const smeltButtons = document.getElementsByClassName("smeltButtons");
        for (let l = 0; l < smeltButtons.length; l++) {
            disableButton(smeltButtons[l].id, 1000);
        }
    } else {
        notEnoughResourcesAlert('resourcesAlert');
    }
}

function chopWood() {
    const z = randomNumber(data.stats.chopAmount * 0.75, data.stats.chopAmount * 1.25);
    data.resources.wood.amount += z;

    disableButton('chopWood', 1000);
    updateResourceCount('wood');
    const visualGainData4 = [{ amountGained: z, resourceName: 'wood', isPositive: true }];
    visualGains(visualGainData4);
}

function smashWood() {
    if (data.resources.wood.amount >= 1 && data.resources.stone.amount >= 0.25) {
        const z = Math.floor(randomNumber(3, 5));
        data.resources.stick.amount += z;

        data.resources.wood.amount -= 1;
        data.resources.stone.amount -= 0.25;

        disableButton('smashWood', 1000);

        updateResourceCount('wood');
        updateResourceCount('stone');
        updateResourceCount('stick');

        const visualGainData5 = [
            { amountGained: z, resourceName: 'stick', isPositive: true },
            { amountGained: 1, resourceName: 'wood', isPositive: false },
            { amountGained: 0.25, resourceName: 'stone', isPositive: false }
        ]

        visualGains(visualGainData5);
    } else {
        notEnoughResourcesAlert('resourcesAlert');
    }
}

function cookWood() {
    if (data.resources.wood.amount * 2 >= data.stats.smeltAmount && data.resources[fuelSource].amount >= data.stats.smeltAmount && data.stats.smeltAmount > 0) {
        const z = randomNumber(data.stats.smeltAmount * 1.25, data.stats.smeltAmount * 1.75);

        const visualGainData6 = [
            { amountGained: z, resourceName: 'charcoal', isPositive: true },
            { amountGained: data.stats.smeltAmount, resourceName: fuelSource, isPositive: false }
        ]

        visualGains(visualGainData6);
        disableButton('cookWood', 1000);

        updateResourceCount(fuelSource);
        updateResourceCount('charcoal');
    } else {
        notEnoughResourcesAlert('resourcesAlert');
    }
}

function getWater() {
    const z = randomNumber(1, 2);
    data.resources.water.amount += z;

    const visualGainData7 = [{ amountGained: z, resourceName: 'water', isPositive: true }]
    visualGains(visualGainData7);

    disableButton('getWater', 1000);
    updateResourceCount('water');
}

function smeltSteel() {
    if (data.resources.moltenIron > data.buildings.primitiveBlastFurnace.smeltAmount) {
        const visualGainData8 = [
            { amountGained: z, resourceName: 'molten steel', isPositive: true },
            { amountGained: blastFurnaceAmount, resourceName: fuelSource, isPositive: false }
        ]
        visualGains(visualGainData8);
    }
}

//building functions

//primitive blast furnace
function runPrimtiveBlastFurnace(ore) {
    if (data.resources[ore].amount >= data.buildings.primitiveBlastFurnace.smeltAmount && data.resources[data.settings.fuelSource].amount >= data.buildings.primitiveBlastFurnace.smeltAmount) {
        data.resources[ore].amount -= data.buildings.primitiveBlastFurnace.smeltAmount;
        data.resources[data.settings.fuelSource].amount -= data.buildings.primitiveBlastFurnace.smeltAmount;
    }
}