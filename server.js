const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
//Express HBS engine
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    // res.send('Hola mundo')
    // res.writeHead(200, { 'Content-Type': 'aplication/json' });
    // let salida = {
    //     nombre: 'Cristian',
    //     edad: 26,
    //     url: req.url

    // }
    res.render('home', {
        nombre: 'zoranY henaO'
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Cristian'
    });
})

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
})