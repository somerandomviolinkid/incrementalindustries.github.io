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
    patronite: {
        title: 'patronite',
        chanceNormal: 0.005,
        chanceVein: 0.02,
        smeltYields: {
            yield1: {
                title: 'moltenVanadium',
                amount: 0.25
            },
        }
    },
    chromite: {
        title: 'chromite',
        chanceNormal: 0.004,
        chanceVein: 0.03,
        smeltYields: {
            yield1: {
                title: 'moltenIron',
                amount: 0.29
            },
            yield2: {
                title: 'moltenChromium',
                amount: 0.27
            },
        }
    },
    cassiterite: {
        title: 'cassiterite',
        chanceNormal: 0.012,
        chanceVein: 0.15,
        smeltYields: {
            yield1: {
                title: 'moltenTin',
                amount: 0.7
            },
        }
    },
    bauxite: {
        title: 'bauxite',
        chanceNormal: 0.01,
        chanceVein: 0.08,
        smeltYields: {
            yield1: {
                title: 'moltenAluminium',
                amount: 0.4
            },
        }
    },
    galena: {
        title: 'galena',
        chanceNormal: 0.008,
        chanceVein: 0.02,
        smeltYields: {
            yield1: {
                title: 'moltenLead',
                amount: 0.77
            },
        }
    },
    acanthite: {
        title: 'acanthite',
        chanceNormal: 0.005,
        chanceVein: 0.018,
        smeltYields: {
            yield1: {
                title: 'moltenSilver',
                amount: 0.78
            },
        }
    },
    //others
    coal: {
        title: 'coal',
        chanceNormal: 0.1,
        chanceVein: 0.25
    },
    sand: {
        title: 'sand',
        chanceNormal: 0.08,
        chanceVein: 0.4
    }
}

const minerals = ['magnetite', 'chalcopyrite', 'ilmenite', 'pentlandite', 'patronite', 'chromite', 'cassiterite', 'bauxite', 'galena', 'acanthite']