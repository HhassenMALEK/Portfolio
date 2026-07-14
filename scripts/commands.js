const commands = {
    init: async function init() {
        await Loading();
        outputElement.innerHTML = config.welcomeText;
        inputElement.removeAttribute('disabled');
        inputElement.focus();
        outputElement.scrollTop = outputElement.scrollHeight;
    },

    help: function help() {
        return (
            '<table>' +
                '<tr><th>Command</th><th>Description</th></tr>' +
                '<tr><td>help</td><td>Display a list of available commands.</td></tr>' +
                '<tr><td>projects</td><td>Display a list of projects.</td></tr>' +
                '<tr><td>cv</td><td>View my CV.</td></tr>' +
                '<tr><td>contact</td><td>Contact by E-mail.</td></tr>' +
                '<tr><td>linkedin</td><td>Link to my LinkedIn profile.</td></tr>' +
                '<tr><td>clear</td><td>Clear the terminal window.</td></tr>' +
                '<tr><td>exit</td><td>Leave the terminal.</td></tr>' +
            '</table>'
        );
    },

    exit: function exit() {
        window.location.href = 'https://github.com/HhassenMALEK';
        return '';
    },

    contact: function contact() {
        return '<p>You can contact me at <a href="mailto:h.hassen.malek@gmail.com">h.hassen.malek@gmail.com</a>.</p>';
    },

    clear: function clear() {
        outputElement.innerHTML = '';
        return '';
    },

    projects: function projects() {
        return (
            '<table>' +
                '<tr><th>ID</th><th>Name</th><th>Description</th></tr>' +
                '<tr>' +
                    '<td class="id">1</td>' +
                    '<td><a href="https://hhassenmalek.github.io/Festivals-Pays-de-la-Loire/" target="_blank">Festivals Pays de la Loire</a></td>' +
                    '<td>All festivals in Pays de la Loire displayed on a map, connected to the French government API.</td>' +
                '</tr>' +
            '</table>'
        );
    },

    cv: function cv() {
        window.open('src/monCv.pdf', '_blank');
        return '';
    },

    linkedin: function linkedin() {
        return '<p>You can find my LinkedIn profile <a href="https://www.linkedin.com/in/hassenmalek/" target="_blank">here</a>.</p>';
    }
};
