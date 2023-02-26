const craftingRecipes = {
    smallIronPlate: {
        components: {
            component0: {
                title: 'moltenIron',
                amount: 12.5
            }
        },
        tools: {
            tool1: {
                title: 'hammer',
                display: 'iron hammer',
                tier: 4
            }
        },
        info: {
            yield: 1,
            timeS: 2.5,
            title: 'Small iron plate'
        }
    },
    mediumIronPlate: {
        components: {
            component0: {
                title: 'moltenIron',
                amount: 50
            }
        },
        tools: {
            tool1: {
                title: 'hammer', 
                display: 'iron hammer',
                tier: 4
            }
        },
        info: {
            yield: 1,
            timeS: 10,
            title: 'Medium iron plate'
        }
    },
    largeIronPlate: {
        components: {
            component0: {
                title: 'moltenIron',
                amount: 200
            }
        },
        tools: {
            tool1: {
                title: 'hammer',
                display: 'iron hammer',
                tier: 4
            }
        },
        info: {
            yield: 1,
            timeS: 40,
            title: 'Large iron plate'
        }
    },
    smallCopperPlate: {
        components: {
            component0: {
                title: 'moltenCopper',
                amount: 14
            }
        },
        tools: {
            tool1: {
                title: 'hammer',
                display: 'iron hammer',
                tier: 4
            }
        },
        info: {
            yield: 1,
            timeS: 2.5,
            title: 'Small iron plate'
        }
    },
    mediumCopperPlate: {
        components: {
            component0: {
                title: 'moltenCopper',
                amount: 56
            }
        },
        tools: {
            tool1: {
                title: 'hammer',
                display: 'iron hammer',
                tier: 4
            }
        },
        info: {
            yield: 1,
            timeS: 10,
            title: 'Medium copper plate'
        }
    },
    largeCopperPlate: {
        components: {
            component0: {
                title: 'moltenCopper',
                amount: 224
            }
        },
        tools: {
            tool1: {
                title: 'hammer',
                display: 'iron hammer',
                tier: 4
            }
        },
        info: {
            yield: 1,
            timeS: 40,
            title: 'Large copper plate'
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
                display: 'iron hammer',
                tier: 4
            }
        },
        info: {
            yield: 2,
            timeS: 5,
            title: 'Copper foil'
        }
    },
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