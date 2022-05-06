function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[1];

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == '../css/sajat.css') {
        theme.setAttribute('href', '../css/contrast.css');
    } else {
        if (theme.getAttribute('href') == '../../css/sajat.css') {
            theme.setAttribute('href', '../../css/contrast.css');
        } else {
            if (theme.getAttribute('href') == '../css/contrast.css') {
                theme.setAttribute('href', '../css/sajat.css');
            } else {
                if (theme.getAttribute('href') == '../../css/contrast.css') {
                    theme.setAttribute('href', "../../css/sajat.css");
                } else {
                    if (theme.getAttribute('href') == 'css/sajat.css') {
                        theme.setAttribute('href', 'css/contrast.css');
                    } else {
                        theme.setAttribute('href', 'css/sajat.css');
                    }
                }
            }
        }
    }
}