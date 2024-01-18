function buttonClicked(buttonId) {
    // Atualizar a contagem abaixo do botão clicado
    var buttonInfo = document.getElementById('buttonInfo' + buttonId);
    var currentCount = parseInt(buttonInfo.dataset['clickCount']) || 0;

    currentCount++;

    // Limite de cliques a 99 e reiniciar para 0
    if (currentCount > 99) {
        currentCount = 0;
    }

    buttonInfo.dataset['clickCount'] = currentCount;

    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleString();

    buttonInfo.innerHTML = `Nº Senha ${currentCount} - ${formattedDate}`;

    // Atualizar a data e hora fixada na parte inferior
    var dateInfo = document.getElementById('dateInfo');
    dateInfo.innerHTML = `Data/Hora do Último Clique: ${formattedDate}`;

    // Adicionar o texto da senha clicada abaixo de tudo
    var resultInfo = document.getElementById('resultInfo');
    resultInfo.innerHTML = `Senha Clicada: Nº ${currentCount} - ${formattedDate}`;
}
