// setting

const addButton = document.getElementById("addButton");
const sortButton = document.getElementById("sortButton");
const input = document.querySelector("input");
const select = document.querySelector("select");
const view = document.querySelector("view");
let myArray = [];
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
    div1.textContent = task;
    // date N time
    let div2 = document.createElement("createdat");
    div2.setAttribute("class", "todoCreatedAt");
    div2.textContent = time ;
    // priority
    let div3 = document.createElement("priority");
    div3.setAttribute("class", "todoPriority");
    div3.textContent = priority ;

    let hr = document.createElement("hr");
    // stracture of line in html
    view.appendChild(container);
    view.appendChild(hr);
    container.appendChild(div3);
    container.appendChild(div2);
    container.appendChild(div1);

     // counter
     let countdivs = document.getElementsByClassName("todoContainer").length;
     let counter = document.querySelector("span");
     counter.textContent = countdivs
      
    // delete button
    let del = document.createElement("button");
    del.setAttribute("id", "del");
    del.textContent = "Delete";
    del.onclick = function(){
        view.removeChild(container);
        view.removeChild(hr);
        counter.textContent = document.getElementsByClassName("todoContainer").length;
    }

    // done button
    let done = document.createElement("button");
    done.setAttribute("id", "done")
    done.textContent = "Done";
    done.onclick = function(){
        container.setAttribute("style", "text-decoration: line-through");
        container.setAttribute("class", "finish")
        counter.textContent = document.getElementsByClassName("todoContainer").length;
    }

    container.appendChild(del);
    container.appendChild(done);

    

};

myArray.sort()
       .reverse();
let nodeList = document.querySelectorAll("div");
let obj = {}


//when click sort
sortButton.onclick = function(){  
} 





