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
    let singular = document.getElementById("singularInput").checked;
    let tag = document.getElementById("tagInput").value;
    let desc = document.getElementById("descInput").value;

    newResources[resourceName] = new newResource(unit, title, singular, tag, desc);
    Object.assign(newResources, resourceName);
    console.log(newResources);

    newData[resourceName] = new newResourceData();
    Object.assign(newData, resourceName);
    console.log(newData);
}
    
function exportNewResources() {
    //exports json file that you can copy paste into
    Object.assign(resources, newResources);
    Object.assign(data.resources, newData);

    const json0 = JSON.stringify(resources);
    const fileName0 = "newResources.json";
    const a0 = document.createElement('a');
    const type0 = fileName0.split(".").pop();
    a0.href = URL.createObjectURL(new Blob([json0], { type: `text/${type0 === "txt" ? "plain" : type0}` }));
    a0.download = fileName0;
    a0.click();

    const json1 = JSON.stringify(data);
    const fileName1 = "newData.json";
    const a1 = document.createElement('a');
    const type1 = fileName1.split(".").pop();
    a1.href = URL.createObjectURL(new Blob([json1], { type: `text/${type1 === "txt" ? "plain" : type1}` }));
    a1.download = fileName1;
    a1.click();

}