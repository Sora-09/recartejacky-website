// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page refresh

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    document.getElementById('response').textContent = `Thank you, ${name}! Your message has been received.`;
    
    // Clear form
    document.getElementById('contactForm').reset();
});
