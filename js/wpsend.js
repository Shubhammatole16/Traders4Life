function sendWp(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;

    const message = `Contact Details:\nName: ${name}\nPhone: ${phone}\nState: ${state}\nCity: ${city}`;
    
    const encodedMessage = encodeURIComponent(message);

    const whatsappNumber = '919518303249';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    console.log('WhatsApp Link:', whatsappLink);

    window.open(whatsappLink, '_blank');

    document.getElementById('contactForm').reset();
}
