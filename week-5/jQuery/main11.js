$("body").append(`<div class="removable">This is the text that gets removed.</div>`);
$(".removable").hover(function () {
    $("div").remove(".removable")
    
  }, function () {
    // out
  }
);