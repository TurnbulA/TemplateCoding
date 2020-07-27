function storeLocal(todoTitle, todoDesc) {
  var temp = JSON.parse(localStorage.getItem("data"));
  if (!temp) {
    temp = [];
  }
  var todoID = temp.length;
  temp.push({
    id: JSON.stringify(todoID),
    title: todoTitle,
    desc: todoDesc,
    status: JSON.stringify(false),
  });
  localStorage.setItem("data", JSON.stringify(temp));
  location.reload();
  return todoID;
}
