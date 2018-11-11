const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

const params = {
    nombre: 'carlos grau sal',
    anyo: new Date().getFullYear()
}



/**
 * Middleware es una instruccion o callback que se va a ejecutar siempre 
 * y sin importar que peticion se reciba
 */
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');



// Solicitud GET cuando el path sea una slash '/'. Middleware para filtar peticiones
app.get('/', (req, res) => {
    //res.send('Hola Mundo')

    // let salida = {
    //     nombre: 'Carlos',
    //     edad: 39,
    //     url: req.url
    // }

    // Internamente send serializael objeto y detecta que es un JSON
    //res.send(salida);


    res.render('home', params);

});

app.get('/about', (req, res) => res.render('about', params));

app.get('/data', (req, res) => {
    res.send('Hola data')


});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});