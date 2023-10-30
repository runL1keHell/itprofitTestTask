document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        function validateUsername(username) {
            return username.length >= 3;
        }

        function validatePhone(phone) {
            const phonePattern = /^\s*\+\d{3}-\d{2}-\d{3}-\d{2}-\d{2}\s*$/;
            return phonePattern.test(phone);
        }

        function validateEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(email);
        }

        function validateMessage(message) {
            return message.length >= 10;
        }

        const username = document.getElementById("username").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const usernameError = document.getElementById("username-error");
        const phoneError = document.getElementById("phone-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");

        usernameError.textContent = validateUsername(username)
            ? ""
            : "Username must be at least 3 characters";

        phoneError.textContent = validatePhone(phone)
            ? ""
            : "Please enter a valid phone number";

        emailError.textContent = validateEmail(email)
            ? ""
            : "Please enter a valid email address";

        messageError.textContent = validateMessage(message)
            ? ""
            : "Message must be at least 10 characters";
    });
});