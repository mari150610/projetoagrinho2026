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
    
    // Execução inicial preventiva
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);


    // 2. GERENCIAMENTO E DESTAQUE DO MARCADOR ATIVO NO MENU
    const itensMenu = document.querySelectorAll('.nav-item');
    const secoesPagina = document.querySelectorAll('section');

    const destacarMenu = () => {
        let secaoAtivaId = "";
        
        secoesPagina.forEach(secao => {
            const topoSecao = secao.offsetTop;
            // Define ativação baseada no scroll médio superior da tela
            if (window.scrollY >= (topoSecao - 320)) {
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


    // 3. PAINÉIS EXPANSÍVEIS (ACCORDION) NA SEÇÃO "COMO PARTICIPAR"
    const botoesAcordeon = document.querySelectorAll('.accordion-header');

    botoesAcordeon.forEach(botao => {
        botao.addEventListener('click', function() {
            const itemAtual = this.parentElement;
            
            // Fecha outros blocos abertos para manter a interface organizada
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== itemAtual) {
                    item.classList.remove('active');
                }
            });

            // Altera o estado do painel selecionado
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


    // 5. ROLAGEM SUAVE EXPLICITA PARA LINKS DE NAVEGAÇÃO INTERNA
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