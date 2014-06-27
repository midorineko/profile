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

window.setInterval(function(){
    Welcome(index)
    if (index >= 0){
      $("#profile_pic").show("slide");
    }
    index += 1
    if (index >= 7){
      $(".navbar").show("fold");
    }
    // return();
  }, 800);

  });
};

$(document).ready(ready);
