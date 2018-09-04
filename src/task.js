class Task {
  constructor(listTitle, taskDescription, priorityLevel){
    this.listTitle = listTitle;
    this.taskDescription = taskDescription;
    this.priorityLevel = priorityLevel;
  }

  // your code here
  render(){
    return
    `<ul>
      <li>
        Task: ${this.listTitle}
        <button data-list-title="${this.listTitle}" data-task-name="${this.taskDescription}" class="delete-task">
          X
        </button>
        <br>
        Priority: ${this.priorityLevel}
      </li>
    </ul>`
  }
}
