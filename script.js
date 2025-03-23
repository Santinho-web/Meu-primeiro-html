function calcularNota() {
    // Obter as notas
    const notaAC1 = parseFloat(document.getElementById('nota_ac1').value);
    const notaAC2 = parseFloat(document.getElementById('nota_ac2').value);
    const notaAP = parseFloat(document.getElementById('nota_ap').value);

    // Calcular a média de ACS
    const mediaACS = (notaAC1 + notaAC2) / 2;

    // Calcular a nota final
    const notaFinal = (2 * mediaACS + notaAP) / 3;

    // Exibir o resultado
    document.getElementById('resultado').innerText = 'Nota Final: ' + notaFinal.toFixed(2);
}
