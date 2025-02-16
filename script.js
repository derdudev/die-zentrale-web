const downloadButton = document.getElementById("dld-btn");
const arrowSVG = downloadButton.lastElementChild;

function download(url, title) {
    const a = document.createElement('a')
    a.href = url
    a.download = title;
    a.style.display = 'none';
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

downloadButton.onmousedown = () => {
    downloadButton.classList.add("main-button-clicked");
    arrowSVG.setAttribute("fill", "#000000");
    download("/assets/downloadable/die-zentrale.apk", "die-zentrale");
}

downloadButton.onmouseup = () => {
    downloadButton.classList.remove("main-button-clicked");
    arrowSVG.setAttribute("fill", "#FFFFFF")
}

const codeInput = document.getElementById("code-input");
const openTresorButton = document.getElementById("open-tresor-btn");
const tresorContainer = document.getElementById("tresor-container");
const msgText = document.getElementById("msg-text");

openTresorButton.onmousedown = () => {
    openTresorButton.classList.add("main-button-clicked");
}

openTresorButton.onmouseup = () => {
    openTresorButton.classList.remove("main-button-clicked");
}

openTresorButton.onclick = () => {
    let code = codeInput.value;
    if(code.toLowerCase() === "bamboons"){
        msgText.style.display = "none";
        console.log("Yay :) Enter!");
        tresorContainer.style.display = "none";
    } else {
        msgText.innerText = "Das ist leider nicht der richtige Code.";
    }
}
