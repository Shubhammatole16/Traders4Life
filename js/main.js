    // Get the modal
    const modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    const openModalBtn = document.getElementById("openModalBtn");
    
    // Get the <span> element that closes the modal
    const closeSpan = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    closeSpan.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    
    // Function to send data to WhatsApp
    function sendOfflineData(event) {
        event.preventDefault(); // Prevent the form from submitting the default way
    
        // Collect form data
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const batch = document.querySelector('input[name="batch"]').value;
    
        // Create the message to send
        const message = `Registration Details:\nName: ${name}\nPhone: ${phone}\nBatch: ${batch}`;
        
        // Encode the message
        const encodedMessage = encodeURIComponent(message);
    
        // Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp number in international format
        const whatsappNumber = '919518303249'; // e.g., '11234567890'
        
        // Construct the WhatsApp link with your number
        const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    
        // Debugging: log the link to the console
        console.log('WhatsApp Link:', whatsappLink);
    
        // Redirect to the WhatsApp link
        window.open(whatsappLink, '_blank');
    
        // Clear the form fields
        document.getElementById('registrationForm').reset();
        
        // Close the modal after submission
        modal.style.display = "none";
    }
    
