function calculate() {

    while (true) {
        const option = prompt(
            "Escolha a operação:\n1: Soma \n2: Subtração \n3:  Multiplicação \n4: Divisão \n0: Sair"
        );

// =============== Verifica se a opção é válida ===============
        if (option !== "1" && option !== "2" && option !== "3" && option !== "4" && option !== "0") {
            alert("Essa opção não existe");
            continue; // Continua o loop, voltando ao início
        }

// ===============Sai do programa se a opção for 0 ===============
        if (option === "0") {
            alert("Saindo do programa.");
            break;
        }

// =============== Obtém os números do usuário ===============
        const number1 = parseFloat(prompt("Digite o primeiro número:"));
        const number2 = parseFloat(prompt("Digite o segundo número:"));

// =============== Verifica se os números são válidos ===============
        if (isNaN(number1) || isNaN(number2)) {
            alert("Por favor, digite números válidos");
            continue; // Continua o loop, voltando ao início
        }

// =============== Executa a operação escolhida ===============
        let result;
        switch (option) {
            case "1":
                result = number1 + number2;
                break;
            case "2":
                result = number1 - number2;
                break;
            case "3":
                result = number1 * number2;
                break;
            case "4":
                if (number2 === 0) {
                    alert("Não é possível dividir por zero.");
                    continue; // Continua o loop, voltando ao início
                } 
                result = number1 / number2;
                break;
        }

// ===============Exibe o resultado ===============
        alert(`Resultado: ${result}`);
    }
}

calculate();

