function deleteAll() {
  if (confirm("Are you sure you want to clear Todo List?")) {
    localStorage.removeItem("data");
    $(".todo-list").empty();
  }
}
