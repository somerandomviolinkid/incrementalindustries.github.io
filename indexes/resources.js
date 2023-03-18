let resources = {
    //raw resources
    money: {
        unit: '',
        singular: false,
        title: 'Money',
        tag: 'resource'
    },
    rock: {
        unit: 'kg',
        singular: false,
        title: 'Rock',
        tag: 'resource'
    },
    stone: {
        unit: 'kg',
        singular: false,
        title: 'Stone',
        tag: 'resource'
    },
    sand: {
        unit: 'kg',
        singular: false,
        title: 'Sand',
        tag: 'resource'
    },
    clay: {
        unit: 'kg',
        singular: false,
        title: 'Clay',
        tag: 'resource'
    },
    water: {
        unit: 'L',
        singular: false,
        title: 'Water',
        tag: 'resource'
    },
    coal: {
        unit: 'kg',
        singular: false,
        title: 'Coal',
        tag: 'resource'
    },
    charcoal: {
        unit: 'kg',
        singular: false,
        title: 'Charcoal',
        tag: 'resource'
    },
    oil: {
        unit: 'L',
        singular: false,
        title: 'Oil',
        tag: 'resource'
    },
    wood: {
        unit: 'kg',
        singular: false,
        title: 'Wood',
        tag: 'resource'
    },
    stick: {
        unit: '',
        singular: true,
        title: 'Stick',
        tag: 'resource'
    },
    rubber: {
        unit: 'kg',
        singular: false,
        title: 'Rubber',
        tag: 'resource',
        desc: 'Rubber can be used for insulating wires and manufacturing tires.'
    },
    //primitive thingies
    blastBricks: {
        unit: '',
        singular: true,
        title: 'Blast bricks',
        tag: 'primitive',
        desc: 'Some blast bricks that can be used to construct the blast furnace which is the main way of making early game steel.'
    },

    //minerals
    magnetite: {
        unit: 'kg',
        singular: false,
        title: 'Magnetite',
        tag: 'mineral'
    },
    chalcopyrite: {
        unit: 'kg',
        singular: false,
        title: 'Chalcopyrite',
        tag: 'mineral'
    },
    ilmenite: {
        unit: 'kg',
        singular: false,
        title: 'Ilmenite',
        tag: 'mineral'
    },
    pentlandite: {
        unit: 'kg',
        singular: false,
        title: 'Pentlandite',
        tag: 'mineral'
    },
    patronite: {
        unit: 'kg',
        singular: false,
        title: 'Patronite',
        tag: 'mineral'
    },
    chromite: {
        unit: 'kg',
        singular: false,
        title: 'Chromite',
        tag: 'mineral'
    },
    cassiterite: {
        unit: 'kg',
        singular: false,
        title: 'Cassiterite',
        tag: 'mineral'
    },
    bauxite: {
        unit: 'kg',
        singular: false,
        title: 'Bauxite',
        tag: 'mineral'
    },
    galena: {
        unit: 'kg',
        singular: false,
        title: 'Galena',
        tag: 'mineral'
    },
    acanthite: {
        unit: 'kg',
        singular: false,
        title: 'Acanthite',
        tag: 'mineral'
    },
    uraninite: {
        unit: 'kg',
        singular: false,
        title: 'Uraninite',
        tag: 'mineral'
    },
    sperrylite: {
        unit: 'kg',
        singular: false,
        title: 'Sperrylite',
        tag: 'mineral'
    },
    goldOre: {
        unit: 'kg',
        singular: false,
        title: 'Gold ore',
        tag: 'mineral'
    },

    //elemental metals
    moltenIron: {
        unit: 'kg',
        singular: false,
        title: 'Molten iron',
        tag: 'metal'
    },
    moltenCopper: {
        unit: 'kg',
        singular: false,
        title: 'Molten copper',
        tag: 'metal'
    },
    moltenNickel: {
        unit: 'kg',
        singular: false,
        title: 'Molten nickel',
        tag: 'metal'
    },
    moltenTitanium: {
        unit: 'kg',
        singular: false,
        title: 'Molten titanium',
        tag: 'metal'
    },
    moltenVanadium: {
        unit: 'kg',
        singular: false,
        title: 'Molten vanadium',
        tag: 'metal'
    },
    moltenChromium: {
        unit: 'kg',
        singular: false,
        title: 'Molten chromium',
        tag: 'metal'
    },
    moltenSilver: {
        unit: 'kg',
        singular: false,
        title: 'Molten silver',
        tag: 'metal'
    },
    moltenTin: {
        unit: 'kg',
        singular: false,
        title: 'Molten tin',
        tag: 'metal'
    },
    moltenAluminium: {
        unit: 'kg',
        singular: false,
        title: 'Molten aluminium',
        tag: 'metal'
    },
    moltenLead: {
        unit: 'kg',
        singular: false,
        title: 'Molten lead',
        tag: 'metal'
    },
    moltenUranium: {
        unit: 'kg',
        singular: false,
        title: 'Molten uranium',
        tag: 'metal'
    },
    moltenPlatinum: {
        unit: 'kg',
        singular: false,
        title: 'Molten platinum',
        tag: 'metal'
    },
    moltenGold: {
        unit: 'kg',
        singular: false,
        title: 'Molten gold',
        tag: 'metal'
    },
    //advanced metals
    moltenSteel: {
        unit: 'kg',
        singular: false,
        title: 'Molten steel',
        tag: 'metal'
    },
    moltenCupronickel: {
        unit: 'kg',
        singular: false,
        title: 'Molten cupronickel',
        tag: 'metal'
    },
    moltenKanthal: {
        unit: 'kg',
        singular: false,
        title: 'Molten kanthal',
        tag: 'metal'
    },
    moltenNichrome: {
        unit: 'kg',
        singular: false,
        title: 'Molten nichrome',
        tag: 'metal'
    },
    moltenStainlessSteel: {
        unit: 'kg',
        singular: false,
        title: 'Molten stainless steel',
        tag: 'metal'
    },
    //metal products
    smallIronPlate: {
        unit: '',
        singular: true,
        title: 'Small iron plate',
        tag: 'metalProducts'
    },
    mediumIronPlate: {
        unit: '',
        singular: true,
        title: 'Medium iron plate',
        tag: 'metalProducts'
    },
    largeIronPlate: {
        unit: '',
        singular: true,
        title: 'Large iron plate',
        tag: 'metalProducts'
    },
    smallCopperPlate: {
        unit: '',
        singular: true,
        title: 'Small copper plate',
        tag: 'metalProducts'
    },
    mediumCopperPlate: {
        unit: '',
        singular: true,
        title: 'Medium copper plate',
        tag: 'metalProducts'
    },
    largeCopperPlate: {
        unit: '',
        singular: true,
        title: 'Large copper plate',
        tag: 'metalProducts'
    },
    copperFoil: {
        unit: 'kg',
        singular: false,
        title: 'Copper foil',
        tag: 'metalProducts',
        desc: 'A very thin sheet of copper metal, useful for electronics and other small applications.'
    },
    copperWire: {
        unit: '',
        singular: true,
        title: 'Copper wire',
        tag: 'metalProducts',
        desc: 'A long piece of copper wire. Copper wire is useful for electronic machines and transferring power.'
    },
    insulatedCopperWire: {
        unit: '',
        singular: true,
        title: 'Insulated copper wire',
        tag: 'metalProducts',
        desc: 'A piece of insulated copper wire, now you can touch it without being electrocuted!'
    },
    magneticIronRod: {
        unit: '',
        singular: true,
        title: 'Magnetic iron rod',
        tag: 'metalProducts'
    },
    //machine parts
    basicMachineHull: {
        unit: '',
        singular: true,
        title: 'Basic machine hull',
        tag: 'machinePart',
        desc: 'A basic machine hull made from iron plates. Right now it doesn\'t do much but by adding wires it will be far more useful.'
    },
    basicMachineCase: {
        unit: '',
        singular: true,
        title: 'Basic machine case',
        tag: 'machinePart',
        desc: 'A basic machine case. Now that it has wires for electrical inputs, it can be used for basic machines.'
    },
    ironRod: {
        unit: '',
        singular: true,
        title: 'Iron rod',
        tag: 'machinePart',
    },
    steelRod: {
        unit: '',
        singular: true,
        title: 'Steel rod',
        tag: 'machinePart',
    },
    steelDrillBit: {
        unit: '',
        singular: true,
        title: 'Steel drill bit',
        tag: 'machinePart',
        desc: 'A steel drill bit that can cut into hard rock to extract valuable ores.'
    },
    //electronics
    electricMotor: {
        unit: '',
        singular: true,
        title: 'Electric motor',
        tag: 'electronic',
        desc: 'A simple electric motor made with a small magnet that can drives basic machinery.'
    },
    transistor: {
        unit: '',
        title: 'Transistor',
        singular: true,
        tag: 'electronic'
    },
    register8: {
        unit: '',
        title: '8-bit register',
        singular: true,
        tag: 'electronic'
    },
    //chemicals
    sulfuricAcid: {
        unit: 'L',
        singular: false,
        title: 'Sulfuric acid',
        tag: 'chemical',
        desc: 'A strong but easily manufactured industrial acid that has many different useful applications.',
        chemicalFormula: 'H2SO4'
    },
    titaniumTetrachloride: {
        unit: 'L'    ,    
        singular: false,
        title: 'Titanium tetrachloride',
        tag: 'chemical',
        chemicalFormula: 'TiCl4'
    }
}