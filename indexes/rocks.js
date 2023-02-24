const rocksIndex = {
    //minerals
    magnetite: {
        title: 'magnetite',
        chanceNormal: 0.05,
        chanceVein: 0.2,
        smeltYields: {
            yield1: {
                title: 'moltenIron',
                amount: 0.65
            }
        }
    },
    chalcopyrite: {
        title: 'chalcopyrite',
        chanceNormal: 0.04,
        chanceVein: 0.18,
        smeltYields: {
            yield1: {
                title: 'moltenIron',
                amount: 0.27
            },
            yield2: {
                title: 'moltenCopper',
                amount: 0.3
            }
        }
    },
    ilmenite: {
        title: 'ilmenite',
        chanceNormal: 0.008,
        chanceVein: 0.05,
        smeltYields: {
            yield1: {
                title: 'moltenIron',
                amount: 0.32
            },
            yield2: {
                title: 'moltenTitanium',
                amount: 0.27
            }
        }
    },
    pentlandite: {
        title: 'pentlandite',
        chanceNormal: 0.025,
        chanceVein: 0.15,
        smeltYields: {
            yield1: {
                title: 'moltenIron',
                amount: 0.35
            },
            yield2: {
                title: 'moltenNickel',
                amount: 0.37
            }
        }
    },
    //others
    coal: {
        title: 'coal',
        chanceNormal: 0.1,
        chanceVein: 0.25
    }
}