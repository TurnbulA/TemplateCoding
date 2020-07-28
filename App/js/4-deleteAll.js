$(".delete-all").click(() => {
  if (confirm("Are you sure you want to clear Todo List?")) {
    //creates a confirmation popup
    localStorage.removeItem("data"); //deletes the data item out of local storage
    $(".todo-list").empty(); //clears the whole list
  }
});
