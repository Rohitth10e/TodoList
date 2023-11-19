todoList = [];
showTask()

function addTodo() {
    let task = document.querySelector('#todo-input');
    let inputTask = task.value;
    todoList.push(inputTask);
    task.value = ''
    showTask()
}

function showTask() {
    let container=document.querySelector('.taskcontainer');
    let newHTML='';
    for (i = 0; i < todoList.length; i++) {
        newHTML += `
        <div class="todoele">
        <span>${todoList[i]}</span>
        <button onclick="todoList.splice(${i},1);
        showTask();" id="delete-btn">Delete</button>
        </div>
        
        `;
    }

    container.innerHTML = newHTML;
}
