//what do you think this does
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

//new resource creation stuff
let newResources = {};
let newData = {};

class newResource {
    constructor(unit, title, singular, tag, desc) {
        this.unit = unit;
        this.title = title;
        this.singular = singular;
        this.tag = tag;
        this.desc = desc;
    }
}

class newResourceData {
    constructor() {
        this.amount = 0;
        this.crafted = false;
    }
}

function createNewResource() {
    let resourceName = document.getElementById("resourceNameInput").value;
    let unit = document.getElementById("unitNameInput").value;
    let title = document.getElementById("titleInput").value;
    let singular = document.getElementById("singularInput").value;
    let tag = document.getElementById("tagInput").value;
    let desc = document.getElementById("descInput").value;

    const resourceResources = new newResource(unit, title, singular, tag, desc);
    newResources = Object.assign({resourceName: resourceResources});
    console.log(resourceResources);

    const resourceData = new newResourceData();
    newData = Object.assign({resourceName: resourceData});
    console.log(resourceData);
}
    
function exportNewResources() {
    //exports json file that you can copy paste into

    resources = Object.assign(newResources);
    const fileName0 = "newResources.json";
    const a0 = document.createElement('a');
    const type0 = fileName0.split(".").pop();
    a0.href = URL.createObjectURL(new Blob([resources], { type: `text/${type0 === "txt" ? "plain" : type0}` }));
    a0.download = fileName0;
    a0.click();

    data.resources = Object.assign(newData);
    const fileName1 = "newData.json";
    const a1 = document.createElement('a');
    const type1 = fileName1.split(".").pop();
    a1.href = URL.createObjectURL(new Blob([data.resources], { type: `text/${type1 === "txt" ? "plain" : type1}` }));
    a1.download = fileName1;
    a1.click();

}