console.log("Hello javasript")

const todoBtn = document.querySelector(".add-btn")
const todoInput = document.querySelector(".form-control")
const todoResult = document.querySelector(".taskResult")


function addTodo(e){
    e.preventDefault();
console.log(todoInput.value)

// create li
const todoLi =document.createElement("li")
todoLi.classList.add("border")
todoLi.classList.add("shadow")

//create h5
const todoTitle = document.createElement("h5")
todoTitle.classList.add("mx-2")
todoTitle.classList.add("d-inline-block")
todoTitle.classList.add("w-75")
todoTitle.innerText =todoInput.value
todoLi.appendChild(todoTitle)
 
todoResult.appendChild(todoLi)
todoInput.value=""
}




todoBtn.addEventListener('click',addTodo)