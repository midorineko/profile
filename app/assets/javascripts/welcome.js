var ready;
ready = function() {
$(document).ready(function(){
$(".navbar").hide();
$("#profile_pic").hide();


var welcome = ['W','e','l','c','o','m','e'];
var index = 0;
function Welcome(index){
  $('.welcome').append(welcome[index]);
}

var fullHeight = 0;
function heightCalculator(){
   fullHeight = 0;
  $('.welcome').height(function(index, height) {
          fullHeight += (window.innerHeight - $(this).offset().top);
   });
}

window.setInterval(function(){
    Welcome(index)
    if (index === 0){
      $("#profile_pic").show("slide");
    }
    if (index === 1){
        heightCalculator();
      $( ".welcome" ).animate({height:fullHeight + "px"},700);
    }
    index += 1
    if (index === 7){
      $(".navbar").show("fold");
    }
    if (index === 8 ){
      heightCalculator();
      $( ".welcome" ).animate({height:fullHeight + "px"},700);

    }
  }, 700);

  });
};

$(document).ready(ready);
