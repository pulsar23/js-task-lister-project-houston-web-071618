class List {
  // your code here
  constructor(listTitle){
    this.listTitle = listTitle;
    this.tasks = [];
  }

  getTask(){
  }
  
  render(){
    return `  <div>
    <h2>${this.listTitle}
      <button data-title="${this.listTitle}" class="delete-list">
        X
      </button>
    </h2>
    <ul>

    </ul>
  </div>`
  }
}
