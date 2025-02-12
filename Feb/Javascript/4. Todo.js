const addTodo = document.getElementById("addTodo")
const inputTodo = document.getElementById("inputTodo")
const todoList = document.getElementById("list")
let list = []

const renderTodo = () => {
  todoList.innerText = ""

  list.forEach((item) => {
    const span = document.createElement("span")
    const li = document.createElement("li")

    span.innerText = item.text
    li.appendChild(span)

    const editButton = document.createElement("button")
    editButton.innerText = "Edit"
    editButton.onclick = () => editTodo(item.id)
    li.appendChild(editButton)

    todoList.appendChild(li)
  })
}

const addTodos = () => {
  let text = inputTodo.value
  if (text) {
    list.push({ text: text, id: Date.now(), completed: false })
  }
  renderTodo()
}

const editTodo = (id) => {
  const todo = list.find((item) => item.id == id)
  if (todo) {
    let newText = prompt("Enter Todo To update", todo.text)
    todo.text = newText
  }
  renderTodo()
}

addTodo.addEventListener("click", addTodos);


<html>
  <head>
    <title>Todo</title>
  </head>
  <body>
    <input type="text" id="inputTodo" />
    <button id="addTodo">Add Todo</button>
    <ul id='list'>
    </ul>
  </body>
</html>












