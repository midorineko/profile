$(document).ready(function() {
$('#resume_menu').click('click', function(){
  $('.welcome').hide();
  $('#profile_pic').hide();
  $('#mybio').hide();
  $('#resume').show('slide');
  $('body').height('1500px')
  $("body").css("overflow", "visible");
  });


});
