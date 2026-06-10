document.addEventListener('DOMContentLoaded', () => {

    // 1. ANIMAÇÃO DE REVELAÇÃO AO ROLAR A PÁGINA (Scroll Reveal)
    const secoes = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = () => {
        const gatilho = window.innerHeight * 0.85;
        secoes.forEach(secao => {
            const topoSecao = secao.getBoundingClientRect().top;
            if (topoSecao < gatilho) {
                secao.classList.add('visible');
            }
        });
    };
    
    // Executa uma vez no início para revelar as seções visíveis no topo
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);


    // 2. GERENCIAMENTO E DESTAQUE DO MARCADOR ATIVO NO MENU
    const itensMenu = document.querySelectorAll('.nav-item');
    const secoesPagina = document.querySelectorAll('section');

    const destacarMenu = () => {
        let secaoAtivaId = "";
        
        secoesPagina.forEach(secao => {
            const topoSecao = secao.offsetTop;
            const alturaSecao = secao.clientHeight;
            // Define o ponto de ativação no meio da janela do navegador
            if (window.scrollY >= (topoSecao - 300)) {
                secaoAtivaId = secao.getAttribute('id');
            }
        });

        itensMenu.forEach(item => {
            item.classList.remove('active');
            const link = item.querySelector('a');
            if (link.getAttribute('href') === `#${secaoAtivaId}`) {
                item.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', destacarMenu);


    // 3. CARDS EXPANSÍVEIS (ACCORDION) NA SEÇÃO "COMO PARTICIPAR"
    const botoesAcordeon = document.querySelectorAll('.accordion-header');

    botoesAcordeon.forEach(botao => {
        botao.addEventListener('click', function() {
            const itemAtual = this.parentElement;
            
            // Fecha outros painéis que possam estar abertos (apenas um aberto por vez)
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== itemAtual) {
                    item.classList.remove('active');
                }
            });

            // Alterna o estado do item clicado
            itemAtual.classList.toggle('active');
        });
    });


    // 4. BOTÃO RETORNO AO TOPO (Back to Top)
    const botaoTopo = document.getElementById('btn-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            botaoTopo.style.display = "flex";
        } else {
            botaoTopo.style.display = "none";
        }
    });

    botaoTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // 5. ROLAGEM SUAVE EXPLICITA PARA COMPATIBILIDADE DE NAVEGADORES
    const linksInternos = document.querySelectorAll('.nav-item a, #btn-explorar');

    linksInternos.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const destinoId = this.getAttribute('href');
            const elementoDestino = document.querySelector(destinoId);

            if (elementoDestino) {
                elementoDestino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});