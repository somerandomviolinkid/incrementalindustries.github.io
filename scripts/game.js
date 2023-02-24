//all of the manual beginning game stuff

function craftTool(toolName, buttonName) {
    if (toolName === 'pickaxe') {
        if (data.resources.wood.amount >= 1 && data.resources.moltenIron.amount >= 1) {
            data.stats.mineAmount = 2.5;
            data.tools.ironPickaxe = true;

            data.resources.wood.amount -= 1;
            data.resources.moltenIron.amount -= 1;

            updateResourceCount('wood');
            updateResourceCount('moltenIron');

            document.getElementById(buttonName).style.display = 'none';
        }
    }
}

function mineRock() {
    const z = randomNumber(data.stats.mineAmount * 0.75, data.stats.mineAmount * 1.25);
    data.resources.rock.amount += z;

    disableButton('mineRock', 1000);
    updateResourceCount('rock');
    const visualGainData = { amountGained: z, resourceName: 'rock' }
    visualGains(visualGainData);
}

function chopWood() {
    const z = randomNumber(data.stats.chopAmount * 0.75, data.stats.chopAmount * 1.25);
    data.resources.wood.amount += z;

    disableButton('chopWood', 1000);
    updateResourceCount('wood');
    const visualGainData = { amountGained: z, resourceName: 'wood' }
    visualGains(visualGainData);
}

function crushRock() {
    if (data.resources.rock.amount >= data.stats.crushAmount) {
        let totalCrushedOres = 0;
        for (i in rocksIndex) {
            const z = randomNumber(rocksIndex[i].chanceNormal * 0.75, rocksIndex[i].chanceNormal * 1.25);
            const x = rocksIndex[i].title.toString()
            data.resources[x].amount += z;
            totalCrushedOres += z;
            updateResourceCount(x);
        }

        data.resources.stone.amount += (data.stats.crushAmount - totalCrushedOres) * 0.75;
        data.resources.rock.amount -= data.stats.crushAmount;

        disableButton('crushRock', 1000);

        updateResourceCount('rock');
        updateResourceCount('stone');

        console.log("Crushed rock");
    }

}

function smeltOre(oreType) {
    if (data.resources[oreType].amount >= data.stats.smeltAmount && data.resources.coal.amount >= data.stats.smeltAmount) {
        data.resources[oreType].amount -= data.stats.smeltAmount;
        data.resources.coal.amount -= data.stats.smeltAmount;

        for (x in rocksIndex[oreType].smeltYields) {
            console.log(rocksIndex[oreType].smeltYields[x].title);
            data.resources[rocksIndex[oreType].smeltYields[x].title].amount += rocksIndex[oreType].smeltYields[x].amount * data.stats.smeltAmount;
            updateResourceCount(rocksIndex[oreType].smeltYields[x].title);
        }

        updateResourceCount('coal');
        updateResourceCount(oreType);

        disableButton('smeltMagnetite', 5000);
        disableButton('smeltChalcopyrite', 5000);
        disableButton('smeltPentlandite', 5000);
        disableButton('smeltIlmenite', 5000);

        console.log("Smelted rock");
    }
}

