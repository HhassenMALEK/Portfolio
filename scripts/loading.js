async function Loading(callback) {
    var dots = ['.', '..', '...', '....'];
    for (let i = 0; i < 5; i++) {
        config.outputElement.innerHTML = "Loading" + dots[i % dots.length];      
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    callback();
}

const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input-field');