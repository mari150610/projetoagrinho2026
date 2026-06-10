document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DESTAQUE DINÂMICO DO MARCADOR ATIVO NO MENU LATERAL ---
    const sections = document.querySelectorAll('.target-section');
    const menuItems = document.querySelectorAll('.menu-item');

    const updateActiveMarker = () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Verifica se a rolagem atual passou do topo da seção deduzindo uma margem técnica
            if (window.scrollY >= (sectionTop - 160)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveMarker);


    // --- 2. ROLAGEM SUAVE EXTRA PARA CLIQUES NOS MARCADORES ---
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetPosition = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- 3. CARDS EXPANSÍVEIS (ACORDEONS) - SEÇÃO COMO PARTICIPAR ---
    const accTriggers = document.querySelectorAll('.acc-trigger');

    accTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const parent = this.parentElement;
            const panel = this.nextElementSibling;
            
            // Alterna o estado do item clicado
            if (parent.classList.contains('open')) {
                panel.style.maxHeight = null;
                parent.classList.remove('open');
            } else {
                // Fecha outros painéis abertos para manter a organização limpa
                document.querySelectorAll('.acc-item').forEach(item => {
                    item.classList.remove('open');
                    item.querySelector('.acc-panel').style.maxHeight = null;
                });

                // Abre o painel correspondente calculando sua altura real de forma fluida
                parent.classList.add('open');
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });


    // --- 4. BOTÃO DE RETORNO AO TOPO ---
    const btnBackToTop = document.getElementById('btnBackToTop');

    window.addEventListener('scroll', () => {
        // Exibe o botão apenas se ultrapassar 400px de rolagem vertical
        if (window.scrollY > 400) {
            btnBackToTop.style.display = 'flex';
        } else {
            btnBackToTop.style.display = 'none';
        }
    });

    btnBackToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});