$(document).ready(function() {
$('#biology_page').click('click', function(e){
  e.preventDefault();
  $('.welcome').hide();
  $('#profile_pic').hide();
  $('#mybio').hide();
  $('#resume').hide();
  $('#biology_html').show('slide');
  $('body').height('1300px')
  $("body").css("overflow", "visible");
  });


});
