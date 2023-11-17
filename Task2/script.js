function addTask() {
    var taskText = document.getElementById('new-task').value;
    if (taskText.trim() !== '') {
        var taskList = document.getElementById('todo-list');
        var taskItem = document.createElement('div');
        taskItem.className = 'task';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        var taskContent = document.createElement('span');
        taskContent.innerText = taskText;

        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerText = 'Delete';
        deleteBtn.onclick = function() {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);

        document.getElementById('new-task').value = '';
    }
}