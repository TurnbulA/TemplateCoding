$(".modal-complete").click(function () {
  var newStatus;
  var classList = document.querySelector(".modal-complete");
  var classStatus = classList.getAttribute("value"); //gets the value of the button
  if (classStatus === "true") {
    //after click if true (complete) the complete classes are removed
    classList.classList.remove("btn-info"); //the green styling
    classList.classList.add("btn-danger"); //red styling
    classList.innerHTML = "Task Incomplete"; //New text
    newStatus = $(".modal-complete").attr("value", "false"); //sets the value
    return newStatus;
  } else {
    classList.classList.remove("btn-danger");
    classList.classList.add("btn-info");
    classList.innerHTML = "Task Complete";
    newStatus = $(".modal-complete").attr("value", "true");
    return newStatus;
  }
});
