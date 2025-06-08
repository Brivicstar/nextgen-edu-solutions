document.getElementById("contact-form").addEventListener("submit", function (e) {
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
  document.getElementById("contact-form").reset();
});
