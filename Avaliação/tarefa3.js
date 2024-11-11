
function mostrarPrompt() {
    const area = prompt("Você quer seguir para a Área de 'Front-end' ou de 'Back-end'? Digite o nome da área:")
    let linguagem = ""
    
    //Escolha da linguagem
    if (area === "Front-end") {
        linguagem = prompt("Você quer aprender React ou Vue?")
    } else if (area === "Back-end") {
        linguagem = prompt("Você quer aprender C# ou Java?")
    } else {
        alert("Você não inseriu uma área válida!")
    }
    
    //Especialização
    const especialidade = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar FullStack")
    
    if (especialidade == "1") {
        alert(`Você escolheu se especializar em ${area} com a linguagem ${linguagem}.`)
    } else if (especialidade == "2") {
        alert(`Você escolheu se desenvolver para se tornar FullStack.`)
    } else {
        alert("Digite 1 ou 2")
    }
    
    // Tecnologias que gostaria de aprender
    
    let tecnologias = prompt("Term mais alguma tecnologia que gostaria de aprender? Digite 'ok' se sim.")
    
    while( tecnologias == ok) {
        let novaTecnologia = prompt("Digite a tecnologia que gostaria de aprender:")
        alert(`${novaTecnologia} foi adicionada à sua lista de tecnologias a aprender.`)
        tecnologias = prompt("Tem mais alguma tecnologia que gostaria de aprender? Digite 'ok' se sim.")
    }
}
mostrarPrompt()

