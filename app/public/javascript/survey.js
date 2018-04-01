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

  console.log(obj);

  $.post('/server', obj);
});







