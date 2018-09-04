class TaskLister {
  // your solution here
  render() {
    return `<div id="app-content">
      <form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list">

        <option value="My Dank List" selected>
          My Dank List
        </option>
        </select>

        <label for="new-task-description">Task description:</label>
        <input required type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task">
      </form>
    </div>`
    }// end render
    
}// end TaskLister
