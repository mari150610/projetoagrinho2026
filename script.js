document.addEventListener("DOMContentLoaded", function() {
    
    const contactForm = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Evita o recarregamento padrão da página ao enviar formulário
            event.preventDefault();

            // Captura dos dados inseridos
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validação simples
            if (name && email && message) {
                // Remove classe oculta e aplica estilo de sucesso
                feedback.classList.remove("hidden");
                feedback.className = "success-msg";
                feedback.innerText = `Obrigado pelo contato, ${name}! Sua mensagem foi simulada como enviada com sucesso.`;

                // Limpa os campos do formulário
                contactForm.reset();

                // Apaga a mensagem de sucesso após 5 segundos
                setTimeout(() => {
                    feedback.classList.add("hidden");
                }, 5000);
            }
        });
    }

    // Efeito sutil ao rolar a página: destaca o link do menu ativo
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(a => {
            a.style.color = "#ffffff"; // Reseta cor padrão
            if (a.getAttribute("href").includes(current)) {
                a.style.color = "#d4a373"; // Aplica a cor amarela fosca no link ativo
            }
        });
    });
});