const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input-field');

const config = {
    outputElement: outputElement,
    welcomeText:
    '<p class="ascii success">' +
        '_____________________________________________________________________________________________ <br>' +
        ' _    _                               __  __       _     _____ _   _ <br>' +
        '| |  | |                             |  \\/  | /\\  | |   |  ___| | / / <br>' +
        '| |__| | __ _  ___ ___ ___  _ ___    | \\  / |/  \\ | |   | |___| |/ /<br>' +
        '|  __  |/ _` |/ __/ __/ _ \\| \'_  \\   | |\\/| | /\\ \\| |   |  ___| | /  <br>' +
        '| |  | | (_| |\\__ \\__ \\  _/| | | |   | |  | |/__\\ | |___| |___| |\\ \\ <br>' +
        '|_|  |_|\\__,_||___/___/\\___|_| |_|   |_|  |_|    \\|_____|_____|_| \\_\\ <br>' +
        '_____________________________________________________________________________________________ <br>' +
        '_____________________________________________________________________________________________ </p><br>' +

        '<br>Welcome!<br><br>' +
        'After spending 10 years in the agri-food industry, I transitioned into application development.<br>' +
        'I trained at Ada Tech School (January 2024), working on team projects with JavaScript, PHP, Symfony, React, and MySQL,<br>' +
        'developing skills in clean code, OOP, Mob Programming, Code Review, TDD, Agile, and cybersecurity.<br>' +
        'I then specialized in the Full Stack Java ecosystem at Diginamic, where I obtained my RNCP Level 6 certification.<br><br>' +
        'Type <span class="highlight">"help"</span> to display the list of available commands. Type <span class="highlight">"exit"</span> to leave.<br><br><br>'
};
