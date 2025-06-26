const todoList = [];

function add(){
  const work = document.querySelector('.todo').value;
  const date = document.querySelector('.date').value;
  const todo = [work, date]
  todoList.push(todo);
  addingList();
  console.log()
  
};

function addingList(){
  let htmlTodoList = ``;
  for (let i = 0; i < todoList.length; i++){
    const html = `
      <div>${todoList[i][0]}</div>
      <div>${todoList[i][1]}</div>
      <button class = delete-button onclick="deleteItem(${i})">
        Delete
      </button>`;
    htmlTodoList += html;
  }
  document.querySelector('.text').innerHTML = htmlTodoList;  
};

function deleteItem(i){
  todoList.splice(i, 1);
  addingList();
}