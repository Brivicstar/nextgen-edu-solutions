// Add event listener for contact form submission only once
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const response = document.getElementById("response");

    if (name === "" || email === "" || message === "") {
      response.style.color = "red";
      response.textContent = "Please fill out all fields.";
      return;
    }

    // Simulate sending the message
    response.style.color = "green";
    response.textContent = `Thank you, ${name}! Your message has been received.`;

    // Clear the form fields
    contactForm.reset();
  });
}

// Add smooth scroll event listeners only once
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
/*
  Only the contact form submission event listener is necessary for this script.
  Removed other event listeners for clarity and to avoid duplication.
*/

// No additional event listeners needed.
