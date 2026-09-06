document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1200
    });

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            status.textContent = "Por favor, completa todos los campos.";
            return;
        }

        status.textContent = "Enviando...";

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("No se pudo enviar el formulario.");
            }

            status.textContent = "Mensaje enviado correctamente.";
            form.reset();
        } catch (error) {
            status.textContent =
                "Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.";
            console.error(error);
        }
    });

    const emoji = document.querySelector(".emoji");

    if (emoji) {
        document.addEventListener("mousemove", (event) => {
            emoji.style.position = "absolute";
            emoji.style.left = `${event.clientX + 10}px`;
            emoji.style.top = `${event.clientY + 10}px`;
        });
    }
});

