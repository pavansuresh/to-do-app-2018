// Load tasks from local storage on page load
$(document).ready(function() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (var i = 0; i < tasks.length; i++) {
        $('#task-list').append('<li class="list-group-item">' + 
           '<span class="text-danger">' + tasks[i] + '</span>' +
            '<button class="remove-btn btn btn-danger pull-right">Remove</button></li>');
    }
});

// Add task to list and local storage
$('#add-task-btn').click(function() {
    var task = $('#task-input').val();
    $('#task-list').append('<li class="list-group-item  bg-warning">' +
     '<span class="text-danger">' + task + '</span>' + '<button class="remove-btn btn btn-danger pull-right">Remove</button></li>');
    $('#task-input').val('');
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return false;
});

// Remove task from list and local storage
$('#task-list').on('click', '.remove-btn', function() {
    var taskIndex = $(this).parent().index();
    $(this).parent().remove();
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(taskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
});
