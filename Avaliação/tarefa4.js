function mostrarPrompt() {
// Número a ser adivinhado (pré-definido)
let numeroParaAdivinhar = 7;

// Função para adivinhar o número
function adivinharNumero() {
    let tentativas = 3;

    while (tentativas > 0) {
        let chute = prompt("Digite seu chute (entre 0 e 10):");

        if (chute == numeroParaAdivinhar) {
            alert("Parabéns! Você acertou!");
            return;
        } else {
            tentativas--;
            alert(`Errado! Você tem mais ${tentativas} tentativas.`);
        }
    }

    alert(`Você não acertou. O número era ${numeroParaAdivinhar}`);
}

// Chama a função para iniciar o jogo
adivinharNumero();

}
mostrarPrompt()
