document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');

    // Function to add a new todo item
    const addTodo = () => {
        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${todoText}</span>
                <button class="delete-btn">Delete</button>
            `;
            todoList.appendChild(listItem);
            todoInput.value = '';

            // Add event listener for the delete button
            const deleteButton = listItem.querySelector('.delete-btn');
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(listItem);
            });
        }
    };

    // Event listeners
    addTodoBtn.addEventListener('click', addTodo);

    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    });
});
