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
                '<tr><td>whoami</td><td>About me.</td></tr>' +
                '<tr><td>skills</td><td>My technical skills.</td></tr>' +
                '<tr><td>projects</td><td>Display a list of projects.</td></tr>' +
                '<tr><td>cv</td><td>View my CV.</td></tr>' +
                '<tr><td>contact</td><td>Contact by E-mail.</td></tr>' +
                '<tr><td>linkedin</td><td>Link to my LinkedIn profile.</td></tr>' +
                '<tr><td>theme</td><td>Toggle light / dark theme.</td></tr>' +
                '<tr><td>clear</td><td>Clear the terminal window.</td></tr>' +
                '<tr><td>exit</td><td>Leave the terminal.</td></tr>' +
            '</table>'
        );
    },

    whoami: function whoami() {
        return (
            '<p>' +
            '<span class="highlight">Hassen MALEK</span> — Développeur Full Stack<br><br>' +
            'Après 10 ans dans l\'industrie agroalimentaire, j\'ai bifurqué vers le développement en janvier 2024.<br>' +
            'Formé à <span class="highlight">Ada Tech School</span> — JavaScript, PHP, Symfony, React, MySQL,<br>' +
            'avec une culture tech solide : clean code, OOP, TDD, Mob Programming, Code Review, Agile, cybersécurité.<br>' +
            'Puis spécialisé en <span class="highlight">Full Stack Java</span> chez Diginamic — certifié RNCP Niveau 6.<br><br>' +
            'Curieux, rigoureux, et convaincu que le code est avant tout un outil au service des gens.' +
            '</p>'
        );
    },

    skills: function skills() {
        return (
            '<table>' +
                '<tr><th>Domaine</th><th>Technologies</th></tr>' +
                '<tr><td>Frontend</td><td>HTML · CSS · JavaScript · React</td></tr>' +
                '<tr><td>Backend</td><td>Java · Spring Boot · PHP · Symfony</td></tr>' +
                '<tr><td>Base de données</td><td>MySQL</td></tr>' +
                '<tr><td>Outils</td><td>Git · GitHub · IntelliJ · VS Code</td></tr>' +
                '<tr><td>Méthodes</td><td>Agile/Scrum · TDD · Clean Code · Code Review · Mob Programming</td></tr>' +
            '</table>'
        );
    },

    projects: function projects() {
        return (
            '<table>' +
                '<tr><th>ID</th><th>Nom</th><th>Description</th></tr>' +
                '<tr>' +
                    '<td class="id">1</td>' +
                    '<td><a href="https://hhassenmalek.github.io/Festivals-Pays-de-la-Loire/" target="_blank">Festivals Pays de la Loire</a></td>' +
                    '<td>Carte interactive des festivals en Pays de la Loire via l\'API du gouvernement français.</td>' +
                '</tr>' +
            '</table>'
        );
    },

    cv: function cv() {
        window.open('src/monCv.pdf', '_blank');
        return '';
    },

    contact: function contact() {
        return '<p>Contactez-moi par e-mail : <a href="mailto:h.hassen.malek@gmail.com">h.hassen.malek@gmail.com</a></p>';
    },

    linkedin: function linkedin() {
        return '<p>Mon profil LinkedIn : <a href="https://www.linkedin.com/in/hassenmalek/" target="_blank">linkedin.com/in/hassenmalek</a></p>';
    },

    theme: function theme() {
        const isLight = document.body.classList.toggle('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        return '<p>Thème basculé en mode <span class="highlight">' + (isLight ? 'light' : 'dark') + '</span>.</p>';
    },

    clear: function clear() {
        outputElement.innerHTML = '';
        return '';
    },

    exit: function exit() {
        window.location.href = 'https://github.com/HhassenMALEK';
        return '';
    },

    // Easter eggs
    ls: function ls() {
        return '<p>whoami &nbsp;&nbsp; skills &nbsp;&nbsp; projects &nbsp;&nbsp; cv &nbsp;&nbsp; contact &nbsp;&nbsp; linkedin &nbsp;&nbsp; theme &nbsp;&nbsp; help &nbsp;&nbsp; clear &nbsp;&nbsp; exit</p>';
    },
    pwd: function pwd() {
        return '<p>/home/hassen/portfolio</p>';
    },
    sudo: function sudo() {
        return '<p class="error">Permission denied. Nice try. 😄</p>';
    },
    date: function date() {
        return '<p>' + new Date().toLocaleString('fr-FR') + '</p>';
    }
};
