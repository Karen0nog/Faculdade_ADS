
function mostrarPrompt() {

    let Frutas = []
    let Laticínios = []
    let Congelados = []
    let Doces = []
    let comida = ""
    let categoria = ""

    let adicionarComida = "sim"

    while (adicionarComida != "não") {
        adicionarComida = prompt("Deseja adicionar uma comida na sua lista de compras? (sim/não)");
        while (adicionarComida != "sim" && adicionarComida != "não") {
            alert("Operação inválida.")
            adicionarComida = prompt("Deseja adicionar uma comida na sua lista de compras? (sim/não)");
        }

        if (adicionarComida === "não") {
            break;
        }

        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa: frutas, laticínios, congelados ou doces?");

        if (categoria === "frutas") {
            Frutas.push(comida)
        }
    }
}

mostrarPrompt();