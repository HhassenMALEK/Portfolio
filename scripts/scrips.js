const config = {
    outputElement: document.getElementById('output'),
    welcomeText:  ''+
	'<p class="ascii success">' +
				'_____________________________________________________________________________________________ <br>' +
				' _    _                                 __  __       _     _____ _   _ <br>' +
				'| |  | |                               |  \\/  | /\\  | |   |  ___| | / / <br>' +
				'| |__| | __ _  ___  ___  ___  _ __     | \\  / |/  \\ | |   | |___| |/ /<br>' +
				'|  __  |/ _` |/ __|/ __|/ _ \\|  _ \\    | |\\/| | /\\ \\| |   |  ___| | /  <br>' +
				'| |  | | (_| |\\_ \\ \\_ \\|  __/| | | |   | |  | |/__\\ | |___| |___| |\\ \\ <br>' +
				'|_|  |_|\\__,_|___/|___/ \\___||_| |_|   |_|  |_|    \\|_____|_____|_| \\_\\ <br>' +
				'_____________________________________________________________________________________________ <br>'+ 
				'_____________________________________________________________________________________________ </p><br>' 
};

window.onload = function() {
    config.outputElement.innerHTML = config.welcomeText;
};