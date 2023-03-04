let resources = {
    //raw resources
    money: {
        unit: '',
        title: 'Money',
        tag: 'resource'
    },
    rock: {
        unit: 'kg',
        title: 'Rock',
        tag: 'resource'
    },
    stone: {
        unit: 'kg',
        title: 'Stone',
        tag: 'resource'
    },
    sand: {
        unit: 'kg',
        title: 'Sand',
        tag: 'resource'
    },
    coal: {
        unit: 'kg',
        title: 'Coal',
        tag: 'resource'
    },
    charcoal: {
        unit: 'kg',
        title: 'Charcoal',
        tag: 'resource'
    },
    oil: {
        unit: 'L',
        title: 'Oil',
        tag: 'resource'
    },
    wood: {
        unit: 'kg',
        title: 'Wood',
        tag: 'resource'
    },
    stick: {
        unit: '',
        title: 'Stick',
        tag: 'resource'
    },
    rubber: {
        unit: 'kg',
        title: 'Rubber',
        tag: 'resource',
        desc: 'Rubber can be used for insulating wires and manufacturing tires.'
    },

    //minerals
    magnetite: {
        unit: 'kg',
        title: 'Magnetite',
        tag: 'mineral'
    },
    chalcopyrite: {
        unit: 'kg',
        title: 'Chalcopyrite',
        tag: 'mineral'
    },
    ilmenite: {
        unit: 'kg',
        title: 'Ilmenite',
        tag: 'mineral'
    },
    pentlandite: {
        unit: 'kg',
        title: 'Pentlandite',
        tag: 'mineral'
    },
    patronite: {
        unit: 'kg',
        title: 'Patronite',
        tag: 'mineral'
    },
    chromite: {
        unit: 'kg',
        title: 'Chromite',
        tag: 'mineral'
    },
    cassiterite: {
        unit: 'kg',
        title: 'Cassiterite',
        tag: 'mineral'
    },
    bauxite: {
        unit: 'kg',
        title: 'Bauxite',
        tag: 'mineral'
    },
    galena: {
        unit: 'kg',
        title: 'Galena',
        tag: 'mineral'
    },
    acanthite: {
        unit: 'kg',
        title: 'Acanthite',
        tag: 'mineral'
    },
    uraninite: {
        unit: 'kg',
        title: 'Uraninite',
        tag: 'mineral'
    },
    sperrylite: {
        unit: 'kg',
        title: 'Sperrylite',
        tag: 'mineral'
    },
    goldOre: {
        unit: 'kg',
        title: 'Gold ore',
        tag: 'mineral'
    },
    //metals
    moltenIron: {
        unit: 'kg',
        title: 'Molten iron',
        tag: 'metal'
    },
    moltenCopper: {
        unit: 'kg',
        title: 'Molten copper',
        tag: 'metal'
    },
    moltenNickel: {
        unit: 'kg',
        title: 'Molten nickel',
        tag: 'metal'
    },
    moltenTitanium: {
        unit: 'kg',
        title: 'Molten titanium',
        tag: 'metal'
    },
    moltenVanadium: {
        unit: 'kg',
        title: 'Molten vanadium',
        tag: 'metal'
    },
    moltenChromium: {
        unit: 'kg',
        title: 'Molten chromium',
        tag: 'metal'
    },
    moltenSilver: {
        unit: 'kg',
        title: 'Molten silver',
        tag: 'metal'
    },
    moltenTin: {
        unit: 'kg',
        title: 'Molten tin',
        tag: 'metal'
    },
    moltenAluminium: {
        unit: 'kg',
        title: 'Molten aluminium',
        tag: 'metal'
    },
    moltenLead: {
        unit: 'kg',
        title: 'Molten lead',
        tag: 'metal'
    },
    moltenUranium: {
        unit: 'kg',
        title: 'Molten uranium',
        tag: 'metal'
    },
    moltenPlatinum: {
        unit: 'kg',
        title: 'Molten platinum',
        tag: 'metal'
    },
    moltenGold: {
        unit: 'kg',
        title: 'Molten gold',
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
        title: 'Copper foil',
        tag: 'metalProducts',
        desc: 'A very thin sheet of copper metal, useful for electronics and other small applications.'
    },
    copperWire: {
        unit: '',
        title: 'Copper wire',
        tag: 'metalProducts',
        desc: 'A long piece of copper wire. Copper wire is useful for electronic machines and transferring power.'
    },
    insulatedCopperWire: {
        unit: '',
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
        title: 'Sulfuric acid',
        tag: 'chemical',
        desc: 'A strong but easily manufactured industrial acid that has many different useful applications.',
        chemicalFormula: 'H2SO4'
    },
    titaniumTetrachloride: {
        unit: 'L',
        title: 'Titanium tetrachloride',
        tag: 'chemical',
        chemicalFormula: 'TiCl4'
    }
}