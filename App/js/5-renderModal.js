$(".edit").click(function () {
  var id = $(this).parent().attr("data-id"); //gets item id from parent attribute
  data.forEach((item) => {
    //uses global data var created at the start
    if (item != null) {
      //if the item isn't null run
      if (id === item.id || id === JSON.stringify(item.id)) {
        //checks if the ids are the same
        document.querySelector(".modal-title").setAttribute("modal-id", id); //sets a modal id in the title
        document.querySelector(".modal-footer").setAttribute("modal-id", id); //sets modal id in the footer
        document.querySelector(".modal-title").value = item.title; //sets the value of the input to the item title
        document.querySelector(".modal-body").innerHTML = item.desc; //sets the innerHTML of the textarea to the description
        var completeButton = document.querySelector(".modal-complete"); //creates the task complete button
        completeButton.setAttribute("value", item.status); //sets a value attribute to the current item status
        if (item.status === "true") {
          //creates the innerHTML and styling for a complete task
          completeButton.innerHTML = "Task Complete";
          completeButton.classList.remove("btn-danger");
          completeButton.classList.add("btn-info");
        } else {
          //the same but for incomplete tasks
          completeButton.innerHTML = "Task Incomplete";
          completeButton.classList.remove("btn-info");
          completeButton.classList.add("btn-danger");
        }
      }
    }
  });
});
