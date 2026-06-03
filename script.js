// --- SISTEMA INTERATIVO DE DIRETRIZES ---
function mostrarDiretriz(tema) {
    const painelResultado = document.getElementById("interactive-result");
    
    // Configura as respostas com base no botão clicado
    const diretrizes = {
        solo: "Diretriz Técnica de Solo: Implemente imediatamente testes de análise de macro e micronutrientes. Recomendado o uso de plantas de cobertura (leguminosas) no período de entressafra para fixação biológica de nitrogênio e proteção mecânica contra intempéries.",
        seguranca: "Diretriz de Segurança Ocupacional: Realizar a checagem diária das travas mecânicas de tratores e pulverizadores. Certifique-se de que a lavagem e descontaminação das roupas de proteção (EPI) ocorram em local isolado das residências.",
        logistica: "Diretriz de Rastreabilidade Integrada: Utilize documentação digitalizada por lotes. Garanta barreiras de umidade nos galpões de transbordo para mitigar a proliferação de fungos e micotoxinas no trajeto até os centros urbanos."
    };

    // Altera o texto de forma limpa e dinâmica
    if (diretrizes[tema]) {
        painelResultado.innerHTML = `<strong>[Recomendação Sistema AgroForte]</strong> <br><br> ${diretrizes[tema]}`;
        painelResultado.style.borderLeftColor = "#2e5339"; // Muda para verde quando ativo
    }
}

// --- SISTEMA DE PESQUISA INTERNA ---
function buscarConteudo() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const cards = document.querySelectorAll(".card-info");
    let encontrouAlgo = false;

    if (input === "") {
        alert("Por favor, digite um termo para pesquisar.");
        // Restaura a opacidade caso pesquise em branco
        cards.forEach(card => card.style.opacity = "1");
        return;
    }

    cards.forEach(card => {
        const titulo = card.querySelector("h3").innerText.toLowerCase();
        const texto = card.querySelector("p").innerText.toLowerCase();
        
        // Verifica se o termo está contido no título ou no texto do card
        if (titulo.includes(input) || texto.includes(input)) {
            card.style.opacity = "1";
            card.style.transform = "scale(1.02)";
            encontrouAlgo = true;
            
            // Um leve efeito de destaque temporal no card encontrado
            card.style.transition = "all 0.4s ease";
        } else {
            card.style.opacity = "0.3"; // Esmaece o que não for correspondente
            card.style.transform = "scale(0.98)";
        }
    });

    if (!encontrouAlgo) {
        alert("Nenhum bloco de conteúdo específico encontrado para: '" + input + "'. Tente palavras como: 'Solo', 'Segurança', 'Cidade' ou 'Impactos'.");
        // Restaura os cards originais
        cards.forEach(card => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
        });
    }
}

// Permite acionar a busca ao pressionar 'Enter' dentro do input de pesquisa
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        buscarConteudo();
    }
});