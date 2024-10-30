// Get the input field and add button
const inputField = document.querySelector('#todo-input');
const addButton = document.querySelector('#submit');

// Add event listener for the Add button
addButton.addEventListener('click', addTodoItem);

// Function to add a new todo item
function addTodoItem() {
  const inputData = inputField.value.trim();
  if (!inputData) return;

  inputField.value = ""; // Clear input field

  // Create todo item container
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');

  // Create and append input element for todo text
  const todoText = document.createElement('input');
  todoText.type = 'text';
  todoText.classList.add('text');
  todoText.value = inputData;
  todoText.setAttribute('readonly', 'readonly');
  todoItem.appendChild(todoText);

  // Create and append action icons
  const actions = document.createElement('div');
  actions.classList.add('action-items');

  // Done icon
  const doneIcon = document.createElement('i');
  doneIcon.classList.add('fa-solid', 'fa-check');
  doneIcon.addEventListener('click', () => {
    todoText.classList.toggle('done');
  });

  // Edit icon
  const editIcon = document.createElement('i');
  editIcon.classList.add('fa-solid', 'fa-pen-to-square', 'edit');
  editIcon.addEventListener('click', () => toggleEditMode(editIcon, todoText));

  // Delete icon
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fa-solid', 'fa-trash');
  deleteIcon.addEventListener('click', () => todoItem.remove());

  // Append icons to actions container
  actions.appendChild(doneIcon);
  actions.appendChild(editIcon);
  actions.appendChild(deleteIcon);

  // Append actions to todo item
  todoItem.appendChild(actions);

  // Append todo item to the todo list
  document.querySelector('.todo-lists').appendChild(todoItem);
}

// Function to toggle edit mode for todo item
function toggleEditMode(editIcon, todoText) {
  if (editIcon.classList.contains('edit')) {
    editIcon.classList.replace('fa-pen-to-square', 'fa-save');
    editIcon.classList.remove('edit');
    todoText.removeAttribute('readonly');
    todoText.focus();
  } else {
    editIcon.classList.replace('fa-save', 'fa-pen-to-square');
    editIcon.classList.add('edit');
    todoText.setAttribute('readonly', 'readonly');
  }
}
