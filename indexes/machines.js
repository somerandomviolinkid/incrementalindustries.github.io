const machines = {    
    //furnaces
    castingBasin: {
        unit: '',
        singular: true,
        title: 'Casting basin',
        tag: 'machines',
        desc: 'A stone basin where you can pour molten metal to create metal plates, which will be useful for many different applications.',
        oneTime: true,
        toolUnlock: true,
        toolName: 'castingBasin'
    },
    stoneFurnace: {
        unit: '',
        singular: true,
        title: 'Stone furnace',
        tag: 'machines',
        desc: 'A simple stone furnace. It doesn\'t smelt ore very quickly but later on you can upgrade it into more efficient furnaces.',
        oneTime: true,
        boost: true,
        boostName: 'smeltAmount',
        boostAmount: 1
    },
    copperFurnace: {
        unit: '',
        singular: true,
        title: 'Copper furnace',
        tag: 'machines',
        desc: 'An improved version of the stone furnace. It smelts ore in larger quantites than the stone furnace.',
        oneTime: true,
        boost: true,
        boostName: 'smeltAmount',
        boostAmount: 2
    },
    ironFurnace: {
        unit: '',
        singular: true,
        title: 'Iron furnace',
        tag: 'machines',
        desc: 'The best primitive smelting device. It both smelts ores faster and has a higher fuel efficiency.',
        oneTime: true,
        boost: true,
        boostName: 'smeltAmount',
        boostAmount: 5
    },
    //actual machines
    wiremillLV: {
        unit: '',
        singular: true,
        title: 'LV wiremill',
        desc: 'A more efficient way of cutting wires using the power of electricity.'
    },
    drillLV: {
        unit: '',
        singular: true,
        title: 'LV drilling machine',
        desc: 'An automatic mining drill that converts power into pure mining ability, so you never have to manually mine again.'
    },
}