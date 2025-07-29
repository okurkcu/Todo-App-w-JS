const todoArr = [{
    name: 'make dinner',
    dueDate: '09.12.2025'
},
{
    name: 'wash dishes',
    dueDate: '18.07.2025'
}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    for(let i = 0; i < todoArr.length; i++){
        const todoObject = todoArr[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoArr.splice(${i}, 1);
                renderTodoList();
            " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todoArr.push({
        name: name,
        dueDate: dueDate
    });

    inputElement.value = '';

    renderTodoList();
}
