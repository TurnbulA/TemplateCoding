function newTodo(todoTitle, todoID, todoStatus) {
  if (!todoTitle && !todoID) {
    todoTitle = document.querySelector(".todoTitle").value;
    todoDesc = document.querySelector(".todoDesc").value;
    if (todoTitle) {
      var todoID = storeLocal(todoTitle, todoDesc);
      document.querySelector("form").reset();
    }
  }
  if (todoTitle) {
    if (todoStatus == "true") {
      var todoStatusHTML = `<i>Task Complete</i>`;
    } else {
      var todoStatusHTML = `<i>Task Incomplete</i>
      `;
    }
    var todoHTML = `<li style="display:none" class="todo-item" data-id = "${todoID}"><span class="item-title">${todoTitle}</span>
    <a href="#" class="btn btn-sm btn-danger m-1 danger list-btn delete">Delete</a><a href="#" class="btn btn-sm btn-success m-2 success list-btn edit" data-toggle="modal" data-target="#editModal">Edit</a>
    ${todoStatusHTML}
    </li>`;
    $(".todo-list").append(todoHTML);
    $("li[data-id=" + todoID + "]").fadeIn();

    buttonControls();
  }
}
