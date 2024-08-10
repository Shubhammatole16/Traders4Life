function sendWp(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Collect form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;

    // Create the message to send
    const message = ` *Contact Details:* \n *Name:-* ${name}\n *Phone:-* ${phone}\n *State:-* ${state}\n *City:-* ${city} `;
    
    // Encode the message
    const encodedMessage = encodeURIComponent(message);

    // Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp number in international format
    const whatsappNumber = '917737743131'; // Your WhatsApp number
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Debugging: log the link to the console
    console.log('WhatsApp Link:', whatsappLink);

    // Redirect to the WhatsApp link
    window.open(whatsappLink, '_blank');

    // Clear the form fields
    document.getElementById('contactForm').reset();
}
