document.addEventListener("DOMContentLoaded", function () {

    const openModalButton = document.getElementById("open-modal-button");
    const modal = document.getElementById("myModal");
    const closeModalButton = document.getElementById("close-modal-button");
    const submitModalButton = document.getElementById("submit-modal-button");

    openModalButton.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    submitModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });
});
