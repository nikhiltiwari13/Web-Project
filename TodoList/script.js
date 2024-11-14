const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-container");

function addTask(){
    if(inputBox.value == ""){
        alert("Enter some task");
    }
    else{
        let li = document.createElement("li")
        li.innerText = inputBox.value
        list.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)

        li.addEventListener("click", () => {
            if(!li.classList.contains("checked")){
                li.classList.add("checked");
            }
            else{
                li.classList.remove("checked");
            }
        })

        span.addEventListener("click", () => {
            li.remove()
        })
    }
    inputBox.value = ""
}

// list.addEventListener("click", (e) => {
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove()
//     }
// }, false)