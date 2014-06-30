$(document).ready(function() {
$('#biology_page').click('click', function(e){
  e.preventDefault();
  $('.welcome').hide();
  $('#profile_pic').hide();
  $('#mybio').hide();
  $('#resume').hide();
  $('#tech_html').hide();
  $('#biology_html').show('slide');
  $("body").css("overflow", "visible");
  });


});
