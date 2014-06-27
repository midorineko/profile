var ready;
ready = function() {
$(document).ready(function(){
$(".navbar").hide();


var welcome = ['W','e','l','c','o','m','e'];
var index = 0;
function Welcome(index){
  $('.welcome').append(welcome[index]);
}

window.setInterval(function(){
  Welcome(index)
  index += 1
  if (index >= 7){
    $(".navbar").show("fold");
  }
}, 800);

});
};

$(document).ready(ready);
$(document).on('page:load', ready);
