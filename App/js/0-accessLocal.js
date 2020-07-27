var data = JSON.parse(localStorage.getItem("data"));

if (data) {
  data.forEach((item) => {
    if (item != null) {
      newTodo(item.title, item.id, item.status);
    }
  });
}
buttonControls();
