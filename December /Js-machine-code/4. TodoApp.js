<html>
  <head>
   <title>Todo App</title> 
  </head>
  <body>
   Todo App
   <br/>
  <input type='text' id='todoInput'  />
  <button id='todoBtn' >
  Add Todo
  </button>
  <ul id="todoList">  
  </ul>
  </body>
</html>

//create a Todo in js
const todoInput = document.getElementById('todoInput');
const todoBtn = document.getElementById('todoBtn');
const todoList = document.getElementById('todoList');

let todos =[];

// clear list
const renderTodos = () => {
todoList.innerHTML ="";

todos.forEach((todo)=> {

const li = document.createElement('li');
const span = document.createElement('span');
span.textContent =todo.name;
li.appendChild(span);

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.onclick = () => onDelete(todo.id);
li.appendChild(deleteBtn);

const updateBtn = document.createElement('button');
updateBtn.textContent = "Update";
updateBtn.onclick = () => onUpdate(todo.id);
li.appendChild(updateBtn);

const toggleBtn = document.createElement('button');
toggleBtn.textContent = todo.completed ? 'Undo' : 'Complete';
toggleBtn.onclick = () => onToggle(todo.id);

if(todo.completed) {
  span.classList.add('line');
}

li.appendChild(toggleBtn);

todoList.appendChild(li);
});
}


const createTodo = () => {
const input = todoInput.value.trim();
if(input) {
	todos.push({id:Date.now(), name:input, completed:true})	
}
renderTodos();
}

const onDelete =(id)=> {
todos = todos.filter((todo)=> todo.id !== id);
renderTodos();
}

const onUpdate = (id) => {
	const textTo = todos.find((todo)=> todo.id === id);
  if(textTo) {	
    const updatedText = prompt('Enter Value to update', textTo.name);
    textTo.name = updatedText;
  }
 renderTodos();
}


const onToggle =(id) => {
	todos = todos.map((todo)=> {
  	if(todo.id === id) {
    	return {
      	...todo, 
       completed: !todo.completed,
      }
    } else {
    	return todo;
    }
  } );
  
renderTodos();

}

todoBtn.addEventListener('click',createTodo);

---- css --- 
 
.line {
  text-decoration:line-through
}
