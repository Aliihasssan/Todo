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
todoLi.classList.add("uncompleted")


//create h5
const todoTitle = document.createElement("h5")
todoTitle.classList.add("mx-2")
todoTitle.classList.add("d-inline-block")
todoTitle.classList.add("w-75")
todoTitle.classList.add("titleBg")
todoTitle.innerText =todoInput.value
todoLi.appendChild(todoTitle)
 
todoResult.appendChild(todoLi)
todoInput.value=""
//create buttons
const todoComplete = document.createElement("button")
todoComplete.classList.add("btn")
todoComplete.innerHTML='  <i class="fa-solid fa-check check"></i>'
todoLi.appendChild(todoComplete)
//*************/
const todoDelete = document.createElement("button")
todoDelete.classList.add("btn")
todoDelete.innerHTML='      <i class="fa-solid fa-trash delet"></i>'
todoLi.appendChild(todoDelete)




}
//Toggle function
function toggleTodo(e){
    const item =e.target
        console.log(item.classList)
if(item.classList[1]== 'fa-check'){
    console.log("completed task")
    item.parentElement.parentElement.classList.toggle('completed')

}else if(item.classList[1]== 'fa-trash') {
    console.log("Deleted task")
    item.parentElement.parentElement.classList.toggle('deleted')
}



}


todoBtn.addEventListener('click',addTodo)
todoResult.addEventListener('click',toggleTodo)