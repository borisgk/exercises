$(".feedme").on("click", function(){
    let divCopy = `<div class=feedme>${$(this).html()}</div>`
    
    $("body").append(divCopy)
  })