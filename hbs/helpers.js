const hbs = require('hbs');

// Helpers - cuando se importa este helpers.js, el siguiente se ejecuta y se queda REGISTRADO
hbs.registerHelper('getAnyo', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        // Para cada palabra del array de texto, la primera letra estará en mayuscula y el resto en minusculas
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});