
function mostrarPrompt() {

    let frutas = []
    let laticinios = []
    let congelados = []
    let doces = []
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
            frutas.push(comida)
        } else if (categoria === "laticínios") {
            laticinios.push(comida)
        } else if (categoria === "congelados") {
            congelados.push(comida)
        } else if (categoria === "doces") {
            doces.push(comida)
        } else {
            alert("Categoria inválida.")
        }

    }
    alert(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`);
}

mostrarPrompt();