const express = require('express');
const path = require('path');
const cors = require('cors');
const { logger } = require('./middlewares/logEvents');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

const port = process.env.PORT || 8080;

app.use(logger);

const whitelist = ['http://127.0.0.1:3000', 'http://localhost:8080', 'http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'app')));

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});

app.get('/kalendarz', (req, res) => {
    res.send('<h1>Kalendarz</h1>');
});

app.all('/*', (req, res) => {
    res.status(404).send('<h1>Not found</h1>');
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
