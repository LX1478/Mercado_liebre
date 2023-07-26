const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded( {extended : false}));

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto:  ' + PORT);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'))
});

app.post('/procesarregistro', (req, res) => {
    /* Procesar los datos que llegan del formulario */
    console.log(req.body);
    /* Redirigir a la pagina de home */
    res.redirect("/");
});

app.post('/procesarlogin', (req, res) => {
    console.log(req.body);
    res.redirect("/");
})

