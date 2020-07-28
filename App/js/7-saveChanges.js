$(".save-changes").click(function () {
  var updateId = $(this).parent().attr("modal-id");
  data.forEach((item) => {
    if (item.id == updateId) {
      //gathers all the data in the modal
      var updateTitle = document.querySelector(".modal-title").value;
      var updateDesc = document.querySelector(".modal-body").value;
      var updateStatus = $(".modal-complete").attr("value");
      updateArray(updateTitle, updateDesc, updateId, updateStatus);
    }
  });
});
