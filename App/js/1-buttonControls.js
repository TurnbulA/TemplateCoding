function buttonControls() {
  $(".list-btn").on("click", function (e) {
    if (e.target.classList.contains("delete")) {
      var todoID = $(this).parent().attr("data-id");
      deleteItem(todoID);
    }
  });
}
