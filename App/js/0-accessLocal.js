var data = JSON.parse(localStorage.getItem("data"));
// Accesses local storage looking for the data item. JSON.parse puts it in an array
if (data) {
  data.forEach((item) => {
    // for every item in the data array
    if (item != null) {
      //if an item contains something
      newTodo(item.title, item.id, item.status); //render a todo item using the id title and status
    }
  });
}
