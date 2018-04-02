$('.toggle').on('click', function() {
  $('.login-container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.login-container').stop().removeClass('active');
});


$('.forgot').on('click', function() {
  $('.login-container').stop().addClass('active1');
});

$('.close').on('click', function() {
  $('.login-container').stop().removeClass('active1');
});