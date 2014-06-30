$(document).ready(function() {

$('#tech_page').click('click', function(e){
  e.preventDefault();
  $('.welcome').hide();
  $('#profile_pic').hide();
  $('#mybio').hide();
  $('#resume').hide();
  $('#biology_html').hide();
  $('#tech_html').show('slide');
  $("body").css("overflow", "visible");
   heightCalculator();
  $('body').animate({height:fullHeight + "px"},700);
  });


});

function heightCalculator(){
   fullHeight = 0;
  $('body').height(function(index, height) {
          fullHeight += (window.innerHeight - $(this).offset().top);
   });
}
