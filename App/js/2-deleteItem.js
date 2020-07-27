function deleteItem(todoID) {
  $(`li[data-id ="${todoID}"]`).slideUp();
  var temp = JSON.parse(localStorage.getItem("data"));
  delete temp[todoID];
  localStorage.setItem("data", JSON.stringify(temp));
}
