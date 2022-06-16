console.log('email sender');

(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('uEl7V_o0filAK1bs0');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        // emailjs.send("service_i9ev0wb","template_hiwkfen");

        data = {
            name: this.elements.email.value,
            email: this.elements.email.email,
            message: this.elements.email.message,
        }
        emailjs.send('service_i9ev0wb', 'template_hiwkfen', data)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}