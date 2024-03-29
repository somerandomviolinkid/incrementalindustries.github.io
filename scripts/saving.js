function saveData() {
    //saves stuff to local storage
    window.localStorage.setItem("saveKey", JSON.stringify({
        data
    }))
    console.log("saved data");

    function hideSaveIndicator() {
        document.getElementById("saveIndicator").style.display = "none";
    }

    document.getElementById("saveIndicator").style.display = "inline";
    setTimeout(hideSaveIndicator, 1000);
}

function resetData() {
    //do this if your workers go on strike
    localStorage.clear();
    location.reload();
}


function loadData() {
    //loads stuff from local storage
    const saveString = localStorage.getItem("saveKey");
    if (!saveString) {
        highlightTab("tutorialTabLink");
        return;
    }
    const save = JSON.parse(saveString);
    data = save.data;
}

loadData();

//henryL's code that i borrowed
function exportData() {
    //exports data as json file i think
    saveData();
    const json = localStorage.getItem("saveKey");
    const fileName = "save.json";
    const a = document.createElement('a');
    const type = fileName.split(".").pop();
    a.href = URL.createObjectURL(new Blob([json], { type: `text/${type === "txt" ? "plain" : type}` }));
    a.download = fileName;
    a.click();
}

async function importData() {
    //imports data from json file
    try {
        const [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        const contents = await file.text();
        localStorage.setItem("saveKey", contents);
        loadData();
        saveData();
        location.reload();
    } catch (err) { }
}