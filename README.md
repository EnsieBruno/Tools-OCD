# 📝 Formatador e Copiador de CNPJ

Este é um script JavaScript simples e prático, projetado para melhorar a experiência do usuário ao lidar com campos de entrada de CNPJ. Ele automaticamente formata o CNPJ enquanto o usuário digita e permite que o valor, já limpo e sem formatação, seja copiado facilmente para a área de transferência.

---

## ✨ Recursos

-   **Formatação Automática**: Aplica a máscara padrão de CNPJ (`00.000.000/0000-00`) em tempo real, tornando a inserção de dados mais fácil e visualmente organizada.
-   **Cópia de Valor Limpo**: Ao clicar em um botão, o script remove todos os pontos, barras e traços do CNPJ e copia apenas os números para a área de transferência. Isso é ideal para colar o valor em campos que exigem o formato numérico puro.
-   **Alerta de Confirmação**: Exibe uma notificação pop-up amigável para confirmar que o CNPJ foi copiado com sucesso ou para informar sobre qualquer erro.

---

## 🛠️ Como Funciona

O script é ativado assim que a página é totalmente carregada e interage com dois elementos principais do HTML: um campo de entrada com o ID `cnpj` e um botão com a classe `botoes-site`.

1.  **Formatação (`input` event)**: Quando o usuário digita no campo de CNPJ, o script ouve o evento `input`. Ele remove todos os caracteres não numéricos (`\D`) do valor e utiliza expressões regulares para adicionar os pontos, barra e traço nos lugares corretos, formatando o CNPJ em `00.000.000/0000-00`.

2.  **Cópia (`click` event)**: Ao clicar no botão, o script obtém o valor do campo de CNPJ, remove a formatação (`.`, `/`, `-`) para obter apenas os números, e usa a API `navigator.clipboard.writeText()` para copiar o valor limpo para a área de transferência. Em seguida, ele exibe uma mensagem de sucesso ou erro.

3.  **Sistema de Alerta (`showAlert` function)**: Cria um novo elemento `div` para a mensagem de alerta, adiciona-o ao corpo do documento e utiliza `setTimeout` com classes CSS (`.show`) para animar a entrada e saída do alerta, garantindo que ele seja visível por um breve período (3 segundos) antes de desaparecer.

---

## 🚀 Como Usar

Para integrar este script ao seu projeto, certifique-se de que seu arquivo HTML contenha os seguintes elementos:

```html
<input type="text" id="cnpj" placeholder="Insira o CNPJ" maxlength="18">

<button class="botoes-site">
  Copiar CNPJ
</button>
