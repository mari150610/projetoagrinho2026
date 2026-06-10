document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.sidebar-menu a');

    // 1. Alternar abertura e fechamento do menu mobile
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.classList.toggle('open');
        sidebar.classList.toggle('open');
        
        // Atributos de acessibilidade ARIA atualizados dinamicamente
        menuToggle.setAttribute('aria-expanded', isOpen);
        sidebar.setAttribute('aria-hidden', !isOpen);
    });

    // 2. Fechar menu ao clicar em qualquer item (Útil em ambiente mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('open');
                sidebar.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                sidebar.setAttribute('aria-hidden', 'true');
            }
        });
    });

    // 3. Sistema dinâmico e performático de Scroll Spy (Destacar seção ativa no menu)
    const sections = document.querySelectorAll('main section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Dispara quando 30% da seção estiver visível na tela
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});