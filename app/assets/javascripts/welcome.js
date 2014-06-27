var ready;
ready = function() {
$(document).ready(function(){


var welcome = ['W','e','l','c','o','m','e'];
var index = 0;
function Welcome(index){
  $('.welcome').append(welcome[index]);
}

window.setInterval(function(){
  Welcome(index)
  index += 1
  if (index === 6){
    return;
  }
}, 800);

});
};

$(document).ready(ready);
$(document).on('page:load', ready);
