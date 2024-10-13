function handleUserInput(inputElement, outputElement, commands) {
    inputElement.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            let input = this.value.trim().toLowerCase();
            if (commands[input]) {
                let result = commands[input]();
                if (input === 'clear') {
                    outputElement.innerHTML = '';  // Efface la sortie
                } else {
                    outputElement.innerHTML += result + '<br>';  // Affiche le résultat
                }
            } else {
                outputElement.innerHTML += 'Unknown command: ' + input + '<br>';
            }
            this.value = '';  // Réinitialise le champ
        }
    });
}