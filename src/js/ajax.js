document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch("http://localhost:9090/api/registration", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    form.reset();
                    responseMessage.textContent = data.msg;
                } else if (data.status === "error") {
                    for (const fieldName in data.fields) {
                        const inputField = form.querySelector(`[name="${fieldName}"]`);
                        const errorMessage = data.fields[fieldName];
                        inputField.setCustomValidity(errorMessage);
                    }

                    form.reportValidity();
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
});
