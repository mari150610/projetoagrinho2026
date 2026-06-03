document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("agroContactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Impede o envio tradicional do formulário
            event.preventDefault();

            // Captura dos dados inseridos
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validação simples (garantia extra)
            if (name === "" || email === "" || message === "") {
                showFeedback("⚠️ Por favor, preencha todos os campos obrigatórios.", "error");
                return;
            }

            // Simulação de envio com sucesso
            showFeedback(`[✓] Obrigado, ${name}! Seus dados foram enviados de forma segura. Nossa equipe entrará em contato via: ${email}.`, "success");
            
            // Reseta o formulário
            contactForm.reset();
        });
    }

    function showFeedback(text, type) {
        formFeedback.textContent = text;
        formFeedback.className = "form-feedback"; // Reseta classes
        
        if (type === "success") {
            formFeedback.classList.add("success");
        } else {
            formFeedback.style.backgroundColor = "#f9ebeb";
            formFeedback.style.color = "#a63a50";
            formFeedback.style.border = "1px solid #a63a50";
        }
        
        formFeedback.classList.remove("hidden");
    }
});