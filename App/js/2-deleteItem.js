$(".delete").click(function () {
  //click event listener with anonymous function
  // console.log(e.target.parentNode);
  var todoID = $(this).parent().attr("data-id"); //this represents the action, parent is the parent node and attr if for the attribute
  console.log($(this));
  $(`li[data-id ="${todoID}"]`).slideUp(); //hides the correct item
  var temp = JSON.parse(localStorage.getItem("data")); //accesses local storage to be changed with a temporary value
  delete temp[todoID]; //removes the relevant id from the array
  localStorage.setItem("data", JSON.stringify(temp)); //sets the new values in the array
});
