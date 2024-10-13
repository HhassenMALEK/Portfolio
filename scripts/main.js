async function Loading(callback) {
    var dots = ['.', '..', '...', '....'];
    for (let i = 0; i < 5; i++) {
        config.outputElement.innerHTML = "Loading" + dots[i % dots.length];      
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    callback();
}

// Initialisation au chargement de la fenêtre
window.onload = function() {
    commands.init();
};

// Gestion des commandes saisies par l'utilisateur
document.getElementById('input-field').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let input = this.value.trim().toLowerCase();
        if (commands[input]) {
            let result = commands[input]();
            // Pas besoin d'afficher le résultat pour la commande "cv"
            if (input !== 'clear') {
                config.outputElement.innerHTML += result + '<br>';  // Affiche le résultat
            }
        } else {
            config.outputElement.innerHTML += 'Unknown command: ' + input + '<br>';
        }
        this.value = '';  
    }
});