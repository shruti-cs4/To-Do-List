const todoList = [];
let htmlTodoList = ``;

function add(){
  const work = document.querySelector('.todo').value;
  const date = document.querySelector('.date').value;
  const todo = [work, date]
  todoList.push(todo);
  
};

function addingList(){
  todoList.forEach(function(value, index){
    const html = `
      <div>${value[0]}</div>
      <div>${value[1]}</div>
      <button class = delete-button onclick="deleteItem(${index})">
        Delete
      </button>`;
    htmlTodoList += html; 
  })
  document.querySelector('.text').innerHTML = htmlTodoList;
}

function deleteItem(i){
  todoList.splice(i, 1);
  addingList();
}