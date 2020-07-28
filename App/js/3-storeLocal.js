function storeLocal(todoTitle, todoDesc) {
  var temp = JSON.parse(localStorage.getItem("data")); //creates temporary array
  if (!temp) {
    temp = []; //if array empty creates one
  }
  var todoID = temp.length; //lenght of array creates id for entries
  temp.push({
    id: JSON.stringify(todoID),
    title: todoTitle,
    desc: todoDesc,
    status: JSON.stringify(false),
  }); //.push pushes object into temp array
  localStorage.setItem("data", JSON.stringify(temp)); //adds new object into local storage
  location.reload();
  return todoID;
}
