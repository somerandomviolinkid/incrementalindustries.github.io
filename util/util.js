//what do you think this does
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

//new resource creation stuff
let newResources = resources;
let newData = data;

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

    resourceName = new newResource(unit, title, singular, tag, desc);
    newResources.append(newResource);
    console.log(newResources);

    resourceName = new newResourceData();
    newData.append(resourceName);
    console.log(newData);
}
    
function exportNewResources() {
    //exports json file that you can copy paste into
    resources.append(newResources);
    data.resources.append(newData);

    const json0 = resources;
    const fileName0 = "newResources.json";
    const a0 = document.createElement('a');
    const type0 = fileName0.split(".").pop();
    a0.href = URL.createObjectURL(new Blob([json0], { type: `text/${type0 === "txt" ? "plain" : type0}` }));
    a0.download = fileName0;
    a0.click();

    const json1 = data;
    const fileName1 = "newData.json";
    const a1 = document.createElement('a');
    const type1 = fileName1.split(".").pop();
    a1.href = URL.createObjectURL(new Blob([json1], { type: `text/${type1 === "txt" ? "plain" : type1}` }));
    a1.download = fileName1;
    a1.click();

}