$(document).ready(function() {

var fullHeight = 0;
function heightCalculator(){
   fullHeight = 0;
  $('body').height(function(index, height) {
          fullHeight += (window.innerHeight - $(this).offset().top);
   });
}

  $('#about_inouye').click(function(e){
    e.preventDefault();
    $("#profile_pic").css("margin-right", "9%");
    $("#profile_pic").css("margin-left", "0");
    $("#profile_pic").css("float", "right");
    $('.welcome').hide("slide");
    $('#mybio').show("slide");
    heightCalculator();
    $('body').animate({height:fullHeight + "px"},700);

  })

});
