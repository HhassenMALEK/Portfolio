const commands = {
    init: function init() {
        console.warn('Initializing ...');
        Loading(() => {
            outputElement.innerHTML = config.welcomeText;
            inputElement.removeAttribute("disabled");
            inputElement.focus();
           
            outputElement.scrollTop = outputElement.scrollHeight;
        });
    },
    help: function help() {
        console.warn('Executing "help" command');
        const result = '' +
        '<table>' +
            '<tr>' +
                '<th>Command</th>' +
                '<th>Description</th>' +
            '</tr>' +
            '<tr>' +
                '<td>help</td>' +
                '<td>Display a list of available commands.</td>' +
            '</tr>' +
            '<tr>' +
                '<td>projects</td>' +
                '<td>Display a list of projects.</td>' +
            '</tr>' +
            '<tr>' +
                '<td>cv</td>' +
                '<td>View my CV.</td>' +
            '</tr>' +
            '<tr>' +
                '<td>contact</td>' +
                '<td>Contact by E-mail.</td>' +
            '</tr>' +
            '<tr>' +
                '<td>linkedin</td>' +
                '<td>Link to my LinkedIn profile.</td>' +
            '</tr>' +
            '<tr>' +
                '<td>clear</td>' +
                '<td>Clear the terminal window.</td>' +
            '</tr>' +
            '<tr>' +
                '<td>exit</td>' +
                '<td>Leave the terminal.</td>' +
            '</tr>' +
        '</table>';

        outputElement.innerHTML += result + '<br>'; 
        outputElement.scrollTop = outputElement.scrollHeight; 
        return ''; 
    },
    exit: function exit() {
        console.warn('Executing "exit" command');
        window.location.replace("https://github.com/HhassenMALEK");
        return ''; 
    },
    contact: function contact() {
        console.warn('Executing "contact" command');
        outputElement.innerHTML += '<p>You can contact me at <a href="mailto:h.hassen.malek@gmail.com">h.hassen.malek@gmail.com</a>.</p>';
        outputElement.scrollTop = outputElement.scrollHeight; 
        return ''; 
    },
    clear: function clear() {
        console.warn('Executing "clear" command');
        outputElement.innerHTML = '';
        return ''; 
    },
    projects: function projects() {
        console.warn('Executing "projects" command');
        const result = '' +
            '<table>' +
                '<tr>' +
                    '<th>ID</th>' +
                    '<th>Name</th>' +
                    '<th>Description</th>' +
                '</tr>' + 
                '<tr>' +
                    '<td class="id">1</td>' +
                    '<td><a href="https://hhassenmalek.github.io/Festivals-Pays-de-la-Loire/" target="_blank">Festivals Pays de la Loire</a></td>' +
                    '<td>I gathered all festivals taking place in the Pays de la Loire on a map by connecting to the French government API.</td>' +
                '</tr>' +
            '</table>';
        
        outputElement.innerHTML += result + '<br>'; 
        outputElement.scrollTop = outputElement.scrollHeight; 
        return ''; 
    },
    cv: function cv() {
        console.warn('Executing "cv" command');
        window.open('src/monCv.pdf', '_blank');  
        outputElement.scrollTop = outputElement.scrollHeight; 
        return ''; 
    }, 
    linkedin: function linkedin() {
        console.warn('Executing "linkedin" command');
        outputElement.innerHTML += '<p>You can find my LinkedIn profile <a href="https://www.linkedin.com/in/hassenmalek/" target="_blank">here</a>.</p>';
        outputElement.scrollTop = outputElement.scrollHeight;
        return ''; 
         
    }
};
