const craftingRecipes = {
    stoneFurnace: {
        components: {
            component0: {
                title: 'stone',
                amount: 5
            }
        },
        info: {
            yield: 1,
            timeS: 4,
            title: 'Stone furnace'
        }
    },
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
                display: 'iron hammer or above',
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
                display: 'iron hammer or above',
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
                display: 'iron hammer or above',
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
                display: 'iron hammer or above',
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
                display: 'iron hammer or above',
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
                display: 'iron hammer or above',
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
                display: 'iron hammer or above',
                tier: 4
            }
        },
        info: {
            yield: 2,
            timeS: 5,
            title: 'Copper foil'
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
            title: 'Copper wire'
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
            title: 'Insulated copper wire'
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
            title: 'Basic machine hull'
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
            title: 'Basic machine case'
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