function newTodo(todoTitle, todoID, todoStatus) {
  if (!todoTitle && !todoID) {
    todoTitle = document.querySelector(".todoTitle").value; //gets title value from input
    todoDesc = document.querySelector(".todoDesc").value; //gets description value from input
    var todoID = storeLocal(todoTitle, todoDesc); //calls storage function
    document.querySelector("form").reset(); //clears the form inputs
  }
  if (todoTitle) {
    if (todoStatus == "true") {
      //if status shows task status, mainly for already created items
      var todoStatusHTML = `<i>Task Complete</i>`;
    } else {
      var todoStatusHTML = `<i>Task Incomplete</i>
      `;
    }
    var todoHTML = `<li style="display:none" class="todo-item" data-id = "${todoID}"><span class="item-title">${todoTitle}</span>
    <a href="#" class="btn btn-sm btn-danger m-1 danger list-btn delete">Delete</a><a href="#" class="btn btn-sm btn-success m-2 success list-btn edit" data-toggle="modal" data-target="#editModal">Edit</a>
    ${todoStatusHTML}
    </li>`; //creates all the required buttons and text quickly, ${} formats the variables into usable items.
    $(".todo-list").append(todoHTML); //appends to the div
    $("li[data-id=" + todoID + "]").fadeIn(); //transition effect
  }
}
