function updateArray(title, desc, id, newStatus) {
  var existing = JSON.parse(localStorage.getItem("data")); //access the array
  existing[id] = {
    id: id,
    title: title,
    desc: desc,
    status: newStatus,
  }; //creates a new object for the existing item at the id
  localStorage.setItem("data", JSON.stringify(existing)); //pushes the changes
  location.reload(); //reloads the page and all the required changes are added to html//
}
