function updateArray(title, desc, id, newStatus) {
  var existing = JSON.parse(localStorage.getItem("data"));
  existing[id] = {
    id: id,
    title: title,
    desc: desc,
    status: newStatus,
  };
  localStorage.setItem("data", JSON.stringify(existing));
  location.reload();
}
