document.addEventListener('DOMContentLoaded', () => {
  // your solution here

  // grab DOM elements
  const createListForm = document.getElementById("create-list-form");
  const listDiv = document.getElementById("app-content");

  //const app = new TaskLister();
  function createNewList(listTitle){
    let div = document.createElement('div')
    div.innerHTML = `
        <h2>${listTitle}
          <button data-title="${listTitle}" class="delete-list">
            X
          </button>
        </h2>`
    let listContent = document.getElementById('list-content')
    listContent.appendChild(div)
    //go to lists on our dom
    // create a new 'list'
    // give it a title of listTitle
  }

  function createNewTaskForm(title){
    event.preventDefault(); //Added to prevent refresh "Create New Task" button
    let form = document.createElement('form')
    form.id = "create-new-task-form"
    form.innerHTML = `
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
        <!-- Major key alert:
        read the docs for HTML option selected:
        https://www.w3schools.com/tags/att_option_selected.asp -->
      <option value='${title}' selected>
        ${title}
      </option>
      </select>

      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" placeholder="description">

      <label for="new-task-priority">Priority level:</label>
      <input type="text" id="new-task-priority" placeholder="priority">
      <input type="submit" value="Create New Task">`
    let appContent = document.getElementById('app-content')
    appContent.appendChild(form)
    form.addEventListener("submit", createNewTaskAction);
  }

  function addlistTitleSelect(listTitle){
    let selectElement = document.getElementById('parent-list');
    selectElement.innerHTML += `<option value='${listTitle}'>${listTitle}</option>`;
  }

  function createTaskForm(event){
    event.preventDefault();
    const listTitle = document.getElementById("new-list-title").value ;
    console.log("In createTaskForm", event);
    !!(document.getElementById('create-new-task-form'))? addlistTitleSelect(listTitle):createNewTaskForm(listTitle);
    createNewList(listTitle);
  }

  function createNewTaskAction(event){
    console.log(`In createNewTaskAction`,event);
    const taskTitle = document.getElementById('parent-list').value;
    const description = document.getElementById('new-task-description').value;
    const priority = document.getElementById('new-task-priority').value;
    console.log(`taskTitle: ${taskTitle}, description: ${description}, priority: ${priority}`)
    event.preventDefault();
    let ul = document.createElement('ul')
      ul.innerHTML = `
        <li>${description}
          <button data-title="${description}" class="delete-list">
            X
          </button>
        </li>
        <li> ${priority} </li>`
    let listContent = document.getElementById('list-content')
    listContent.appendChild(ul)

  }

  createListForm.addEventListener("submit", createTaskForm);
  //createNewTaskForm.addEventListener("submit", createNewTaskAction);
});
