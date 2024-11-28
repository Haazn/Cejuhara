$(document).ready(function () {
    const validUsername = "admin";
    const validPassword = "12345"; 

    $('#login-form').submit(function (e) {
        e.preventDefault(); 

        const username = $('#username').val();
        const password = $('#password').val();
        const message = $('#message');

        console.log("Entered Username: " + username);
        console.log("Entered Password: " + password);

        if (username === validUsername && password === validPassword) {
            
            message.text("Login successful! Redirecting to home...").addClass("success").removeClass("error");

            setTimeout(function() {
                window.location.href = "home.html";
            }, 2000);
        } else {
            message.text("Invalid username or password. Please try again.").addClass("error").removeClass("success");
        }

        $('#username').val('');
        $('#password').val('')
        $('#address').val('')
        $('#paymentnum').val('');
    });
});
