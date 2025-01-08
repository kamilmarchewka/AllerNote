const express = require('express');
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middlewares/logEvents');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

const register = require('./routes/register');

const port = process.env.PORT || 8080;

app.use(logger);

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'client', 'app')));

app.use('/api', require('./routes/api'));

// app.get('/:page', (req, res) => {
//     const { page } = req.params;
//     const allowedPages = ['kalendarz', 'alergeny', 'login', 'rejestracja']; 
//     if (allowedPages.includes(page)) {
//         return res.sendFile(path.join(__dirname, '..', 'client', 'app', page, 'page.js'));
//     }
//     res.status(404).sendFile(path.join(__dirname, '..', 'client', 'app', 'not-found.js'));
// });

app.all('/api/*', (req, res) => {
    res.status(404).json({ message: 'API route not found' });
});

app.use('/rejestracja', register);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
