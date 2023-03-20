let data = {
    resources: {
        //resources
        money: {
            amount: 0,
            crafted: false,
        },
        rock: {
            amount: 0,
            crafted: false,
        },
        stone: {
            amount: 8,
            crafted: false,
        },
        sand: {
            amount: 0,
            crafted: false,
        },
        clay: {
            amount: 0,
            crafted: false,
        },
        water: {
            amount: 0,
            crafted: false,
        },
        coal: {
            amount: 0,
            crafted: false,
        },
        charcoal: {
            amount: 0,
            crafted: false,
        },
        oil: {
            amount: 0,
            crafted: false,
        },
        wood: {
            amount: 0,
            crafted: false,
        },
        stick: {
            amount: 0,
            crafted: false,
        },
        rubber: {
            amount: 0,
            crafted: false,
        },
        //primitive
        blastBricks: {
            amount: 0,
            crafted: false,
        },
        //minerals
        magnetite: {
            amount: 0,
            crafted: false,
        },
        chalcopyrite: {
            amount: 0,
            crafted: false,
        },
        ilmenite: {
            amount: 0,
            crafted: false,
        },
        pentlandite: {
            amount: 0,
            crafted: false,
        },
        patronite: {
            amount: 0,
            crafted: false,
        },
        chromite: {
            amount: 0,
            crafted: false,
        },
        cassiterite: {
            amount: 0,
            crafted: false,
        },
        bauxite: {
            amount: 0,
            crafted: false,
        },
        galena: {
            amount: 0,
            crafted: false,
        },
        acanthite: {
            amount: 0,
            crafted: false,
        },
        uraninite: {
            amount: 0,
            crafted: false,
        },
        sperrylite: {
            amount: 0,
            crafted: false,
        },
        goldOre: {
            amount: 0,
            crafted: false,
        },
        //metals
        moltenIron: {
            amount: 0,
            crafted: false,
        },
        moltenCopper: {
            amount: 0,
            crafted: false,
        },
        moltenNickel: {
            amount: 0,
            crafted: false,
        },
        moltenTitanium: {
            amount: 0,
            crafted: false,
        },
        moltenVanadium: {
            amount: 0,
            crafted: false,
        },
        moltenChromium: {
            amount: 0,
            crafted: false,
        },
        moltenSilver: {
            amount: 0,
            crafted: false,
        },
        moltenTin: {
            amount: 0,
            crafted: false,
        },
        moltenAluminium: {
            amount: 0,
            crafted: false,
        },
        moltenLead: {
            amount: 0,
            crafted: false,
        },
        moltenUranium: {
            amount: 0,
            crafted: false,
        },
        moltenPlatinum: {
            amount: 0,
            crafted: false,
        },
        moltenGold: {
            amount: 0,
            crafted: false,
        },
        //advanced metals
        moltenSteel: {
            amount: 0,
            crafted: false,
        },
        moltenCupronickel: {
            amount: 0,
            crafted: false,
        },
        moltenKanthal: {
            amount: 0,
            crafted: false,
        },
        moltenNichrome: {
            amount: 0,
            crafted: false,
        },
        moltenStainlessSteel: {
            amount: 0,
            crafted: false,
        },
        //metal products
        smallIronPlate: {
            amount: 0,
            crafted: false,
        },
        mediumIronPlate: {
            amount: 0,
            crafted: false,
        },
        largeIronPlate: {
            amount: 0,
            crafted: false,
        },
        smallCopperPlate: {
            amount: 4,
            crafted: false,
        },
        mediumCopperPlate: {
            amount: 0,
            crafted: false,
        },
        largeCopperPlate: {
            amount: 0,
            crafted: false,
        },
        copperFoil: {
            amount: 0,
            crafted: false,
        },
        copperWire: {
            amount: 0,
            crafted: false,
        },
        insulatedCopperWire: {
            amount: 0,
            crafted: false,
        },
        magneticIronRod: {
            amount: 0,
            crafted: false,
        },
        basicMachineHull: {
            amount: 0,
            crafted: false,
        },
        basicMachineCase: {
            amount: 0,
            crafted: false,
        },
        ironRod: {
            amount: 0,
            crafted: false,
        },
        steelRod: {
            amount: 0,
            crafted: false,
        },
        steelDrillBit: {
            amount: 0,
            crafted: false,
        },
        //electronics
        transistor: {
            amount: 0,
            crafted: false,
        },
        register8: {
            amount: 0,
            crafted: false,
        },
        electricMotor: {
            amount: 0,
            crafted: false,
        },
        //chemicals
        sulfuricAcid: {
            amount: 0,
            crafted: false,
        },
        titaniumTetrachloride: {
            amount: 0,
            crafted: false,
        },
        //primitive machines
        castingBasin: {
            crafted: false,
            inInventory: false
        },
        stoneFurnace: {
            crafted: false,
            inInventory: false
        },
        copperFurnace: {
            crafted: false,
            inInventory: false
        },
        ironFurnace: {
            crafted: false,
            inInventory: false
        },
        //actual machines
        wiremillLV: {
            crafted: false,
            inInventory: false
        },
        drillLV: {
            crafted: false,
            inInventory: false
        }
    },
    stats: {
        mineAmount: 1,
        chopAmount: 1,
        crushAmount: 1,
        smeltAmount: 0
    },
    tools: {
        //manual tools go hand, wood, stone, tin, copper, iron, lead, steel
        pickaxe: [true, false, false, false, false, false, false, false],
        axe: [true, false, false, false, false, false, false, false],
        hammer: [true, false, false, false, false, false, false, false],

        castingBasin: [false, false],

        //industrial tools are iron only
        wireCutters: false,
        wrench: false,
        screwdriver: false,
        file: false
    },
    buildings:{
        primitiveBlastFurnace: {
            unlocked: true,
            built: false
        },
        electricBlastFurnace: {
            unlocked: true,
            built: false
        },
        cleanroom: {
            unlocked: true,
            built: false
        }
    }
}