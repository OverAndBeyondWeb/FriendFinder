$('button[type=submit]').click(function(e) {
  e.preventDefault();
  var name = $('#name').val().trim();
  var photoLink = $('#photo-link').val().trim();
  var values = $('.custom-select').map(function() {
    return $(this).val();
  });

  var obj = {
    name: name,
    photoLink: photoLink,
    answers: $.makeArray( values )
  };

  $('#name').val('');
  $('#photo-link').val('');
  $('.custom-select').each(function() {
    $(this).val('Choose your answer');
  });


  console.log(obj);

  $.post('/server', obj);
});







