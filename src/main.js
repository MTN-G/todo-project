// setting
const addButton = document.getElementById("addButton");
const input = document.querySelector("input");
const select = document.querySelector("select");
const view = document.querySelector("view");
// when click add
addButton.onclick = function(){
    let task = input.value;
    input.value = ''
    let time = new Date().toLocaleString();
    let priority = select.value;
// stracture of each line
    let container = document.createElement("div");
    container.setAttribute("class", "todoContainer");
    // text
    let div1 = document.createElement("text");
    div1.setAttribute("class", "todoText");
    div1.textContent = task ;
    // date N time
    let div2 = document.createElement("createdat");
    div2.setAttribute("class", "todoCreatedAt");
    div2.textContent = time ;
    // priority
    let div3 = document.createElement("priority");
    div3.setAttribute("class", "todoPriority");
    div3.textContent = priority ;
    // stracture in html
    view.appendChild(container);
    container.appendChild(div3);
    container.appendChild(div2);
    container.appendChild(div1);
}




