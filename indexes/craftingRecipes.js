const craftingRecipes = {
    smallIronPlate: {
        components: {
            component0: {
                title: 'moltenIron',
                amount: 5
            }
        },
        tools: {
            tool1: {
                title: 'castingBasin',
                display: 'casting basin',
                tier: 0
            }
        },
        info: {
            yield: 1,
            timeS: 2.5,
            title: 'Small iron plate',
            type: 'manual'
        }
    },
    mediumIronPlate: {
        components: {
            component0: {
                title: 'moltenIron',
                amount: 20
            }
        },
        tools: {
            tool1: {
                title: 'castingBasin',
                display: 'casting basin',
                tier: 0
            }
        },
        info: {
            yield: 1,
            timeS: 10,
            title: 'Medium iron plate',
            type: 'manual'
        }
    },
    largeIronPlate: {
        components: {
            component0: {
                title: 'moltenIron',
                amount: 80
            }
        },
        tools: {
            tool1: {
                title: 'castingBasin',
                display: 'casting basin',
            }
        },
        info: {
            yield: 1,
            timeS: 40,
            title: 'Large iron plate',
            type: 'manual'
        }
    },
    smallCopperPlate: {
        components: {
            component0: {
                title: 'moltenCopper',
                amount: 5.6
            }
        },
        tools: {
            tool1: {
                title: 'castingBasin',
                display: 'casting basin',
            }
        },
        info: {
            yield: 1,
            timeS: 2.5,
            title: 'Small copper plate',
            type: 'manual'
        }
    },
    mediumCopperPlate: {
        components: {
            component0: {
                title: 'moltenCopper',
                amount: 22.4
            }
        },
        tools: {
            tool1: {
                title: 'castingBasin',
                display: 'casting basin',
            }
        },
        info: {
            yield: 1,
            timeS: 10,
            title: 'Medium copper plate',
            type: 'manual'
        }
    },
    largeCopperPlate: {
        components: {
            component0: {
                title: 'moltenCopper',
                amount: 89.6
            }
        },
        tools: {
            tool1: {
                title: 'castingBasin',
                display: 'casting basin',
            }
        },
        info: {
            yield: 1,
            timeS: 40,
            title: 'Large copper plate',
            type: 'manual'
        }
    },
    copperFoil: {
        components: {
            component0: {
                title: 'smallCopperPlate',
                amount: 1
            }
        },
        tools: {
            tool1: {
                title: 'hammer',
                display: 'iron hammer or above',
                tier: 4
            }
        },
        info: {
            yield: 2,
            timeS: 5,
            title: 'Copper foil',
            type: 'manual'
        }
    },
    copperWire: {
        components: {
            component0: {
                title: 'smallCopperPlate',
                amount: 1
            }
        },
        tools: {
            tool1: {
                title: 'wireCutters',
                display: 'wire cutters',
                tier: 0
            }
        },
        info: {
            yield: 1,
            timeS: 2,
            title: 'Copper wire',
            type: 'manual'
        }
    },
    insulatedCopperWire: {
        components: {
            component0: {
                title: 'copperWire',
                amount: 1
            },
            component1: {
                title: 'rubber',
                amount: .2
            }
        },
        tools: {
            tool1: {
                title: 'wireCutters',
                display: 'wire cutters',
                tier: 0
            }
        },
        info: {
            yield: 8,
            timeS: 5,
            title: 'Insulated copper wire',
            type: 'manual'
        }
    },
    basicMachineHull: {
        components: {
            component0: {
                title: 'mediumIronPlate',
                amount: 6
            },
        },
        tools: {
            tool1: {
                title: 'wrench',
                display: 'wrench',
                tier: 0
            }
        },
        info: {
            yield: 1,
            timeS: 20,
            title: 'Basic machine hull',
            type: 'manual'
        }

    },
    basicMachineCase: {
        components: {
            component0: {
                title: 'basicMachineHull',
                amount: 1
            },
            component1: {
                title: 'insulatedCopperWire',
                amount: 2
            },
        },
        tools: {
            tool1: {
                title: 'wrench',
                display: 'wrench',
                tier: 0
            }
        },
        info: {
            yield: 1,
            timeS: 10,
            title: 'Basic machine case',
            type: 'manual'
        }
    },

    //primitive machines
    castingBasin: {
        components: {
            component0: {
                title: 'stone',
                amount: 5
            }
        },
        info: {
            yield: 1,
            timeS: 4,
            title: 'Casting basin',
            type: 'machine'
        }
    },
    stoneFurnace: {
        components: {
            component0: {
                title: 'stone',
                amount: 8
            }
        },
        info: {
            yield: 1,
            timeS: 10,
            title: 'Stone furnace',
            type: 'machine'
        }
    },
    copperFurnace: {
        components: {
            component0: {
                type: 'machine',
                title: 'stoneFurnace',
                amount: 1
            },
            component1: {
                title: 'smallCopperPlate',
                amount: 4
            }
        },
        info: {
            yield: 1,
            timeS: 10,
            title: 'Copper furnace',
            type: 'machine'
        }
    },
    ironFurnace: {
        components: {
            component0: {
                type: 'machine',
                title: 'copperFurnace',
                amount: 1
            },
            component1: {
                title: 'smallIronPlate',
                amount: 4
            }
        },
        info: {
            yield: 1,
            timeS: 10,
            title: 'Iron furnace',
            type: 'machine'
        }
    },
    blastBricks: {
        components: {
            component0: {
                title: 'clay',
                amount: 5
            },
            component1: {
                title: 'sand',
                amount: 5
            },
            component2: {
                title: 'water',
                amount: 2
            }
        },
        info: {
            yield: 2,
            timeS: 1,
            title: 'Blast bricks',
            type: 'machine'
        }
    }
}

const toolCraftingRecipes = {
    pickaxe: {
        materialAmount: 1,
        stickAmount: 1
    },
    axe: {
        materialAmount: 0.75,
        stickAmount: 1
    },
    hammer: {
        materialAmount: 0.5,
        stickAmount: 1
    }
}