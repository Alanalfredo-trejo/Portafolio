// Initialize AOS (Animate On Scroll) library
AOS.init({
  duration: 1200, // Duration of animations
});

// Validacion del formulario
document.querySelector("form").addEventListener("submit", function (event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Por favor, complete todos los campos.");
    event.preventDefault(); // Prevent form submission
  }
});

document.addEventListener('mousemove', (e) => {
  const emoji = document.querySelector('.emoji');
  emoji.style.position = 'absolute';
  emoji.style.left = `${e.clientX + 10}px`;
  emoji.style.top = `${e.clientY + 10}px`;
});

AOS.init();
