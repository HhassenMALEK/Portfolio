async function Loading() {
    const dots = ['.', '..', '...', '....'];
    for (let i = 0; i < 5; i++) {
        config.outputElement.innerHTML = 'Loading' + dots[i % dots.length];
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Restore saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') document.body.classList.add('light');

const commandHistory = [];
let historyIndex = -1;

const HIDDEN_COMMANDS = ['init', 'ls', 'pwd', 'sudo', 'date'];

document.getElementById('input-field').addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            this.value = commandHistory[historyIndex];
        }
        return;
    }

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            this.value = commandHistory[historyIndex];
        } else {
            historyIndex = -1;
            this.value = '';
        }
        return;
    }

    if (e.key === 'Tab') {
        e.preventDefault();
        const partial = this.value.trim().toLowerCase();
        if (!partial) return;
        const visibleCommands = Object.keys(commands).filter(cmd => !HIDDEN_COMMANDS.includes(cmd));
        const matches = visibleCommands.filter(cmd => cmd.startsWith(partial));
        if (matches.length === 1) {
            this.value = matches[0];
        } else if (matches.length > 1) {
            appendOutput('<p>' + matches.join(' &nbsp;&nbsp; ') + '</p>');
        }
        return;
    }

    if (e.key === 'Enter') {
        const input = this.value.trim().toLowerCase();
        this.value = '';
        historyIndex = -1;

        if (!input) return;

        commandHistory.unshift(input);

        // Echo the command typed
        config.outputElement.innerHTML +=
            '<p class="prompt-echo"><span class="prompt-label">hassen@portfolio:~$</span> ' + escapeHTML(input) + '</p>';

        if (commands[input]) {
            const result = commands[input]();
            if (typeof result === 'string' && result.length > 0) {
                appendOutput(result + '<br>');
            }
        } else {
            appendOutput(
                '<p>Commande inconnue : <span class="error">' + escapeHTML(input) + '</span>. ' +
                'Tapez <span class="highlight">help</span> pour voir les commandes disponibles.</p>'
            );
        }
    }
});

function appendOutput(html) {
    config.outputElement.innerHTML += html;
    config.outputElement.scrollTop = config.outputElement.scrollHeight;
}

commands.init();
