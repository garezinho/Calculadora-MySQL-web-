function calcularPorcentagem() {
    var execucoesInput = document.querySelector('.texto1');
    var errosInput = document.querySelector('.texto2');
    var resultadosDiv = document.getElementById('resultados');

    var execucoes = parseInt(execucoesInput.value);
    var erros = parseInt(errosInput.value);
    var acertos = execucoes - erros;

    var porcentagemAcertos = (acertos / execucoes) * 100;
    var porcentagemErros = (erros / execucoes) * 100;

    resultadosDiv.innerHTML = 'Porcentagem de Acertos: ' + porcentagemAcertos.toFixed(2) + '%<br>' +
                              'Porcentagem de Erros: ' + porcentagemErros.toFixed(2) + '%';
}

function limparCampos() {
    var execucoesInput = document.querySelector('.texto1');
    var errosInput = document.querySelector('.texto2');
    var resultadosDiv = document.getElementById('resultados');

    execucoesInput.value = '';
    errosInput.value = '';
    resultadosDiv.innerHTML = '';
}
