
let toDoList = []

const input = document.querySelector("#list-item")
const btn = document.querySelector("#button")
const ul = document.querySelector("#todo-list")


btn.addEventListener('click', function(evt) {
  evt.preventDefault()
  const li = document.createElement('li')
  const inp = document.querySelector('input')
  li.textContent = inp.value
})


