$(document).ready(function () {
    $(".thumbnail-list img").on("click", function () {
      const newSrc = $(this).attr("src");
      const newCaption = $(this).data("caption");
  
      $("#mainImage").fadeOut(200, function () {
        $(this).attr("src", newSrc).fadeIn(200);
      });
  
      $("#caption").text(newCaption);
    });
  });
  