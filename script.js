$(document).ready(function() {
    $('#submit').click(function(event) {
        event.preventDefault();

        let isValid = true;
        $('#login-form input').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).css('border-color', 'red');
            } else {
                $(this).css('border-color', '');
            }
        });

        if (isValid) {
            window.location.href = 'Home.html';
        } else {
            $('#message').text('Please fill in all fields').css('color', 'red');
        }
    });
});
