$(document).ready(function() {
    $('.form').submit(function(event) {
        event.preventDefault(); 
        
        var formData = {
            'email': $('#email').val(),
            'name': $('#name').val(),
            'message': $('#message').val()
        };
        
        // Form verilerini konsola yazdır
        console.log(formData);
        // $('#responseMessage').text('Successfully sent!');
       
        $('#modal-content').modal();
        $(document).on($.modal.CLOSE, function(event, modal) {
            // Sayfayı yenile
            location.reload();
        });
    });
   
});



