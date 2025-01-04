const express = require('express');
const path = require('path');
const logEvents = require('./utils/logEvents');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '..', 'app')));

app.use((req, res, next) => {
    logEvents(`${req.method}\t${req.url}`);
    next();
});

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'app', 'page.js'));
});

app.get('/kalendarz', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'app', 'kalendarz', 'page.js'));
});

app.use('*', (req, res) => {
    res.status(404).send('<h1>Not found</h1>');
});

app.listen(port, () => {
    logEvents(`Log event emitted`);
    console.log(`Server running on port ${port}`);
});
