// Obtener los elementos del DOM
const addTaskButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Función para agregar una tarea
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Crear un nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = taskText;

        // Crear botón para eliminar la tarea
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Añadir el botón al elemento de lista
        li.appendChild(deleteButton);

        // Añadir el elemento de lista a la lista de tareas
        taskList.appendChild(li);

        // Limpiar el campo de entrada de texto
        taskInput.value = '';
    }
}

// Agregar evento al botón de "Agregar"
addTaskButton.addEventListener('click', addTask);

// Permitir agregar tareas presionando "Enter"
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
