// Smooth scrolling handled by CSS (scroll-behavior)
// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop default submit
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you for contacting me, " + name + "!");
        document.getElementById('contact-form').reset();
    }
});
