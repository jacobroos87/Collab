
(function(){
            emailjs.init("user_BKwt4ml9Gs6TQhV2bLfh0");
        })();

/** Function to send email template 'joinMailList', created using emailJs.
 * Once the email is sent, the modal containing the subscribe button is hidden and the success modal (#modalJoinSuccess) is displayed on the screen.
 */       
function sendMail(contactForm) {
    emailjs.send("service_lr43f5b", "contactFormMessage", {
        from_last_name: contactForm.last_name.value,
        from_first_name: contactForm.first_name.value,
        from_email: contactForm.email.value,
        contact_number: contactForm.contact_number.value,
        from_company: contactForm.company.value,
        message: contactForm.message.value,
        how_did_you_hear: contactForm.how_did_you_hear.value,
        from_site: contactForm.your_site.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    $('#modalSendMessageSuccess').modal('show');
    document.getElementById('first_name').value=''; 
    document.getElementById('last_name').value=''; 
    document.getElementById('contact_number').value=''; 
    document.getElementById('company').value='';
    document.getElementById('your_site').value='';
    document.getElementById('how_did_you_hear').value='';
    document.getElementById('message').value='';
    return false;
}
