async function Loading(callback) {
    var dots = ['.', '..', '...', '....'];
    for (let i = 0; i < 5; i++) {
        config.outputElement.innerHTML = "Loading" + dots[i % dots.length];      
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    callback();
}

window.onload = function() {
    commands.init();
};

document.getElementById('input-field').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let input = this.value.trim().toLowerCase();
        if (commands[input]) {
            let result = commands[input]();
           
            if (input !== 'clear') {
                config.outputElement.innerHTML += result + '<br>';  
            }
        } else {
            config.outputElement.innerHTML += 'Unknown command: ' + input + '<br>';
        }
        this.value = '';  
    }
});