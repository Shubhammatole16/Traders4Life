    const modal = document.getElementById("myModal");
   
    const openModalBtn = document.getElementById("openModalBtn");
    
    const closeSpan = document.getElementsByClassName("close")[0];
    
    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }
    
    closeSpan.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    
    // Function to send data to WhatsApp
    function sendOfflineData(event) {
        event.preventDefault();
    
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const batch = document.querySelector('input[name="batch"]').value;

        const message = `Registration Details:\nName: ${name}\nPhone: ${phone}\nBatch: ${batch}`;

        const encodedMessage = encodeURIComponent(message);

        const whatsappNumber = '919518303249'; 

        const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

        console.log('WhatsApp Link:', whatsappLink);

        window.open(whatsappLink, '_blank');

        document.getElementById('registrationForm').reset();

        modal.style.display = "none";
    }
    
