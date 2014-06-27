$(document).ready(function(){
var welcome = ['W','e','l','c','o','m','e'];
var index = 0;
// $(welcome).each(function(index){
//   $('.welcome').append(welcome[index]);
// });
function intro() {
  for(i=0; i < welcome.length; i++){
     Welcome(i)
  }
}

function Welcome(index){
  $('.welcome').append(welcome[index]);
}

window.setInterval(function(){
  Welcome(index)
  index += 1
  if (index === 6){
    sleep();
  }
}, 800);

});
