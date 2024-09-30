document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Reset the form fields
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
