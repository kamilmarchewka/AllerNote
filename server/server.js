const express = require('express');
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions')
const { logger } = require('./middlewares/logEvents');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

const port = process.env.PORT || 8080;

app.use(logger);

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static files

app.use('/', express.static(path.join(__dirname, '..', 'client', 'app')));
app.use('/login', express.static(path.join(__dirname, '..', 'client', 'app')));
app.use('/rejestracja', express.static(path.join(__dirname, '..', 'client', 'app')));
app.use('/alergeny', express.static(path.join(__dirname, '..', 'client', 'app')));
app.use('/kalendarz', express.static(path.join(__dirname, '..', 'client', 'app')));

// routes

app.use('admin', require('./routes/api/adminRoutes'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'app', 'page.js'));
});

app.get('/kalendarz', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'app', 'kalendarz', 'page.js'));
});

app.get('/alergeny', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'app', 'alergeny', 'page.js')); 
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'app', 'login', 'page.js'));
});

app.get('/rejestracja', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'app', 'rejestracja', 'page.js'));
});

app.all('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'client', 'app', 'not-found.js'));
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
