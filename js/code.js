console.log("Hello javasript")

const todoBtn = document.querySelector(".add-btn")
const todoInput = document.querySelector(".form-control")

function addTodo(e){
    e.preventDefault();
console.log(todoInput.value)
 todoInput.value=""
}
todoBtn.addEventListener('click',addTodo)