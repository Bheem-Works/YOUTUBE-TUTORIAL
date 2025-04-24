const inputEl = document.getElementById("input");
const bodyEl = document.querySelector("body");
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateTheme();
function updateTheme () {
    if(inputEl.checked) {
        bodyEl.style.backgroundColor = "black";
        bodyEl.style.color = "white";
    } else {
        bodyEl.style.backgroundColor = "white";
        bodyEl.style.color = "black";
    }
}

inputEl.addEventListener("input",()=>{
    updateTheme();
    updateLocalStorage();
})

function updateLocalStorage () {
    localStorage.setItem("mode",inputEl.checked);
}