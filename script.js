document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove estado ativo de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Remove estado ativo de todos os painéis
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Adiciona classe ativa ao botão clicado
            button.classList.add('active');
            
            // Ativa o painel correspondente ao atributo data-tab
            const targetTabId = button.getAttribute('data-tab');
            const targetPane = document.getElementById(targetTabId);
            
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});