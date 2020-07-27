$(".save-changes").click(function () {
  var updateId = $(this).parent().attr("modal-id");
  console.log(updateId);
  data.forEach((item) => {
    console.log(data);
    console.log(item.id);
    if (item.id == updateId) {
      var updateTitle = document.querySelector(".modal-title").value;
      var updateDesc = document.querySelector(".modal-body").value;
      var status = $(".modal-complete").attr("value");
      updateArray(updateTitle, updateDesc, updateId, status);
    }
  });
});
