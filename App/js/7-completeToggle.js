$(".modal-complete").click(function () {
  var newStatus;
  var classList = document.querySelector(".modal-complete");
  var classStatus = classList.getAttribute("value");
  if (classStatus === "true") {
    classList.classList.remove("btn-info");
    classList.classList.add("btn-danger");
    classList.innerHTML = "Task Incomplete";
    newStatus = $(".modal-complete").attr("value", "false");
    return newStatus;
  } else {
    classList.classList.remove("btn-danger");
    classList.classList.add("btn-info");
    classList.innerHTML = "Task Complete";
    newStatus = $(".modal-complete").attr("value", "true");
    return newStatus;
  }
});
