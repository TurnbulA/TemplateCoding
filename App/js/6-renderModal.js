$(".edit").click(function () {
  var id = $(this).parent().attr("data-id");
  data.forEach((item) => {
    if (item != null) {
      if (id === item.id || id === JSON.stringify(item.id)) {
        document.querySelector(".modal-title").setAttribute("modal-id", id);
        document.querySelector(".modal-footer").setAttribute("modal-id", id);
        document.querySelector(".modal-title").value = item.title;
        document.querySelector(".modal-body").innerHTML = item.desc;
        var completeButton = document.querySelector(".modal-complete");
        completeButton.setAttribute("value", item.status);
        if (item.status === "true") {
          completeButton.innerHTML = "Task Complete";
          completeButton.classList.remove("btn-danger");
          completeButton.classList.add("btn-info");
        } else {
          completeButton.innerHTML = "Task Incomplete";
          completeButton.classList.remove("btn-info");
          completeButton.classList.add("btn-danger");
        }
      }
    }
  });
});
