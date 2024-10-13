const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input-field');
var lastCommand = [];
var nextCommand = -1;

// Configuration de l'interface
const config = {
    outputElement: document.getElementById('output'),
    welcomeText:  ''+
    '<p class="ascii success">' +
        '_____________________________________________________________________________________________ <br>' +
        ' _    _                               __  __       _     _____ _   _ <br>' +
        '| |  | |                             |  \\/  | /\\  | |   |  ___| | / / <br>' +
        '| |__| | __ _  ___ ___ ___  _ ___    | \\  / |/  \\ | |   | |___| |/ /<br>' +
        '|  __  |/ _` |/ __/ __/ _ \\| \'_  \\   | |\\/| | /\\ \\| |   |  ___| | /  <br>' +
        '| |  | | (_| |\\__ \\__ \\  _/| | | |   | |  | |/__\\ | |___| |___| |\\ \\ <br>' +
        '|_|  |_|\\__,_||___/___/\\___|_| |_|   |_|  |_|    \\|_____|_____|_| \\_\\ <br>' +
        '_____________________________________________________________________________________________ <br>'+ 
        '_____________________________________________________________________________________________ </p><br>'+ 

        '<br>Welcome!<br><br>' +
        'After spending 10 years in the agri-food industry, I decided to transition into application development. I began this journey in January 2024  <br>' +
        'with an intensive training program at Ada Tech School, where I worked on numerous team projects using various languages and tools such as JavaScript,  <br>' +
        'PHP, Symfony, React, and MySQL. This experience allowed me to develop a solid coding culture (clean code, OOP, Mob Programming, Code Review, <br>' +
        'test-driven development, Agile methodology, cybersecurity) and to further enhance my skills independently. <br>' +
        'I am currently pursuing a second training program at Diginamic, which I started in September 2024, to specialize in the Full Stack Java ecosystem.  <br>' +
        'This training aims to strengthen my skills and deepen my mastery of Java technologies. I will take my RNCP Level 6 exam in June 2025. <br>' +
        'As part of this journey, I am seeking a 2.5-month internship starting in late January 2025, where I can apply my skills and contribute to ambitious projects within a dynamic company.<br><br><br>' +
        'Type "help" to display list of available commands. Type "exit" to leave the terminal.<br>'
};


const commands = {
    init: function init() {
        console.warn('Initializing ...');
        Loading(() => {
            outputElement.innerHTML = config.welcomeText;
            inputElement.removeAttribute("disabled");
            inputElement.focus();
        });
    },
    help: function help() {
        console.warn('Executing "help" command');
        return ''+
        '<table>'+
            '<tr>' +
                '<th>Command</th>' +
                '<th>Description</th>' +
            '<tr>' +
            '<tr>' +
                '<td>help</td>' +
                '<td>Display a list of available commands.</td>' +
            '<tr>' +
            '<tr>' +
                '<td>projects</td>' +
                '<td>Display a list of projects.</td>' +
            '<tr>' +
            '<tr>' +
                '<td>about</td>' +
                '<td>Learn more about the developer.</td>' +
            '<tr>' +
            '<tr>' +
                '<td>contact</td>' +
                '<td>Contact by E-mail</td>' +
            '<tr>' +
            '<tr>' +
                '<td>clear</td>' +
                '<td>Clear the terminal window.</td>' +
            '<tr>' +
            '<tr>' +
                '<td>exit</td>' +
                '<td>Leave the terminal.</td>' +
            '<tr>' +
        '</table>';
    },
    exit: function exit() {
        console.warn('Executing "exit" command');
        window.location.replace("https://github.com/HhassenMALEK");
    },
    contact: function contact() {
        console.warn('Executing "contact" command');
        outputElement.innerHTML += '<p>You can contact me at  <a href="h.hassen.malek@gmail.com">h.hassen.malek@gmail.com</a> .</p>';
    },
    clear: function clear() {
        console.warn('Executing "clear" command');
        config.outputElement.innerHTML = '';
    },
    projects: function projects() {
        console.warn('Executing "projects" command');
        return '' +
            '<table>' +
                '<tr>' +
                    '<th>ID</th>' +
                    '<th>Name</th>' +
                    '<th>Description</th>' +
                '</tr>' + 
                '<tr>' +
                    '<td class="id">1</td>' +
                    '<td><a href="https://hhassenmalek.github.io/Festivals-Pays-de-la-Loire/" target="_blank">Festivals Pays  de LA loire</a></td>' +
                    '<td>I gathered all festivals taking place in the Pays de la Loire on a map by connecting to the French government s API en français .</td>' +
            
            '</table>';
    }
};     

// Fonction de chargement asynchrone
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
            if (input === 'clear') {
                config.outputElement.innerHTML = '';  // Efface la sortie
            } else {
                config.outputElement.innerHTML += result + '<br>';  // Affiche le résultat
            }
        } else {
            config.outputElement.innerHTML += 'Unknown command: ' + input + '<br>';
        }
        this.value = '';  // Réinitialise le champ
    }
});
