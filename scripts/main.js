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

const commandHistory = [];
let historyIndex = -1;

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

    if (e.key === 'Enter') {
        const input = this.value.trim().toLowerCase();
        this.value = '';
        historyIndex = -1;

        if (!input) return;

        commandHistory.unshift(input);

        if (commands[input]) {
            const result = commands[input]();
            if (typeof result === 'string' && result.length > 0) {
                config.outputElement.innerHTML += result + '<br>';
                config.outputElement.scrollTop = config.outputElement.scrollHeight;
            }
        } else {
            config.outputElement.innerHTML += 'Unknown command: <span class="error">' + escapeHTML(input) + '</span>. Type <span class="highlight">help</span> to see available commands.<br>';
            config.outputElement.scrollTop = config.outputElement.scrollHeight;
        }
    }
});

commands.init();
