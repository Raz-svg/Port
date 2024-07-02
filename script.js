document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Using SMTP.js to send email
        Email.send({
            SecureToken: "YOUR_SMTP_JS_SECURE_TOKEN",
            To: 'akshitbadyal263@gmail.com',
            From: email,
            Subject: "New message from portfolio website",
            Body: message
        }).then(
            message => alert("Message sent successfully!")
        );
    });
});
