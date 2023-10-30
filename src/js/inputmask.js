import Inputmask from 'inputmask';

document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
    const inputMask = new Inputmask("+375-99-999-99-99");
    inputMask.mask(phoneInput);
});