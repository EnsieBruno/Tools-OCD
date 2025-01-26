document.addEventListener("DOMContentLoaded", () => {
    const cnpjInput = document.getElementById("cnpj");
    const button = document.querySelector(".botoes-site");

    // Função para formatar o CNPJ
    cnpjInput.addEventListener("input", (event) => {
        let cnpj = event.target.value;

        // Remove caracteres não numéricos
        cnpj = cnpj.replace(/\D/g, "");

        // Aplica a máscara do CNPJ: 00.000.000/0000-00
        if (cnpj.length <= 14) {
            cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
            cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
            cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");
        }

        // Atualiza o campo de entrada com o valor formatado
        event.target.value = cnpj;
    });

    // Função para exibir o alerta na tela
    const showAlert = (message) => {
        // Cria o elemento de alerta
        const alert = document.createElement("div");
        alert.className = "alert";
        alert.textContent = message;

        // Adiciona o alerta ao body
        document.body.appendChild(alert);

        // Mostra o alerta com animação
        setTimeout(() => alert.classList.add("show"), 100);

        // Remove o alerta após 3 segundos
        setTimeout(() => {
            alert.classList.remove("show");
            setTimeout(() => alert.remove(), 500); // Remove do DOM após animação
        }, 3000);
    };

    // Função para copiar o CNPJ sem formatação
    button.addEventListener("click", () => {
        let cnpj = cnpjInput.value;

        // Remove pontos, barras e traços
        const cnpjLimpo = cnpj.replace(/\D/g, "");

        // Copia para a área de transferência
        navigator.clipboard.writeText(cnpjLimpo)
            .then(() => {
                showAlert("CNPJ sem formatação copiado para a área de transferência!");
            })
            .catch((err) => {
                showAlert("Erro ao copiar o CNPJ: " + err);
            });
    });
});
