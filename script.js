document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.querySelector('[name="name"]').value;
        const business = form.querySelector('[name="business"]').value;
        const phone = form.querySelector('[name="phone"]').value;
        const service = form.querySelector('[name="service"]').value;
        const message = form.querySelector('[name="message"]').value;

        const whatsappNumber = "919932173294";

        const whatsappMessage =
            "Hello VALLEY-REACH!" +
            "\n\nI would like to enquire about your services." +
            "\n\nName: " + name +
            "\nBusiness: " + business +
            "\nMy WhatsApp: " + phone +
            "\nService: " + service +
            "\nMessage: " + message;

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.location.href = whatsappURL;
    });

});
